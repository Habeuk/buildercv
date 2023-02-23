<?php

namespace Drupal\buildercv\Controller;

use Drupal\Component\Utility\Xss;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Link;
use Drupal\Core\Url;
use Drupal\buildercv\Entity\CvEntityInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class CvEntityController.
 *
 *  Returns responses for Cv entity routes.
 */
class CvEntityController extends ControllerBase implements ContainerInjectionInterface {

  /**
   * The date formatter.
   *
   * @var \Drupal\Core\Datetime\DateFormatter
   */
  protected $dateFormatter;

  /**
   * The renderer.
   *
   * @var \Drupal\Core\Render\Renderer
   */
  protected $renderer;

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    $instance = parent::create($container);
    $instance->dateFormatter = $container->get('date.formatter');
    $instance->renderer = $container->get('renderer');
    return $instance;
  }

  /**
   * Displays a Cv entity revision.
   *
   * @param int $cv_entity_revision
   *   The Cv entity revision ID.
   *
   * @return array
   *   An array suitable for drupal_render().
   */
  public function revisionShow($cv_entity_revision) {
    $cv_entity = $this->entityTypeManager()->getStorage('cv_entity')
      ->loadRevision($cv_entity_revision);
    $view_builder = $this->entityTypeManager()->getViewBuilder('cv_entity');

    return $view_builder->view($cv_entity);
  }

  /**
   * Page title callback for a Cv entity revision.
   *
   * @param int $cv_entity_revision
   *   The Cv entity revision ID.
   *
   * @return string
   *   The page title.
   */
  public function revisionPageTitle($cv_entity_revision) {
    $cv_entity = $this->entityTypeManager()->getStorage('cv_entity')
      ->loadRevision($cv_entity_revision);
    return $this->t('Revision of %title from %date', [
      '%title' => $cv_entity->label(),
      '%date' => $this->dateFormatter->format($cv_entity->getRevisionCreationTime()),
    ]);
  }

  /**
   * Generates an overview table of older revisions of a Cv entity.
   *
   * @param \Drupal\buildercv\Entity\CvEntityInterface $cv_entity
   *   A Cv entity object.
   *
   * @return array
   *   An array as expected by drupal_render().
   */
  public function revisionOverview(CvEntityInterface $cv_entity) {
    $account = $this->currentUser();
    $cv_entity_storage = $this->entityTypeManager()->getStorage('cv_entity');

    $langcode = $cv_entity->language()->getId();
    $langname = $cv_entity->language()->getName();
    $languages = $cv_entity->getTranslationLanguages();
    $has_translations = (count($languages) > 1);
    $build['#title'] = $has_translations ? $this->t('@langname revisions for %title', ['@langname' => $langname, '%title' => $cv_entity->label()]) : $this->t('Revisions for %title', ['%title' => $cv_entity->label()]);

    $header = [$this->t('Revision'), $this->t('Operations')];
    $revert_permission = (($account->hasPermission("revert all cv entity revisions") || $account->hasPermission('administer cv entity entities')));
    $delete_permission = (($account->hasPermission("delete all cv entity revisions") || $account->hasPermission('administer cv entity entities')));

    $rows = [];

    $vids = $cv_entity_storage->revisionIds($cv_entity);

    $latest_revision = TRUE;

    foreach (array_reverse($vids) as $vid) {
      /** @var \Drupal\buildercv\Entity\CvEntityInterface $revision */
      $revision = $cv_entity_storage->loadRevision($vid);
      // Only show revisions that are affected by the language that is being
      // displayed.
      if ($revision->hasTranslation($langcode) && $revision->getTranslation($langcode)->isRevisionTranslationAffected()) {
        $username = [
          '#theme' => 'username',
          '#account' => $revision->getRevisionUser(),
        ];

        // Use revision link to link to revisions that are not active.
        $date = $this->dateFormatter->format($revision->getRevisionCreationTime(), 'short');
        if ($vid != $cv_entity->getRevisionId()) {
          $link = Link::fromTextAndUrl($date, new Url('entity.cv_entity.revision', [
            'cv_entity' => $cv_entity->id(),
            'cv_entity_revision' => $vid,
          ]))->toString();
        }
        else {
          $link = $cv_entity->toLink($date)->toString();
        }

        $row = [];
        $column = [
          'data' => [
            '#type' => 'inline_template',
            '#template' => '{% trans %}{{ date }} by {{ username }}{% endtrans %}{% if message %}<p class="revision-log">{{ message }}</p>{% endif %}',
            '#context' => [
              'date' => $link,
              'username' => $this->renderer->renderPlain($username),
              'message' => [
                '#markup' => $revision->getRevisionLogMessage(),
                '#allowed_tags' => Xss::getHtmlTagList(),
              ],
            ],
          ],
        ];
        $row[] = $column;

        if ($latest_revision) {
          $row[] = [
            'data' => [
              '#prefix' => '<em>',
              '#markup' => $this->t('Current revision'),
              '#suffix' => '</em>',
            ],
          ];
          foreach ($row as &$current) {
            $current['class'] = ['revision-current'];
          }
          $latest_revision = FALSE;
        }
        else {
          $links = [];
          if ($revert_permission) {
            $links['revert'] = [
              'title' => $this->t('Revert'),
              'url' => $has_translations ?
              Url::fromRoute('entity.cv_entity.translation_revert', [
                'cv_entity' => $cv_entity->id(),
                'cv_entity_revision' => $vid,
                'langcode' => $langcode,
              ]) :
              Url::fromRoute('entity.cv_entity.revision_revert', [
                'cv_entity' => $cv_entity->id(),
                'cv_entity_revision' => $vid,
              ]),
            ];
          }

          if ($delete_permission) {
            $links['delete'] = [
              'title' => $this->t('Delete'),
              'url' => Url::fromRoute('entity.cv_entity.revision_delete', [
                'cv_entity' => $cv_entity->id(),
                'cv_entity_revision' => $vid,
              ]),
            ];
          }

          $row[] = [
            'data' => [
              '#type' => 'operations',
              '#links' => $links,
            ],
          ];
        }

        $rows[] = $row;
      }
    }

    $build['cv_entity_revisions_table'] = [
      '#theme' => 'table',
      '#rows' => $rows,
      '#header' => $header,
    ];

    return $build;
  }

}
