<?php

namespace Drupal\buildercv\Plugin\Field\FieldFormatter;

use Drupal\Component\Utility\Html;
use Drupal\Core\Field\FieldItemInterface;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Plugin implementation of the 'icon_text_formatter' formatter.
 *
 * @FieldFormatter(
 *   id = "icon_text_formatter",
 *   label = @Translation("Icon text formatter @deprecated "),
 *   field_types = {
 *     "icon_text"
 *   }
 * )
 */
class IconTextFormatter extends FormatterBase {
  
  /**
   *
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'layoutgenentitystyles_view' => 'buildercv/field-icon-address'
    ] + parent::defaultSettings();
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    return [
      'layoutgenentitystyles_view' => [
        '#type' => 'hidden',
        '#value' => 'buildercv/field-icon-address'
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
      
      $elements[$delta] = [
        '#theme' => 'buildercv_icon_text',
        '#item' => [
          'value' => Html::escape($item->value),
          'text' => $item->text
        ]
      ];
    }
    return $elements;
  }
  
}
