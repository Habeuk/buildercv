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
    $taxonomy_term = \Drupal::entityTypeManager()->getStorage('taxonomy_term');
    /**
     * Il faut urgenment trouver le moyen de recuperer cette configuration à
     * partir des données du widget type.
     *
     * @var array $niveau
     */
    $niveau = [
      1 => 'Faible',
      2 => 'Base',
      3 => 'Moyen',
      4 => 'Bien',
      5 => 'Excellent'
    ];
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
            'name' => $name
          ]
        ];
    }
    return $elements;
  }
  
}
