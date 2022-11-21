<?php

namespace Drupal\buildercv\Entity;

use Drupal\Core\Entity\EntityStorageInterface;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\Core\Entity\EditorialContentEntityBase;
use Drupal\Core\Entity\RevisionableInterface;
use Drupal\Core\Entity\EntityChangedTrait;
use Drupal\Core\Entity\EntityPublishedTrait;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\user\UserInterface;
use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\link\LinkItemInterface;

/**
 * Defines the Model cv entity.
 *
 * @ingroup buildercv
 *
 * @ContentEntityType(
 *   id = "model_cv",
 *   label = @Translation("Model cv"),
 *   handlers = {
 *     "storage" = "Drupal\buildercv\ModelCvStorage",
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\buildercv\ModelCvListBuilder",
 *     "views_data" = "Drupal\buildercv\Entity\ModelCvViewsData",
 *     "translation" = "Drupal\buildercv\ModelCvTranslationHandler",
 *
 *     "form" = {
 *       "default" = "Drupal\buildercv\Form\ModelCvForm",
 *       "add" = "Drupal\buildercv\Form\ModelCvForm",
 *       "edit" = "Drupal\buildercv\Form\ModelCvForm",
 *       "delete" = "Drupal\buildercv\Form\ModelCvDeleteForm",
 *     },
 *     "route_provider" = {
 *       "html" = "Drupal\buildercv\ModelCvHtmlRouteProvider",
 *     },
 *     "access" = "Drupal\buildercv\ModelCvAccessControlHandler",
 *   },
 *   base_table = "model_cv",
 *   data_table = "model_cv_field_data",
 *   revision_table = "model_cv_revision",
 *   revision_data_table = "model_cv_field_revision",
 *   show_revision_ui = TRUE,
 *   translatable = TRUE,
 *   admin_permission = "administer model cv entities",
 *   entity_keys = {
 *     "id" = "id",
 *     "revision" = "vid",
 *     "label" = "name",
 *     "uuid" = "uuid",
 *     "uid" = "user_id",
 *     "langcode" = "langcode",
 *     "published" = "status",
 *   },
 *   revision_metadata_keys = {
 *     "revision_user" = "revision_uid",
 *     "revision_created" = "revision_timestamp",
 *     "revision_log_message" = "revision_log"
 *   },
 *   links = {
 *     "canonical" = "/model/cv/model_cv/{model_cv}",
 *     "add-form" = "/model/cv/model_cv/add",
 *     "edit-form" = "/model/cv/model_cv/{model_cv}/edit",
 *     "delete-form" = "/model/cv/model_cv/{model_cv}/delete",
 *     "version-history" = "/model/cv/model_cv/{model_cv}/revisions",
 *     "revision" = "/model/cv/model_cv/{model_cv}/revisions/{model_cv_revision}/view",
 *     "revision_revert" = "/model/cv/model_cv/{model_cv}/revisions/{model_cv_revision}/revert",
 *     "revision_delete" = "/model/cv/model_cv/{model_cv}/revisions/{model_cv_revision}/delete",
 *     "translation_revert" = "/model/cv/model_cv/{model_cv}/revisions/{model_cv_revision}/revert/{langcode}",
 *     "collection" = "/model/cv/model_cv",
 *   },
 *   field_ui_base_route = "model_cv.settings"
 * )
 */
class ModelCv extends EditorialContentEntityBase implements ModelCvInterface {

  use EntityChangedTrait;
  use EntityPublishedTrait;

  /**
   *
   * {@inheritdoc}
   */
  public static function preCreate(EntityStorageInterface $storage_controller, array &$values) {
    parent::preCreate($storage_controller, $values);
    $values += [
      'user_id' => \Drupal::currentUser()->id()
    ];
  }

  /**
   *
   * {@inheritdoc}
   */
  protected function urlRouteParameters($rel) {
    $uri_route_parameters = parent::urlRouteParameters($rel);

    if ($rel === 'revision_revert' && $this instanceof RevisionableInterface) {
      $uri_route_parameters[$this->getEntityTypeId() . '_revision'] = $this->getRevisionId();
    }
    elseif ($rel === 'revision_delete' && $this instanceof RevisionableInterface) {
      $uri_route_parameters[$this->getEntityTypeId() . '_revision'] = $this->getRevisionId();
    }

    return $uri_route_parameters;
  }

