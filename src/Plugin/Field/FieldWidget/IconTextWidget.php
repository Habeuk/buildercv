<?php

namespace Drupal\buildercv\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Field\Annotation\FieldWidget;
use Drupal\Core\Annotation\Translation;

/**
 * Plugin implementation of the 'icon_text_widget' widget.
 *
 * @FieldWidget(
 *   id = "icon_text_widget",
 *   module = "buildercv",
 *   label = @Translation("Icon text widget"),
 *   field_types = {
 *     "icon_text"
 *   }
 * )
 */
class IconTextWidget extends WidgetBase {
  
  /**
   *
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'size' => 100,
      'label_1' => "Nom du reseau social",
      'label_2' => "Svp or fontawesome"
    ] + parent::defaultSettings();
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $elements = [];
    
    $elements['size'] = [
      '#type' => 'number',
      '#title' => t('Size of textfield'),
      '#default_value' => $this->getSetting('size'),
      '#required' => TRUE,
      '#min' => 1
    ];
    $elements['label_1'] = [
      '#type' => 'textfield',
      '#title' => t('label 1'),
      '#default_value' => $this->getSetting('label_1')
    ];
    $elements['label_2'] = [
      '#type' => 'textfield',
      '#title' => t('label 2'),
      '#default_value' => $this->getSetting('label_2')
    ];
    return $elements;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function settingsSummary() {
    $summary = [];
    $summary[] = t('Textfield size: @size', [
      '@size' => $this->getSetting('size')
    ]);
    $summary[] = t('label_1: @label_1', [
      '@label_1' => $this->getSetting('label_1')
    ]);
    $summary[] = t('label_2: @label_2', [
      '@label_2' => $this->getSetting('label_2')
    ]);
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
      '#title' => t($this->getSetting('label_1')),
      '#type' => 'textfield',
      '#default_value' => isset($items[$delta]->value) ? $items[$delta]->value : NULL,
      '#size' => $this->getSetting('size'),
      '#placeholder' => $this->getSetting('placeholder'),
      '#maxlength' => $this->getFieldSetting('max_length')
    ] + $element;
    $elements['text'] = [
      '#title' => t($this->getSetting('label_2')),
      '#type' => 'text_format',
      '#format' => isset($items[$delta]->format) ? $items[$delta]->format : 'basic_html',
      '#default_value' => isset($items[$delta]->text) ? $items[$delta]->text : NULL
    ] + $element;
    
    return $elements;
  }
  
  function massageFormValues($values, $form, $form_state) {
    $vals = parent::massageFormValues($values, $form, $form_state);
    foreach ($vals as &$val) {
      if (isset($val['text']['format'])) {
        $val['format'] = $val['text']['format'];
      }
      if (isset($val['text']['value'])) {
        $val['text'] = $val['text']['value'];
      }
    }
    return $vals;
  }
  
}
