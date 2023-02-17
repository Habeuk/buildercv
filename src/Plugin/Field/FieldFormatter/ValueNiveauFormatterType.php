<?php

namespace Drupal\buildercv\Plugin\Field\FieldFormatter;

use Drupal\Component\Utility\Html;
use Drupal\Core\Field\FieldItemInterface;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Datetime\DrupalDateTime;

/**
 * Plugin implementation of the 'experience_formatter_type' formatter.
 *
 * @FieldFormatter(
 *   id = "value_niveau_formatter_type",
 *   label = @Translation("Value Niveau formatter type"),
 *   field_types = {
 *     "value_niveau_type"
 *   }
 * )
 */
class ValueNiveauFormatterType extends FormatterBase {
  
  /**
   *
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'css_container' => 'd-flex time-line flex-wrap align-items-baseline',
      'css_label' => 'mr-3 h4',
      'css_text' => ''
    ] + parent::defaultSettings();
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $elements = parent::settingsForm($form, $form_state);
    $elements['css_container'] = [
      '#type' => 'textfield',
      '#title' => t('css_container'),
      '#default_value' => $this->getSetting('css_container')
    ];
    $elements['css_label'] = [
      '#type' => 'textfield',
      '#title' => t('css_label'),
      '#default_value' => $this->getSetting('css_label')
    ];
    $elements['css_text'] = [
      '#type' => 'textfield',
      '#title' => t('css_text'),
      '#default_value' => $this->getSetting('css_text')
    ];
    return $elements;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function settingsSummary() {
    $summary = [];
    // Implement settings summary.
    return $summary;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $niveau = [
      1 => 'Faible',
      
      2 => 'Base',
      3 => 'Moyen',
      4 => 'Bien',
      5 => 'Excellent'
    ];
    /**
     *
     * @var \Drupal\Core\Entity\Entity\EntityFormDisplay $entity_form_display
     */
    $entity_form_display = \Drupal::entityTypeManager()->getStorage('entity_form_display')->load($items->getEntity()->getEntityTypeId() . '.' . $items->getEntity()->bundle() . '.default');
    $settings = $entity_form_display->getComponent($items->getName());
    if (!empty($settings['settings']['niveau_options'])) {
      $niveau = $settings['settings']['niveau_options'];
    }
    
    $elements = [];
    $taxonomy_term = \Drupal::entityTypeManager()->getStorage('taxonomy_term');
    /**
     * Il faut urgenment trouver le moyen de recuperer cette configuration à
     * partir des données du widget type.
     *
     * @var array $niveau
     */
    
    foreach ($items as $delta => $item) {
      $term = $taxonomy_term->load($item->target_id);
      $name = null;
      if ($term) {
        $name = $term->label();
      }
      if ($name)
        $elements[$delta] = [
          '#theme' => 'buildercv_value_niveau_formatter',
          '#item' => [
            'target_id' => $item->target_id,
            'niveau' => isset($niveau[$item->niveau]) ? $niveau[$item->niveau] : null,
            'name' => $name,
            'css_container' => $this->getSetting('css_container'),
            'css_label' => $this->getSetting('css_label'),
            'css_text' => $this->getSetting('css_text')
          ]
        ];
    }
    return $elements;
  }
  
}