  /**
   *
   * {@inheritdoc}
   */
  public function preSave(EntityStorageInterface $storage) {
    parent::preSave($storage);

    foreach (array_keys($this->getTranslationLanguages()) as $langcode) {
      $translation = $this->getTranslation($langcode);

      // If no owner has been set explicitly, make the anonymous user the owner.
      if (!$translation->getOwner()) {
        $translation->setOwnerId(0);
      }
    }

    // If no revision author has been set explicitly,
    // make the model_cv owner the revision author.
    if (!$this->getRevisionUser()) {
      $this->setRevisionUserId($this->getOwnerId());
    }
  }

  /**
   *
   * {@inheritdoc}
   */
  public function getName() {
    return $this->get('name')->value;
  }

  /**
   *
   * {@inheritdoc}
   */
  public function setName($name) {
    $this->set('name', $name);
    return $this;
  }

  /**
   *
   * {@inheritdoc}
   */
  public function getCreatedTime() {
    return $this->get('created')->value;
  }

  /**
   *
   * {@inheritdoc}
   */
  public function setCreatedTime($timestamp) {
    $this->set('created', $timestamp);
    return $this;
  }

  /**
   *
   * {@inheritdoc}
   */
  public function getOwner() {
    return $this->get('user_id')->entity;
  }

  /**
   *
   * {@inheritdoc}
   */
  public function getOwnerId() {
    return $this->get('user_id')->target_id;
  }

  /**
   *
   * {@inheritdoc}
   */
  public function setOwnerId($uid) {
    $this->set('user_id', $uid);
    return $this;
  }

  /**
   *
   * {@inheritdoc}
   */
  public function setOwner(UserInterface $account) {
    $this->set('user_id', $account->id());
    return $this;
  }

  /**
   *
   * {@inheritdoc}
   */
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    $fields = parent::baseFieldDefinitions($entity_type);

    $configs = \Drupal::config('creation_site_virtuel.settings')->getRawData();
    $entete_paragraph_type = [];
    foreach ($configs['entete_paragraph_type'] as $v) {
      if ($v)
        $entete_paragraph_type[$v] = $v;
    }
    $footer_paragraph_type = [];
    foreach ($configs['footer_paragraph_type'] as $v) {
      if ($v)
        $footer_paragraph_type[$v] = $v;
    }

    // Add the published field.
    $fields += static::publishedBaseFieldDefinitions($entity_type);

    $fields['user_id'] = BaseFieldDefinition::create('entity_reference')->setLabel(t('Authored by'))->setDescription(t('The user ID of author of the Model cv entity.'))->setRevisionable(TRUE)->setSetting('target_type', 'user')->setSetting('handler', 'default')->setTranslatable(TRUE)->setDisplayOptions('view', [
      'label' => 'hidden',
      'type' => 'author',
      'weight' => 0
    ])->setDisplayOptions('form', [
      'type' => 'entity_reference_autocomplete',
      'weight' => 5,
      'settings' => [
        'match_operator' => 'CONTAINS',
        'size' => '60',
        'autocomplete_type' => 'tags',
        'placeholder' => ''
      ]
    ])->setDisplayConfigurable('form', TRUE)->setDisplayConfigurable('view', TRUE);

    $fields['name'] = BaseFieldDefinition::create('string')->setLabel(t('Name'))->setDescription(t('The name of the Model cv entity.'))->setRevisionable(TRUE)->setSettings([
      'max_length' => 50,
      'text_processing' => 0
    ])->setDefaultValue('')->setDisplayOptions('view', [
      'label' => 'above',
      'type' => 'string',
      'weight' => -4
    ])->setDisplayOptions('form', [
      'type' => 'string_textfield',
      'weight' => -4
    ])->setDisplayConfigurable('form', TRUE)->setDisplayConfigurable('view', TRUE)->setRequired(TRUE);

