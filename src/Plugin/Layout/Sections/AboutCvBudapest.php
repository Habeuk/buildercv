<?php

namespace Drupal\buildercv\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "about_cv_budapest",
 *   label = @Translation("About budapest (CV)"),
 *   category = @Translation("buildercv"),
 *   description = "Contient deux regions (titre, contents) , utilisé par defaut pour le CV, permet de creer des sections de paragraphes",
 *   path = "layouts/sections",
 *   template = "about-cv-budapest",
 *   library = "buildercv/about-cv-budapest",
 *   default_region = "titre",
 *   regions = {
 *     "titre" = {
 *       "label" = @Translation(" titre "),
 *     },
 *     "contents" = {
 *       "label" = @Translation(" contents "),
 *     }
 *   }
 * )
 */
class AboutCvBudapest extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub.
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'buildercv') . "/icones/sections/about_cv_budapest.png");
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
   * @see \Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection::defaultConfiguration()
   */
  public function defaultConfiguration() {
    return [
      'css' => ''
    ] + parent::defaultConfiguration();
  }
  
}