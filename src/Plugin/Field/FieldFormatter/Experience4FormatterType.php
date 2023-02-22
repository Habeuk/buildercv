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
 *   id = "experience4_formatter_type",
 *   label = @Translation("Experience formatter model avec les dates en bas à droite "),
 *   field_types = {
 *     "experience_type"
 *   }
 * )
 */
class Experience4FormatterType extends ExperienceFormatterType {
  
  /**
   *
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'layoutgenentitystyles_view' => 'buildercv/field-exp4'
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
        '#value' => 'buildercv/field-exp4'
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
        '#theme' => 'buildercv_experience_formatter4',
        '#item' => [
          'post' => Html::escape($item->value),
          'company' => Html::escape($item->company),
          'address' => Html::escape($item->address),
          'date_debut' => $date_debut,
          'date_fin' => $date_fin,
          'description' => $item->description
        ]
      ];
    }
    return $elements;
  }
  
}
