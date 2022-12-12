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
    return [ // Implement default settings.
    ] + parent::defaultSettings();
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    return [ // Implement settings form.
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
      $elements[$delta] = [
        '#theme' => 'buildercv_value_niveau_formatter',
        '#item' => [
          'target_id' => $item->target_id,
          'niveau' => $item->niveau
        ]
      ];
    }
    return $elements;
  }
  
}
