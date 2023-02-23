<?php

namespace Drupal\buildercv\Controller;

use Drupal\Component\Utility\Xss;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Link;
use Drupal\Core\Url;
use Drupal\buildercv\Entity\ModelCvInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class ModelCvController.
 *
 *  Returns responses for Model cv routes.
 */
class ModelCvController extends ControllerBase implements ContainerInjectionInterface {

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
   * Displays a Model cv revision.
   *
   * @param int $model_cv_revision
   *   The Model cv revision ID.
   *
   * @return array
   *   An array suitable for drupal_render().
   */
  public function revisionShow($model_cv_revision) {
    $model_cv = $this->entityTypeManager()->getStorage('model_cv')
      ->loadRevision($model_cv_revision);
    $view_builder = $this->entityTypeManager()->getViewBuilder('model_cv');

    return $view_builder->view($model_cv);
  }

  /**
   * Page title callback for a Model cv revision.
   *
   * @param int $model_cv_revision
   *   The Model cv revision ID.
   *
   * @return string
   *   The page title.
   */
  public function revisionPageTitle($model_cv_revision) {
    $model_cv = $this->entityTypeManager()->getStorage('model_cv')
      ->loadRevision($model_cv_revision);
    return $this->t('Revision of %title from %date', [
      '%title' => $model_cv->label(),
      '%date' => $this->dateFormatter->format($model_cv->getRevisionCreationTime()),
    ]);
  }

  /**
   * Generates an overview table of older revisions of a Model cv.
   *
   * @param \Drupal\buildercv\Entity\ModelCvInterface $model_cv
   *   A Model cv object.
   *
   * @return array
   *   An array as expected by drupal_render().
   */
  public function revisionOverview(ModelCvInterface $model_cv) {
    $account = $this->currentUser();
    $model_cv_storage = $this->entityTypeManager()->getStorage('model_cv');

    $langcode = $model_cv->language()->getId();
    $langname = $model_cv->language()->getName();
    $languages = $model_cv->getTranslationLanguages();
    $has_translations = (count($languages) > 1);
    $build['#title'] = $has_translations ? $this->t('@langname revisions for %title', ['@langname' => $langname, '%title' => $model_cv->label()]) : $this->t('Revisions for %title', ['%title' => $model_cv->label()]);

    $header = [$this->t('Revision'), $this->t('Operations')];
    $revert_permission = (($account->hasPermission("revert all model cv revisions") || $account->hasPermission('administer model cv entities')));
    $delete_permission = (($account->hasPermission("delete all model cv revisions") || $account->hasPermission('administer model cv entities')));

    $rows = [];

    $vids = $model_cv_storage->revisionIds($model_cv);

    $latest_revision = TRUE;

    foreach (array_reverse($vids) as $vid) {
      /** @var \Drupal\buildercv\Entity\ModelCvInterface $revision */
      $revision = $model_cv_storage->loadRevision($vid);
      // Only show revisions that are affected by the language that is being
      // displayed.
      if ($revision->hasTranslation($langcode) && $revision->getTranslation($langcode)->isRevisionTranslationAffected()) {
        $username = [
          '#theme' => 'username',
          '#account' => $revision->getRevisionUser(),
        ];

        // Use revision link to link to revisions that are not active.
        $date = $this->dateFormatter->format($revision->getRevisionCreationTime(), 'short');
        if ($vid != $model_cv->getRevisionId()) {
          $link = Link::fromTextAndUrl($date, new Url('entity.model_cv.revision', [
            'model_cv' => $model_cv->id(),
            'model_cv_revision' => $vid,
          ]))->toString();
        }
        else {
          $link = $model_cv->toLink($date)->toString();
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
              Url::fromRoute('entity.model_cv.translation_revert', [
                'model_cv' => $model_cv->id(),
                'model_cv_revision' => $vid,
                'langcode' => $langcode,
              ]) :
              Url::fromRoute('entity.model_cv.revision_revert', [
                'model_cv' => $model_cv->id(),
                'model_cv_revision' => $vid,
              ]),
            ];
          }

          if ($delete_permission) {
            $links['delete'] = [
              'title' => $this->t('Delete'),
              'url' => Url::fromRoute('entity.model_cv.revision_delete', [
                'model_cv' => $model_cv->id(),
                'model_cv_revision' => $vid,
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

    $build['model_cv_revisions_table'] = [
      '#theme' => 'table',
      '#rows' => $rows,
      '#header' => $header,
    ];

    return $build;
  }

}
