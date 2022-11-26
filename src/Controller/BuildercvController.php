<?php

namespace Drupal\buildercv\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Component\Serialization\Json;
use Symfony\Component\HttpFoundation\Request;
use Stephane888\DrupalUtility\HttpResponse;
use Stephane888\Debug\ExceptionDebug;
use Stephane888\Debug\ExceptionExtractMessage;
use Drupal\vuejs_entity\Services\DuplicateEntityReference;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Returns responses for buildercv routes.
 */
class BuildercvController extends ControllerBase {
  
  /**
   *
   * @var DuplicateEntityReference
   */
  protected $DuplicateEntityReference;
  
  /**
   *
   * @param DuplicateEntityReference $DuplicateEntityReference
   */
  function __construct(DuplicateEntityReference $DuplicateEntityReference) {
    $this->DuplicateEntityReference = $DuplicateEntityReference;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('vuejs_entity.duplicate.entity'));
  }
  
  /**
   * Builds the response.
   */
  public function BuildCv($id) {
    $build['content'] = [
      '#type' => 'html_tag',
      '#tag' => 'section',
      "#attributes" => [
        'id' => 'app',
        'class' => [
          'm-5',
          'p-5'
        ]
      ]
    ];
    //
    $build['content']['#attached']['library'][] = 'buildercv/buildercv';
    return $build;
  }
  
  /**
   * Permet de creer la page d'accueil.
   */
  public function createHomePage(Request $Request, $id) {
    /**
     * On recupere le model de CV.
     *
     * @var \Drupal\buildercv\Entity\ModelCv $entityModel
     */
    $entityModel = $this->entityTypeManager()->getStorage("model_cv")->load($id);
    if ($entityModel) {
      try {
        // Contenu de la page d'accueil.
        $values = Json::decode($Request->getContent());
        /**
         *
         * @var \Drupal\buildercv\Entity\ModelCv $cv_entity
         */
        $cv_entity = $this->entityTypeManager()->getStorage("cv_entity")->create($values);
        $cv_entity->set('layout_paragraphs', $entityModel->get('layout_paragraphs')->getValue());
        // $this->duplicateExistantReference($pageWeb);
        $this->DuplicateEntityReference->duplicateExistantReference($cv_entity);
        $cv_entity->save();
        return HttpResponse::reponse($cv_entity->toArray());
      }
      catch (\Exception $e) {
        $errors = ExceptionExtractMessage::errorAllToString($e);
        $this->getLogger('buildercv')->critical($e->getMessage() . '<br>' . $errors);
        return HttpResponse::reponse(ExceptionExtractMessage::errorAll($e), 400, $e->getMessage());
      }
    }
    else {
      $this->getLogger('buildercv')->critical(" Le contenu model n'existe plus : " . $id);
      return HttpResponse::reponse([], 400, " Le contenu model n'existe plus : " . $id);
    }
  }
  
  /**
   *
   * @param Request $Request
   */
  function GenerateCV(Request $Request) {
    $content = Json::decode($Request->getContent());
    try {
      // Verification de la formation.
      if (empty($content['presentaton']))
        throw new \Exception("Le paragraph presentation n'est pas definit.");
      // Verification de la experience.
      if (empty($content['experience']))
        throw new \Exception("Le paragraph experience n'est pas definit.");
      // Verification de la formation.
      if (empty($content['formation']))
        throw new \Exception("Le paragraph formation n'est pas definit.");
    }
    catch (\Exception $e) {
      return HttpResponse::response([], 431, $e->getMessage());
    }
    return HttpResponse::response($content);
  }
  
}
