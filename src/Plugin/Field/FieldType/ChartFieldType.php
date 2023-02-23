<?php

namespace Drupal\buildercv\Plugin\Field\FieldType;

use Drupal\Core\Field\FieldDefinitionInterface;
use Drupal\Core\Field\FieldItemBase;
use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\StringTranslation\TranslatableMarkup;
use Drupal\Core\TypedData\DataDefinition;

/**
 * Plugin implementation of the 'chart_field_type' field type.
 *
 * @FieldType(
 *   id = "chart_field_type",
 *   label = @Translation("Chart/Diagramme field "),
 *   description = @Translation("permet de contruire rapidement un diagram"),
 *   default_widget = "chart_widget_type",
 *   default_formatter = "chart_formatter_type"
 * )
 */
class ChartFieldType extends FieldItemBase {
  
  /**
   *
   * {@inheritdoc}
   */
  public static function defaultStorageSettings() {
    return [
      'precision' => 10,
      'scale' => 2,
      'max_length' => 100,
      'case_sensitive' => false
    ] + parent::defaultStorageSettings();
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
    // Prevent early t() calls by using the TranslatableMarkup.
    $properties['label'] = DataDefinition::create('string')->setLabel(new TranslatableMarkup('Text value'))->setSetting('case_sensitive', $field_definition->getSetting('case_sensitive'))->setRequired(TRUE);
    $properties['value'] = DataDefinition::create('string')->setLabel(new TranslatableMarkup('Decimal value'))->setSetting('case_sensitive', $field_definition->getSetting('case_sensitive'))->setRequired(TRUE);
    return $properties;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public static function schema(FieldStorageDefinitionInterface $field_definition) {
    $schema = [
      'columns' => [
        'label' => [
          'type' => $field_definition->getSetting('is_ascii') === TRUE ? 'varchar_ascii' : 'varchar',
          'length' => (int) $field_definition->getSetting('max_length'),
          'binary' => $field_definition->getSetting('case_sensitive')
        ],
        'color' => [
          'type' => 'varchar_ascii',
          'length' => 200
        ],
        'value' => [
          'type' => 'numeric',
          'precision' => $field_definition->getSetting('precision'),
          'scale' => $field_definition->getSetting('scale')
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
    $constraint_manager = \Drupal::typedDataManager()->getValidationConstraintManager();
    $constraints = parent::getConstraints();
    $constraints[] = $constraint_manager->create('ComplexData', [
      'value' => [
        'Regex' => [
          'pattern' => '/^[+-]?((\\d+(\\.\\d*)?)|(\\.\\d+))$/i'
        ]
      ]
    ]);
    return $constraints;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public static function generateSampleValue(FieldDefinitionInterface $field_definition) {
    $values['value'] = rand(10, 1000);
    return $values;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function storageSettingsForm(array &$form, FormStateInterface $form_state, $has_data) {
    $element = [];
    $settings = $this->getSettings();
    $element['precision'] = [
      '#type' => 'number',
      '#title' => $this->t('Precision'),
      '#min' => 10,
      '#max' => 32,
      '#default_value' => $settings['precision'],
      '#description' => $this->t('The total number of digits to store in the database, including those to the right of the decimal.'),
      '#disabled' => $has_data
    ];
    $element['scale'] = [
      '#type' => 'number',
      '#title' => $this->t('Scale', [], [
        'context' => 'decimal places'
      ]),
      '#min' => 0,
      '#max' => 10,
      '#default_value' => $settings['scale'],
      '#description' => $this->t('The number of digits to the right of the decimal.'),
      '#disabled' => $has_data
    ];
    $element['max_length'] = [
      '#type' => 'number',
      '#title' => t('Maximum length'),
      '#default_value' => $this->getSetting('max_length'),
      '#required' => TRUE,
      '#description' => t('The maximum length of the field in characters.'),
      '#min' => 1,
      '#disabled' => $has_data
    ];
    return $element;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function isEmpty() {
    $value = $this->get('value')->getValue();
    return $value === NULL || $value === '';
  }
  
}
