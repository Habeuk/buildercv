<?php

namespace Drupal\buildercv\Plugin\Field\FieldFormatter;

use Drupal\Component\Utility\Html;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\Plugin\Field\FieldFormatter\StringFormatter;

/**
 * Plugin implementation of the 'string' formatter.
 *
 * @FieldFormatter(
 *   id = "string",
 *   label = @Translation("Plain text"),
 *   field_types = {
 *     "string",
 *   }
 * )
 */
class TextTitleBGFormatter extends StringFormatter
{
  /**
   *
   * {@inheritdoc}
   */
  public static function defaultSettings()
  {
    return [
      'layoutgenentitystyles_view' => 'buildercv/field-text-bg'
    ] + parent::defaultSettings();
  }

  /**
   *
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state)
  {
    return [
      // utilile pour mettre à jour le style
      'layoutgenentitystyles_view' => [
        '#type' => 'hidden',
        '#value' => 'buildercv/field-text-bg'
      ]
    ] + parent::settingsForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode)
  {
    $elements = [];

    // The ProcessedText element already handles cache context & tag bubbling.
    // @see \Drupal\filter\Element\ProcessedText::preRenderText()
    foreach ($items as $delta => $item) {
      $elements[$delta] = [
        '#theme' => 'buildercv_text_bg',
        '#item' => Html::escape($item->value)
      ];
    }

    return $elements;
  }
}