    $fields['name_menu'] = BaseFieldDefinition::create('string')->setLabel(t('Text à afficher sur le menu'))->setDescription(t('The name of the Site type datas entity.'))->setSettings([
      'max_length' => 50,
      'text_processing' => 0
    ])->setDefaultValue('')->setDisplayOptions('view', [
      'label' => 'above',
      'type' => 'string',
      'weight' => -4
    ])->setDisplayOptions('form', [
      'type' => 'string_textfield',
      'weight' => 2
    ])->setDisplayConfigurable('form', TRUE)->setDisplayConfigurable('view', TRUE)->setRequired(TRUE)->setTranslatable(true);

    $fields['entete_paragraph'] = BaseFieldDefinition::create('entity_reference')->setLabel(t('Entête'))->setCardinality(1)->setRequired(false)->setSetting('handler_settings', [
      'target_bundles' => $entete_paragraph_type
    ])->setDisplayOptions('form', [
      'type' => 'inline_entity_form_complex',
      'weight' => 0
    ])->setDisplayConfigurable('form', TRUE)->setDisplayConfigurable('view', TRUE)->setSetting('target_type', 'paragraph')->setSetting('handler', 'default')->setTranslatable(false)->setSetting('allow_duplicate', false);
    //
    $fields['footer_paragraph'] = BaseFieldDefinition::create('entity_reference')->setLabel(t('Footer'))->setCardinality(1)->setRequired(false)->setSetting('handler_settings', [
      'target_bundles' => $footer_paragraph_type
    ])->setDisplayOptions('form', [
      'type' => 'inline_entity_form_complex',
      'weight' => 0
    ])->setDisplayConfigurable('form', TRUE)->setDisplayConfigurable('view', TRUE)->setSetting('target_type', 'paragraph')->setSetting('handler', 'default')->setTranslatable(false)->setSetting('allow_duplicate', false);

    // Permet de definir faire apparaitre le dit modele sur la liste de
    // selection.
    $fields['is_home_page'] = BaseFieldDefinition::create('boolean')->setLabel(" Page d'accueil ? ")->setDisplayOptions('form', [
      'type' => 'boolean_checkbox',
      'weight' => 5
    ])->setDisplayOptions('view', [])->setDisplayConfigurable('view', TRUE)->setDisplayConfigurable('form', true)->setDefaultValue(false);

