<?php

namespace Drupal\buildercv\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Datetime\DrupalDateTime;

/**
 * Plugin implementation of the 'experience_widget_type' widget.
 *
 * @FieldWidget(
 *   id = "experience_widget_type",
 *   module = "buildercv",
 *   label = @Translation("Experience widget type @deprecated "),
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
      'placeholder_titre' => '',
      'label_value' => "Titre/poste",
      'label_company' => "Entreprise ",
      'label_address' => "Lieu (Ville, pays) ",
      'label_date_debut' => "Date de debut ",
      'label_date_fin' => "Date de fin",
      'label_en_poste' => "Poste actuel",
      'label_description' => "Tâches et responsabilités"
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
    $elements['label_value'] = [
      '#type' => 'textfield',
      '#title' => t('label_value'),
      '#default_value' => $this->getSetting('label_value')
    ];
    $elements['label_company'] = [
      '#type' => 'textfield',
      '#title' => t('label_company'),
      '#default_value' => $this->getSetting('label_company')
    ];
    $elements['label_address'] = [
      '#type' => 'textfield',
      '#title' => t('label_address'),
      '#default_value' => $this->getSetting('label_address')
    ];
    $elements['label_date_debut'] = [
      '#type' => 'textfield',
      '#title' => t('label_date_debut'),
      '#default_value' => $this->getSetting('label_date_debut')
    ];
    $elements['label_date_fin'] = [
      '#type' => 'textfield',
      '#title' => t('label_date_fin'),
      '#default_value' => $this->getSetting('label_date_fin')
    ];
    $elements['label_en_poste'] = [
      '#type' => 'textfield',
      '#title' => t('label_en_poste'),
      '#default_value' => $this->getSetting('label_en_poste')
    ];
    $elements['label_description'] = [
      '#type' => 'textfield',
      '#title' => t('label_description'),
      '#default_value' => $this->getSetting('label_description')
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
    $increment = 0;
    $date_type = 'date';
    $time_type = 'none';
    if (!empty($element['#title_display']))
      unset($element['#title_display']);
    $elts['value'] = [
      '#title' => t($this->getSetting('label_value')),
      '#type' => 'textfield',
      '#default_value' => isset($items[$delta]->value) ? $items[$delta]->value : NULL,
      '#size' => $this->getSetting('size'),
      '#maxlength' => $this->getFieldSetting('max_length')
    ] + $element;
    $elts['company'] = [
      '#title' => t($this->getSetting('label_company')),
      '#type' => 'textfield',
      '#default_value' => isset($items[$delta]->company) ? $items[$delta]->company : NULL,
      '#size' => $this->getSetting('size'),
      '#maxlength' => $this->getFieldSetting('max_length')
    ] + $element;
    
    $elts['address'] = [
      '#title' => t($this->getSetting('label_address')),
      '#type' => 'textfield',
      '#default_value' => isset($items[$delta]->address) ? $items[$delta]->address : NULL,
      '#size' => $this->getSetting('size'),
      '#maxlength' => $this->getFieldSetting('max_length')
    ] + $element;
    
    $default_value = isset($items[$delta]->date_debut) ? DrupalDateTime::createFromTimestamp($items[$delta]->date_debut) : '';
    $elts['date_debut'] = [
      "#type" => 'datetime',
      '#title' => t($this->getSetting('label_date_debut')),
      '#default_value' => $default_value,
      '#date_date_element' => $date_type,
      '#date_time_element' => $time_type,
      '#date_increment' => $increment
    ] + $element;
    
    $default_value = isset($items[$delta]->date_fin) ? DrupalDateTime::createFromTimestamp($items[$delta]->date_fin) : '';
    $elts['date_fin'] = [
      "#type" => 'datetime',
      '#title' => t($this->getSetting('label_date_fin')),
      '#default_value' => $default_value,
      '#date_date_element' => $date_type,
      '#date_time_element' => $time_type,
      '#date_increment' => $increment
    ] + $element;
    
    $elts['en_poste'] = [
      '#title' => t($this->getSetting('label_en_poste')),
      '#type' => 'checkbox',
      '#default_value' => isset($items[$delta]->address) ? $items[$delta]->en_poste : NULL,
      '#size' => $this->getSetting('size'),
      '#maxlength' => $this->getFieldSetting('max_length')
    ] + $element;
    
    $elts['description'] = [
      '#title' => t($this->getSetting('label_description')),
      '#type' => 'text_format',
      '#format' => 'basic_html',
      '#default_value' => isset($items[$delta]->description) ? $items[$delta]->description : NULL
    ] + $element;
    return $elts;
  }
  
  function massageFormValues($values, $form, $form_state) {
    $vals = parent::massageFormValues($values, $form, $form_state);
    
    foreach ($vals as &$val) {
      if (isset($val['description']['format'])) {
        $val['format'] = $val['description']['format'];
      }
      if (isset($val['description']['value'])) {
        $val['description'] = $val['description']['value'];
      }
      //
      if (!empty($val['date_debut'])) {
        /**
         *
         * @var \Drupal\Core\Datetime\DrupalDateTime $date
         */
        $date = $val['date_debut'];
        $val['date_debut'] = $date->getTimestamp();
      }
      if (!empty($val['date_fin'])) {
        /**
         *
         * @var \Drupal\Core\Datetime\DrupalDateTime $date
         */
        $date = $val['date_fin'];
        $val['date_fin'] = $date->getTimestamp();
      }
    }
    //
    return $vals;
  }
  
}
