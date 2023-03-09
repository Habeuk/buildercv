<?php

namespace Drupal\buildercv\Plugin\Field\FieldType;

use Drupal\Component\Utility\Random;
use Drupal\Core\Field\FieldDefinitionInterface;
use Drupal\Core\Field\FieldItemBase;
use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\StringTranslation\TranslatableMarkup;
use Drupal\Core\TypedData\DataDefinition;

/**
 * Plugin implementation of the 'experience_type' field type.
 *
 * @FieldType(
 *   id = "value_niveau_type",
 *   label = @Translation("Value Niveau @deprecated "),
 *   description = @Translation("Permet d'associer à une valeur taxonomie un niveau de 1 à 5 "),
 *   default_widget = "value_niveau_widget_type",
 *   default_formatter = "value_niveau_formatter_type"
 * )
 */
class ValueNiveauType extends FieldItemBase {
  
  /**
   *
   * {@inheritdoc}
   */
  public static function defaultStorageSettings() {
    return [] + parent::defaultStorageSettings();
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
    // Prevent early t() calls by using the TranslatableMarkup.
    $properties['target_id'] = DataDefinition::create('integer')->setLabel(t('Reference entity'))->setRequired(TRUE);
    $properties['niveau'] = DataDefinition::create('integer')->setLabel(t('Integer value'))->setRequired(TRUE);
    return $properties;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public static function schema(FieldStorageDefinitionInterface $field_definition) {
    $schema = [
      'columns' => [
        'target_id' => [
          'type' => 'int',
          'unsigned' => FALSE, // pas de valeur negative
          'size' => 'normal'
        ],
        'niveau' => [
          'type' => 'int',
          'unsigned' => FALSE, // pas de valeur negative
          'size' => 'tiny'
        ]
      ]
    ];
    return $schema;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function getConstraints() {
    $constraints = parent::getConstraints();
    return $constraints;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public static function generateSampleValue(FieldDefinitionInterface $field_definition) {
    $values = [];
    return $values;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function storageSettingsForm(array &$form, FormStateInterface $form_state, $has_data) {
    $elements = [];
    
    return $elements;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function isEmpty() {
    $value = $this->get('target_id')->getValue();
    return $value === NULL || $value === '';
  }
  
  /**
   *
   * @return string
   */
  public static function mainPropertyName() {
    return 'target_id';
  }
  
}
