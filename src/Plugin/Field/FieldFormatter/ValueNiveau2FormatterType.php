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
 *   id = "value_niveau_formatter_type2",
 *   label = @Translation("Value Niveau formatter type 2"),
 *   field_types = {
 *     "value_niveau_type"
 *   }
 * )
 */
class ValueNiveau2FormatterType extends ValueNiveauFormatterType {
  
  /**
   *
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'layoutgenentitystyles_view' => 'buildercv/field-progress-custom',
      'css_container' => '',
      'css_label' => '',
      'css_text' => ''
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
        '#value' => 'buildercv/field-progress-custom'
      ]
    ] + parent::settingsForm($form, $form_state);
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    
    /**
     *
     * @var \Drupal\Core\Entity\Entity\EntityFormDisplay $entity_form_display
     */
    $entity_form_display = \Drupal::entityTypeManager()->getStorage('entity_form_display')->load($items->getEntity()->getEntityTypeId() . '.' . $items->getEntity()->bundle() . '.default');
    
    // langue encours
    $this->lang_code = \Drupal::languageManager()->getCurrentLanguage()->getId();
    
    $elements = [];
    $taxonomy_term = \Drupal::entityTypeManager()->getStorage('taxonomy_term');
    /**
     * Il faut urgenment trouver le moyen de recuperer cette configuration à
     * partir des données du widget type.
     *
     * @var array $niveau
     */
    
    foreach ($items as $delta => $item) {
      /**
       *
       * @var \Drupal\taxonomy\Entity\Term $term
       */
      $term = $taxonomy_term->load($item->target_id);
      if ($term->hasTranslation($langcode)) {
        $term = $term->getTranslation($langcode);
      }
      $name = null;
      if ($term) {
        $name = $term->label();
      }
      if ($name)
        $elements[$delta] = [
          '#theme' => 'buildercv_value_niveau_formatter2',
          '#item' => [
            'target_id' => $item->target_id,
            'niveau' => $item->niveau ? $item->niveau * 20 : null,
            'name' => $name,
            'css_container' => $this->getSetting('css_container'),
            'css_label' => $this->getSetting('css_label'),
            'css_text' => $this->getSetting('css_text')
          ]
        ];
    }
    return $elements;
  }
  
}
