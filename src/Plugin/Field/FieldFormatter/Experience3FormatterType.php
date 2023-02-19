<?php

namespace Drupal\buildercv\Plugin\Field\FieldFormatter;

use Drupal\Component\Utility\Html;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\Core\Form\FormStateInterface;

/**
 * Plugin implementation of the 'experience_formatter_type' formatter.
 *
 * @FieldFormatter(
 *   id = "experience3_formatter_type",
 *   label = @Translation("Experience formatter model avec les dates à droite "),
 *   field_types = {
 *     "experience_type"
 *   }
 * )
 */
class Experience3FormatterType extends ExperienceFormatterType {
  
  /**
   *
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'layoutgenentitystyles_view' => 'buildercv/field-form-date'
    ] + parent::defaultSettings();
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    // \Stephane888\Debug\debugLog::$max_depth = 7;
    // \Stephane888\Debug\debugLog::kintDebugDrupal($form, 'settingsForm',
    // true);
    return [
      // utilile pour mettre à jour le style
      'layoutgenentitystyles_view' => [
        '#type' => 'hidden',
        '#value' => 'buildercv/field-form-date'
      ]
    ] + parent::settingsForm($form, $form_state);
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
        '#theme' => 'buildercv_experience_formatter3',
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
  
}
