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
 *   label = @Translation("Experience CV  @deprecated "),
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
    $properties['company'] = DataDefinition::create('string')->setLabel(new TranslatableMarkup('Text value'))->setSetting('case_sensitive', $field_definition->getSetting('case_sensitive'))->setRequired(TRUE);
    $properties['address'] = DataDefinition::create('string')->setLabel(new TranslatableMarkup('Text value'))->setSetting('case_sensitive', $field_definition->getSetting('case_sensitive'))->setRequired(TRUE);
    $properties['date_debut'] = DataDefinition::create('integer')->setLabel(t('Integer value'))->setRequired(TRUE);
    $properties['date_fin'] = DataDefinition::create('integer')->setLabel(t('Integer value'))->setRequired(TRUE);
    $properties['description'] = DataDefinition::create('string')->setLabel(t('Text'))->setRequired(TRUE);
    $properties['format'] = DataDefinition::create('filter_format')->setLabel(t('Text format'));
    $properties['en_poste'] = DataDefinition::create('boolean')->setLabel(t('Boolean value'))->setRequired(TRUE);
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
          'type' => 'int',
          'unsigned' => FALSE, // pas de valeur negative
          'size' => 'normal'
        ],
        'date_fin' => [
          'type' => 'int',
          'unsigned' => FALSE, // pas de valeur negative
          'size' => 'normal'
        ],
        'description' => [
          'type' => 'text',
          'size' => 'big'
        ],
        'format' => [
          'type' => 'varchar_ascii',
          'length' => 255
        ],
        'en_poste' => [
          'type' => 'int',
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
    $date = new \DateTime();
    $random = new Random();
    $values['value'] = $random->word(mt_rand(1, $field_definition->getSetting('max_length')));
    $values['company'] = $random->word(mt_rand(1, $field_definition->getSetting('max_length')));
    $values['address'] = $random->word(mt_rand(1, $field_definition->getSetting('max_length')));
    $values['date_debut'] = $date->getTimestamp();
    $values['date_fin'] = $date->getTimestamp();
    $values['description'] = $random->word(mt_rand(1, $field_definition->getSetting('max_length')));
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
