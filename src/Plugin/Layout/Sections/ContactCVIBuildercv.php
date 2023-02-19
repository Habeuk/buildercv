<?php

namespace Drupal\buildercv\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "contact_cvi_bluidercv",
 *   label = @Translation("Contact (CV1)"),
 *   category = @Translation("buildercv"),
 *   path = "layouts/sections",
 *   template = "contact-cv1-buildercv",
 *   library = "buildercv/contact-cv1-buildercv",
 *   default_region = "title",
 *   regions = {
 *     "title" = {
 *       "label" = @Translation(" titre "),
 *     },
 *     "infos" = {
 *       "label" = @Translation("infos"),
 *     }
 *   }
 * )
 */
class ContactCVIBuildercv extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub.
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-about-ac.png");
  }
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::build()
   */
  public function build(array $regions) {
    // TODO Auto-generated method stub
    $build = parent::build($regions);
    FormatageModelsThemes::formatSettingValues($build);
    return $build;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildConfigurationForm($form, $form_state);
    $form['class_row'] = [
      '#type' => 'textfield',
      '#title' => 'Class row',
      '#default_value' => $this->configuration['class_row']
    ];
    return $form;
  }
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection::defaultConfiguration()
   */
  public function defaultConfiguration() {
    return [
      'css' => '',
      'region_css_title' => 'h3',
      'class_row' => 'row'
    ] + parent::defaultConfiguration();
  }
  
}