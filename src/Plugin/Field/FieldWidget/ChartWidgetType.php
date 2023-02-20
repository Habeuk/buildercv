<?php

namespace Drupal\buildercv\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Field\Annotation\FieldWidget;
use Drupal\Core\Annotation\Translation;

/**
 * Plugin implementation of the 'chart_widget_type' widget.
 *
 * @FieldWidget(
 *   id = "chart_widget_type",
 *   module = "buildercv",
 *   label = @Translation("Chart widget type"),
 *   field_types = {
 *     "chart_field_type"
 *   }
 * )
 */
class ChartWidgetType extends WidgetBase {
  
  /**
   *
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [ //
    ] + parent::defaultSettings();
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $elements = [];
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
    $elements = [];
    if (!empty($element['#title_display']))
      unset($element['#title_display']);
    $elements['value'] = [
      '#title' => $this->t('Value'),
      '#type' => 'number',
      '#default_value' => isset($items[$delta]->value) ? $items[$delta]->value : NULL
    ] + $element;
    //
    $elements['color'] = [
      '#title' => $this->t('Color'),
      '#type' => 'color',
      '#default_value' => isset($items[$delta]->color) ? $items[$delta]->color : NULL
    ] + $element;
    //
    $elements['label'] = [
      '#title' => $this->t('Label'),
      '#type' => 'textfield',
      '#default_value' => isset($items[$delta]->label) ? $items[$delta]->label : NULL
    ] + $element;
    return $elements;
  }
  
}
