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

/**
 * Defines the Cv entity entity.
 *
 * @ingroup buildercv
 *
 * @ContentEntityType(
 *   id = "cv_entity",
 *   label = @Translation("Cv entity"),
 *   handlers = {
 *     "storage" = "Drupal\buildercv\CvEntityStorage",
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\buildercv\CvEntityListBuilder",
 *     "views_data" = "Drupal\buildercv\Entity\CvEntityViewsData",
 *     "translation" = "Drupal\buildercv\CvEntityTranslationHandler",
 *
 *     "form" = {
 *       "default" = "Drupal\buildercv\Form\CvEntityForm",
 *       "add" = "Drupal\buildercv\Form\CvEntityForm",
 *       "edit" = "Drupal\buildercv\Form\CvEntityForm",
 *       "delete" = "Drupal\buildercv\Form\CvEntityDeleteForm",
 *     },
 *     "route_provider" = {
 *       "html" = "Drupal\buildercv\CvEntityHtmlRouteProvider",
 *     },
 *     "access" = "Drupal\buildercv\CvEntityAccessControlHandler",
 *   },
 *   base_table = "cv_entity",
 *   data_table = "cv_entity_field_data",
 *   revision_table = "cv_entity_revision",
 *   revision_data_table = "cv_entity_field_revision",
 *   show_revision_ui = TRUE,
 *   translatable = TRUE,
 *   admin_permission = "administer cv entity entities",
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
 *     "canonical" = "/cv-entity/{cv_entity}",
 *     "add-form" = "/admin/structure/cv_entity/add",
 *     "edit-form" = "/admin/structure/cv_entity/{cv_entity}/edit",
 *     "delete-form" = "/admin/structure/cv_entity/{cv_entity}/delete",
 *     "version-history" = "/admin/structure/cv_entity/{cv_entity}/revisions",
 *     "revision" = "/admin/structure/cv_entity/{cv_entity}/revisions/{cv_entity_revision}/view",
 *     "revision_revert" = "/admin/structure/cv_entity/{cv_entity}/revisions/{cv_entity_revision}/revert",
 *     "revision_delete" = "/admin/structure/cv_entity/{cv_entity}/revisions/{cv_entity_revision}/delete",
 *     "translation_revert" = "/admin/structure/cv_entity/{cv_entity}/revisions/{cv_entity_revision}/revert/{langcode}",
 *     "collection" = "/admin/structure/cv_entity",
 *   },
 *   field_ui_base_route = "cv_entity.settings"
 * )
 */
class CvEntity extends EditorialContentEntityBase implements CvEntityInterface {
  
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
    // make the cv_entity owner the revision author.
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
    
    // Add the published field.
    $fields += static::publishedBaseFieldDefinitions($entity_type);
    
    $fields['user_id'] = BaseFieldDefinition::create('entity_reference')->setLabel(t('Authored by'))->setDescription(t('The user ID of author of the Cv entity entity.'))->setRevisionable(TRUE)->setSetting('target_type', 'user')->setSetting('handler', 'default')->setTranslatable(TRUE)->setDisplayOptions('view', [
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
    
    $fields['name'] = BaseFieldDefinition::create('string')->setLabel(t('Name'))->setDescription(t('The name of the Cv entity entity.'))->setRevisionable(TRUE)->setSettings([
      'max_length' => 250,
      'text_processing' => 0
    ])->setDefaultValue('')->setDisplayOptions('view', [
      'label' => 'above',
      'type' => 'string',
      'weight' => -4
    ])->setDisplayOptions('form', [
      'type' => 'string_textfield',
      'weight' => -4
    ])->setDisplayConfigurable('form', TRUE)->setDisplayConfigurable('view', TRUE)->setRequired(TRUE);
    
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
    
    $fields['status']->setDescription(t('A boolean indicating whether the Cv entity is published.'))->setDisplayOptions('form', [
      'type' => 'boolean_checkbox',
      'weight' => -3
    ]);
    
    $fields['created'] = BaseFieldDefinition::create('created')->setLabel(t('Created'))->setDescription(t('The time that the entity was created.'));
    
    $fields['changed'] = BaseFieldDefinition::create('changed')->setLabel(t('Changed'))->setDescription(t('The time that the entity was last edited.'));
    
    $fields['revision_translation_affected'] = BaseFieldDefinition::create('boolean')->setLabel(t('Revision translation affected'))->setDescription(t('Indicates if the last edit of a translation belongs to current revision.'))->setReadOnly(TRUE)->setRevisionable(TRUE)->setTranslatable(TRUE);
    
    return $fields;
  }
  
}
