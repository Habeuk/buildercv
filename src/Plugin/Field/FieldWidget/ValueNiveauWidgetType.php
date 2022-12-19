<?php

namespace Drupal\buildercv\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Datetime\DrupalDateTime;

/**
 * Plugin implementation of the 'experience_widget_type' widget.
 *
 * @FieldWidget(
 *   id = "value_niveau_widget_type",
 *   module = "buildercv",
 *   label = @Translation("Value Niveau widget type"),
 *   field_types = {
 *     "value_niveau_type"
 *   }
 * )
 */
class ValueNiveauWidgetType extends WidgetBase {
  
  /**
   *
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'label_target_id' => "Competance",
      'label_niveau' => "Niveau ( de 1 à 5)",
      'niveau_options' => [
        1 => 'Faible',
        2 => 'Base',
        3 => 'Moyen',
        4 => 'Bien',
        5 => 'Excellent'
      ],
      'target_type' => 'taxonomy_term',
      'target_bundles' => 'domaine_competance',
      'autocreate' => true
    ] + parent::defaultSettings();
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $niveau_options = $this->getSetting('niveau_options');
    $elements = [];
    $elements['label_target_id'] = [
      '#type' => 'textfield',
      '#title' => t('label_target_id'),
      '#default_value' => $this->getSetting('label_target_id')
    ];
    $elements['label_niveau'] = [
      '#type' => 'textfield',
      '#title' => t('label_niveau'),
      '#default_value' => $this->getSetting('label_niveau')
    ];
    $elements['niveau_options'][1] = [
      '#type' => 'textfield',
      '#title' => t('Faible'),
      '#default_value' => $niveau_options[1]
    ];
    $elements['niveau_options'][2] = [
      '#type' => 'textfield',
      '#title' => t('Base'),
      '#default_value' => $niveau_options[2]
    ];
    $elements['niveau_options'][3] = [
      '#type' => 'textfield',
      '#title' => t('Moyen'),
      '#default_value' => $niveau_options[3]
    ];
    $elements['niveau_options'][4] = [
      '#type' => 'textfield',
      '#title' => t('Bien'),
      '#default_value' => $niveau_options[4]
    ];
    $elements['niveau_options'][5] = [
      '#type' => 'textfield',
      '#title' => t('Excellent'),
      '#default_value' => $niveau_options[5]
    ];
    return $elements;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function settingsSummary() {
    $summary = [];
    
    return $summary;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $elts = [];
    if (!empty($element['#title_display']))
      unset($element['#title_display']);
    // dd($items[$delta]->target_id);
    $term = null;
    if (isset($items[$delta]->target_id)) {
      $term = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->load($items[$delta]->target_id);
    }
    $elts['target_id_container'] = [
      '#title' => t($this->getSetting('label_target_id')),
      '#type' => 'entity_autocomplete',
      '#target_type' => $this->getSetting('target_type'),
      '#tags' => TRUE,
      '#default_value' => $term,
      '#selection_handler' => 'default',
      '#selection_settings' => [
        'target_bundles' => [
          $this->getSetting('target_bundles') => $this->getSetting('target_bundles')
        ]
      ]
      // '#autocreate' => $this->getSetting('autocreate')
    ] + $element;
    //
    $elts['niveau'] = [
      '#title' => t($this->getSetting('label_niveau')),
      '#type' => 'select',
      '#default_value' => isset($items[$delta]->niveau) ? $items[$delta]->niveau : NULL,
      '#options' => $this->getSetting('niveau_options')
    ] + $element;
    //
    return $elts;
  }
  
  /**
   * --
   *
   * {@inheritdoc}
   * @see \Drupal\Core\Field\WidgetBase::massageFormValues()
   */
  function massageFormValues($values, $form, $form_state) {
    $vals = parent::massageFormValues($values, $form, $form_state);
    // dd($vals);
    foreach ($vals as &$value) {
      if (!empty($value['target_id_container'][0]['target_id'])) {
        $value['target_id'] = $value['target_id_container'][0]['target_id'];
        unset($value['target_id_container']);
      }
    }
    return $vals;
  }
  
}