    // On permet l'ajout des pages supplementaires qui seront creer par defaut.
    /**
     * SetDefaultValueCallback not work with select2_entity_reference ( On a la
     * surchargée au niveau du formualire ).
     */
    $fields['page_supplementaires'] = BaseFieldDefinition::create('entity_reference')->setLabel(t(' Page supplementaire '))->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED)->setDisplayOptions('form', [
      'type' => 'select2_entity_reference',
      'weight' => 3,
      'settings' => array(
        'match_operator' => 'CONTAINS',
        'size' => '10',
        'autocomplete_type' => 'tags',
        'placeholder' => ''
      )
    ])->setDefaultValueCallback("\Drupal\buildercv\Buildercv::getDefautPage")->setDisplayConfigurable('form', TRUE)->setDisplayConfigurable('view', TRUE)->setSetting('target_type', 'model_cv')->setSetting('handler', 'default')->setDescription(' Selectionner les pages qui seront automatiquement creer ');

    //
    $fields['terms'] = BaseFieldDefinition::create('entity_reference')->setLabel(" Sélectionner les domaines de competances ")->setDisplayOptions('form', [
      'type' => 'select2_entity_reference',
      'weight' => 5,
      'settings' => array(
        'match_operator' => 'CONTAINS',
        'size' => '10',
        'autocomplete_type' => 'tags',
        'placeholder' => ''
      )
    ])->setDisplayConfigurable('view', TRUE)->setDisplayConfigurable('form', true)->setDescription(t(" Selectionnez ou ajouté une categorie pour ce theme "))->setSetting('handler_settings', [
      'target_bundles' => [
        'domaine_competance' => 'domaine_competance'
      ],
      'sort' => [
        'field' => 'name',
        'direction' => 'asc'
      ],
      'auto_create' => true,
      'auto_create_bundle' => ''
    ])->setSetting('target_type', 'taxonomy_term')->setSetting('handler', 'default:taxonomy_term')->setRevisionable(TRUE)->setCardinality(-1);

    $fields['image'] = BaseFieldDefinition::create('image')->setLabel(' Image du model ')->setRequired(false)->setDisplayConfigurable('form', true)->setDisplayConfigurable('view', TRUE)->setSetting("min_resolution", "500x500");
    //
    $fields['style_scss'] = BaseFieldDefinition::create('string_long')->setLabel(" Style scss (les variables, mixins de wbu-atomique sont disponible) ")->setDisplayOptions('form', [
      'type' => 'string_textarea',
      'weight' => 25,
      'settings' => [
        'rows' => 4
      ]
    ])->setDisplayConfigurable('view', TRUE)->setDisplayConfigurable('form', true);
    //
    $fields['style_js'] = BaseFieldDefinition::create('string_long')->setLabel(" Style JS ")->setDisplayOptions('form', [
      'type' => 'string_textarea',
      'weight' => 25,
      'settings' => [
        'rows' => 4
      ]
    ])->setDisplayConfigurable('view', TRUE)->setDisplayConfigurable('form', true);
    //
    $fields['layout_paragraphs'] = BaseFieldDefinition::create('entity_reference')->setLabel(t(' Sections '))->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED)->setDisplayOptions('form', [
      'type' => 'inline_entity_form_complex',
      'weight' => 0
    ])->setDisplayConfigurable('form', TRUE)->setDisplayConfigurable('view', TRUE)->setSetting('target_type', 'paragraph')->setSetting('handler', 'default')->setTranslatable(false)->setSetting('allow_duplicate', true);

    //
    $fields['presentation'] = BaseFieldDefinition::create('entity_reference')->setLabel(t(' Section presentation '))->setDisplayOptions('form', [
      'type' => 'inline_entity_form_complex',
      'weight' => 0
    ])->setDisplayConfigurable('form', TRUE)->setDisplayConfigurable('view', TRUE)->setSetting('target_type', 'paragraph')->setSetting('handler', 'default')->setTranslatable(false)->setSetting('allow_duplicate', true);
    //
    $fields['experience'] = BaseFieldDefinition::create('entity_reference')->setLabel(t(' Section experience '))->setDisplayOptions('form', [
      'type' => 'inline_entity_form_complex',
      'weight' => 0
    ])->setDisplayConfigurable('form', TRUE)->setDisplayConfigurable('view', TRUE)->setSetting('target_type', 'paragraph')->setSetting('handler', 'default')->setTranslatable(false)->setSetting('allow_duplicate', true);
    //
    $fields['formation'] = BaseFieldDefinition::create('entity_reference')->setLabel(t(' Section formation '))->setDisplayOptions('form', [
      'type' => 'inline_entity_form_complex',
      'weight' => 0
    ])->setDisplayConfigurable('form', TRUE)->setDisplayConfigurable('view', TRUE)->setSetting('target_type', 'paragraph')->setSetting('handler', 'default')->setTranslatable(false)->setSetting('allow_duplicate', true);

    //
    $fields['je_choisie_text'] = BaseFieldDefinition::create('string')->setLabel(t('Je choisie (texte)'))->setDisplayConfigurable('form', true)->setDisplayConfigurable('view', TRUE)->setTranslatable(true)->setDefaultValue('Je choisis');

    //
    $fields['voir_demo'] = BaseFieldDefinition::create('link')->setLabel(t('Voir la demo'))->setSetting('link_type', LinkItemInterface::LINK_GENERIC)->setSetting('title', DRUPAL_OPTIONAL)->setTranslatable(true)->setDisplayConfigurable('form', true)->setDisplayConfigurable('view', TRUE);

    //
    $fields['status']->setDescription(t('A boolean indicating whether the Model cv is published.'))->setDisplayOptions('form', [
      'type' => 'boolean_checkbox',
      'weight' => -3
    ]);

    $fields['created'] = BaseFieldDefinition::create('created')->setLabel(t('Created'))->setDescription(t('The time that the entity was created.'));

    $fields['changed'] = BaseFieldDefinition::create('changed')->setLabel(t('Changed'))->setDescription(t('The time that the entity was last edited.'));

    $fields['revision_translation_affected'] = BaseFieldDefinition::create('boolean')->setLabel(t('Revision translation affected'))->setDescription(t('Indicates if the last edit of a translation belongs to current revision.'))->setReadOnly(TRUE)->setRevisionable(TRUE)->setTranslatable(TRUE);

    return $fields;
  }

}
