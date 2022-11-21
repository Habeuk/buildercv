<?php

namespace Drupal\buildercv\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Field\Annotation\FieldWidget;
use Drupal\Core\Annotation\Translation;

/**
 * Plugin implementation of the 'experience_widget_type' widget.
 *
 * @FieldWidget(
 *   id = "experience_widget_type",
 *   module = "buildercv",
 *   label = @Translation("Experience widget type"),
 *   field_types = {
 *     "experience_type"
 *   }
 * )
 */
class ExperienceWidgetType extends WidgetBase {

  /**
   *
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'size' => 60,
      'placeholder_titre' => ''
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
    $elements['placeholder_titre'] = [
      '#type' => 'textfield',
      '#title' => t('placeholder_titre'),
      '#default_value' => $this->getSetting('placeholder_titre'),
      '#description' => t('Text that will be shown inside the field until a value is entered. This hint is usually a sample value or a brief description of the expected format.')
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
    if (!empty($this->getSetting('placeholder_titre'))) {
      $summary[] = t('Placeholder: @placeholder', [
        '@placeholder' => $this->getSetting('placeholder_titre')
      ]);
    }

    return $summary;
  }

  /**
   *
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $elts = [];
    $elts['value'] = $element + [
      '#type' => 'textfield',
      '#default_value' => isset($items[$delta]->value) ? $items[$delta]->value : NULL,
      '#size' => $this->getSetting('size'),
      '#placeholder' => $this->getSetting('placeholder_titre'),
      '#maxlength' => $this->getFieldSetting('max_length')
    ];
    $elts['company'] = [
      '#title' => t('Entreprise'),
      '#type' => 'textfield',
      '#default_value' => isset($items[$delta]->company) ? $items[$delta]->company : NULL,
      '#size' => $this->getSetting('size'),
      '#placeholder' => $this->getSetting('placeholder_titre'),
      '#maxlength' => $this->getFieldSetting('max_length')
    ] + $element;

    $elts['address'] = [
      '#title' => t('address'),
      '#type' => 'textfield',
      '#default_value' => isset($items[$delta]->address) ? $items[$delta]->address : NULL,
      '#size' => $this->getSetting('size'),
      '#placeholder' => $this->getSetting('placeholder_titre'),
      '#maxlength' => $this->getFieldSetting('max_length')
    ] + $element;

    $elts['date_debut'] = $element + [
      '#title' => t('date_debut'),
      '#type' => 'textfield',
      '#default_value' => isset($items[$delta]->date_debut) ? $items[$delta]->date_debut : NULL,
      '#size' => $this->getSetting('size'),
      '#placeholder' => $this->getSetting('placeholder_titre'),
      '#maxlength' => $this->getFieldSetting('max_length')
    ];

    $elts['date_fin'] = $element + [
      '#title' => t('date_fin'),
      '#type' => 'textfield',
      '#default_value' => isset($items[$delta]->date_fin) ? $items[$delta]->date_fin : NULL,
      '#size' => $this->getSetting('size'),
      '#placeholder' => $this->getSetting('placeholder_titre'),
      '#maxlength' => $this->getFieldSetting('max_length')
    ];

    $elts['address'] = $element + [
      '#title' => t('address'),
      '#type' => 'textfield',
      '#default_value' => isset($items[$delta]->address) ? $items[$delta]->address : NULL,
      '#size' => $this->getSetting('size'),
      '#placeholder' => $this->getSetting('placeholder_titre'),
      '#maxlength' => $this->getFieldSetting('max_length')
    ];

    $elts['description'] = $element + [
      '#title' => t('description'),
      '#type' => 'text_format',
      '#format' => 'basic_html',
      '#default_value' => isset($items[$delta]->description) ? $items[$delta]->description : NULL,
      '#size' => $this->getSetting('size'),
      '#placeholder' => $this->getSetting('placeholder_titre'),
      '#maxlength' => $this->getFieldSetting('max_length')
    ];

    return $elts;
  }

  function massageFormValues($values, $form, $form_state) {
    $vals = parent::massageFormValues($values, $form, $form_state);
    // dd($vals);
    foreach ($vals as $k => $val) {
      if (isset($val['description']['value'])) {
        $vals[$k]['description'] = $val['description']['value'];
        $vals[$k]['format'] = $val['description']['format'];
      }
      //
    }
    return $vals;
  }

}
