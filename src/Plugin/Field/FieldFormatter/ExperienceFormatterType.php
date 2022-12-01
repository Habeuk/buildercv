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
 *   id = "experience_formatter_type",
 *   label = @Translation("Experience formatter type"),
 *   field_types = {
 *     "experience_type"
 *   }
 * )
 */
class ExperienceFormatterType extends FormatterBase {
  
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
      $date_debut = '';
      if (!empty($item->date_debut)) {
        $date_debut = DrupalDateTime::createFromTimestamp($item->date_debut);
        $date_debut = $date_debut->format("m/Y");
      }
      
      $date_fin = '';
      if (!empty($item->date_fin)) {
        $date_fin = DrupalDateTime::createFromTimestamp($item->date_fin);
        $date_fin = $date_fin->format("m/Y");
      }
      
      $elements[$delta] = [
        '#theme' => 'buildercv_experience_formatter',
        '#item' => [
          'value' => Html::escape($item->value),
          'company' => Html::escape($item->company),
          'address' => Html::escape($item->address),
          'date_debut' => $date_debut,
          'date_fin' => $date_fin,
          'description' => $item->description,
          'en_poste' => $item->en_poste
        ]
      ];
    }
    
    return $elements;
  }
  
  /**
   * Generate the output appropriate for one field item.
   *
   * @param \Drupal\Core\Field\FieldItemInterface $item
   *        One field item.
   *        
   * @return string The textual output generated.
   */
  protected function viewValue(FieldItemInterface $item) {
    // The text value has no text format assigned to it, so the user input
    // should equal the output, including newlines.
    return nl2br(Html::escape($item->value));
  }
  
}
