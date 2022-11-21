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
 *   id = "experience_type",
 *   label = @Translation("Experience CV"),
 *   description = @Translation("Permet de sauvegarder une experience en entreprise (cv)"),
 *   default_widget = "experience_widget_type",
 *   default_formatter = "experience_formatter_type"
 * )
 */
class ExperienceType extends FieldItemBase {

  /**
   *
   * {@inheritdoc}
   */
  public static function defaultStorageSettings() {
    return [
      'max_length' => 255,
      'is_ascii' => FALSE,
      'case_sensitive' => FALSE
    ] + parent::defaultStorageSettings();
  }

  /**
   *
   * {@inheritdoc}
   */
  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
    // Prevent early t() calls by using the TranslatableMarkup.
    $properties['value'] = DataDefinition::create('string')->setLabel(new TranslatableMarkup('Text value'))->setSetting('case_sensitive', $field_definition->getSetting('case_sensitive'))->setRequired(TRUE);

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
          'binary' => $field_definition->getSetting('case_sensitive')
        ],
        'company' => [
          'type' => $field_definition->getSetting('is_ascii') === TRUE ? 'varchar_ascii' : 'varchar',
          'length' => (int) $field_definition->getSetting('max_length'),
          'binary' => $field_definition->getSetting('case_sensitive')
        ],
        'address' => [
          'type' => $field_definition->getSetting('is_ascii') === TRUE ? 'varchar_ascii' : 'varchar',
          'length' => (int) $field_definition->getSetting('max_length'),
          'binary' => $field_definition->getSetting('case_sensitive')
        ],
        'date_debut' => [
          'type' => $field_definition->getSetting('is_ascii') === TRUE ? 'varchar_ascii' : 'varchar',
          'length' => (int) $field_definition->getSetting('max_length'),
          'binary' => $field_definition->getSetting('case_sensitive')
        ],
        'date_fin' => [
          'type' => $field_definition->getSetting('is_ascii') === TRUE ? 'varchar_ascii' : 'varchar',
          'length' => (int) $field_definition->getSetting('max_length'),
          'binary' => $field_definition->getSetting('case_sensitive')
        ],
        'description' => [
          'type' => 'text',
          'size' => 'big'
        ],
        'format' => [
          'type' => 'varchar_ascii',
          'length' => 255
        ]
      ],
      'indexes' => [
        'value' => [
          'value'
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

    /**
     * Comment exclure le champs "description" de la validation ? ( en
     * attendant, on desactive ).
     */
    // if ($max_length = $this->getSetting('max_length')) {
    // $constraint_manager =
    // \Drupal::typedDataManager()->getValidationConstraintManager();
    // $constraints[] = $constraint_manager->create('ComplexData', [
    // 'value' => [
    // 'Length' => [
    // 'max' => $max_length,
    // 'maxMessage' => t('%name: may not be longer than @max characters.', [
    // '%name' => $this->getFieldDefinition()->getLabel(),
    // '@max' => $max_length
    // ])
    // ]
    // ]
    // ]);
    // }

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
