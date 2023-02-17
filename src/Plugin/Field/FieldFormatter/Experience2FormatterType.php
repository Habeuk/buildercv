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
class Experience2FormatterType extends ExperienceFormatterType {
  
  
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
        '#theme' => 'buildercv_experience_formatter2',
        '#item' => [
          'value' => Html::escape($item->value),
          'company' => Html::escape($item->company),
          'date_debut' => $date_debut,
          'date_fin' => $date_fin,
          'description' => $item->description,
        ]
      ];
    }
    
    return $elements;
  }  
}
