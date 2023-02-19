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
 * Plugin implementation of the 'icon_text' field type.
 *
 * @FieldType(
 *   id = "icon_text",
 *   label = @Translation("Icon text"),
 *   description = @Translation("My Field Type"),
 *   default_widget = "icon_text_widget",
 *   default_formatter = "icon_text_formatter"
 * )
 */
class IconText extends FieldItemBase {
  
  /**
   *
   * {@inheritdoc}
   */
  public static function defaultStorageSettings() {
    return [
      'max_length' => 100
    ] + parent::defaultStorageSettings();
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
    // @see grep -nr "@DataType" web/core/
    // Prevent early t() calls by using the TranslatableMarkup.
    $properties['value'] = DataDefinition::create('string')->setLabel(new TranslatableMarkup('Text value'))->setSetting('case_sensitive', $field_definition->getSetting('case_sensitive'))->setRequired(TRUE);
    $properties['text'] = DataDefinition::create('string')->setLabel(new TranslatableMarkup('text'))->setRequired(TRUE);
    $properties['format'] = DataDefinition::create('filter_format')->setLabel(t('Text format'));
    return $properties;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public static function schema(FieldStorageDefinitionInterface $field_definition) {
    $schema = [
      'columns' => [
        'value' => [
          'type' => $field_definition->getSetting('is_ascii') === TRUE ? 'varchar_ascii' : 'varchar',
          'length' => (int) $field_definition->getSetting('max_length'),
          'binary' => $field_definition->getSetting('case_sensitive'),
          'unsigned' => FALSE
        ],
        'text' => [
          'type' => 'text',
          'unsigned' => FALSE,
          'binary' => ''
        ],
        'format' => [
          'type' => 'varchar_ascii',
          'length' => 50
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
    
    if ($max_length = $this->getSetting('max_length')) {
      $constraint_manager = \Drupal::typedDataManager()->getValidationConstraintManager();
      $constraints[] = $constraint_manager->create('ComplexData', [
        'value' => [
          'Length' => [
            'max' => $max_length,
            'maxMessage' => t('%name: may not be longer than @max characters.', [
              '%name' => $this->getFieldDefinition()->getLabel(),
              '@max' => $max_length
            ])
          ]
        ]
      ]);
    }
    
    return $constraints;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public static function generateSampleValue(FieldDefinitionInterface $field_definition) {
    $random = new Random();
    $values['value'] = $random->word(mt_rand(1, $field_definition->getSetting('max_length')));
    return $values;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function storageSettingsForm(array &$form, FormStateInterface $form_state, $has_data) {
    $elements = [];
    
    $elements['max_length'] = [
      '#type' => 'number',
      '#title' => t('Maximum length'),
      '#default_value' => $this->getSetting('max_length'),
      '#required' => TRUE,
      '#description' => t('The maximum length of the field in characters.'),
      '#min' => 1,
      '#disabled' => $has_data
    ];
    
    return $elements;
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
