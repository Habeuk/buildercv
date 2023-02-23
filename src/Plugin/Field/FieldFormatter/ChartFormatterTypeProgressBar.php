<?php

namespace Drupal\buildercv\Plugin\Field\FieldFormatter;

use Drupal\Component\Utility\Html;
use Drupal\Core\Field\FieldItemInterface;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Plugin implementation of the 'chart_formatter_type' formatter.
 *
 * @FieldFormatter(
 *   id = "chart_formatter_type_progress_bar",
 *   label = @Translation("Chart formatter with progress bar"),
 *   field_types = {
 *     "chart_field_type"
 *   }
 * )
 */
class ChartFormatterTypeProgressBar extends ChartFormatterType {
  
  /**
   *
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'layoutgenentitystyles_view' => 'buildercv/field-progress-custom'
    ] + parent::defaultSettings();
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    return [
      // utilile pour mettre à jour le style
      'layoutgenentitystyles_view' => [
        '#type' => 'hidden',
        '#value' => 'buildercv/field-progress-custom'
      ]
    ] + parent::settingsForm($form, $form_state);
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
    $elements = [];
    foreach ($items as $delta => $item) {
      $progress = [
        '#type' => 'html_tag',
        '#tag' => 'span',
        '#attributes' => [
          'class' => [
            'polygone'
          ],
          'style' => 'left:calc(' . (int) $item->value . '% - 25px);background-color:' . $item->color . ';'
        ]
      ];
      $elements[$delta] = [
        '#theme' => 'buildercv_value_niveau_formatter2',
        '#item' => [
          'target_id' => '',
          'niveau' => $progress,
          'name' => $item->label,
          'css_container' => $this->getSetting('css_container'),
          'css_label' => $this->getSetting('css_label'),
          'css_text' => $this->getSetting('css_text')
        ]
      ];
    }
    return $elements;
  }
  
}
