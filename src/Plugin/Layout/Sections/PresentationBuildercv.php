<?php

namespace Drupal\buildercv\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "buildercv_presentation",
 *   label = @Translation("Presentation (CV)"),
 *   category = @Translation("buildercv"),
 *   path = "layouts/sections",
 *   template = "buildercv-presentation",
 *   library = "buildercv/buildercv-presentation",
 *   default_region = "title",
 *   regions = {
 *     "subtitle" = {
 *       "label" = @Translation(" Subtitle "),
 *     },
 *     "title" = {
 *       "label" = @Translation(" Title "),
 *     },
 *     "description" = {
 *       "label" = @Translation(" Description "),
 *     },
 *     "image" = {
 *       "label" = @Translation(" Image "),
 *     },
 *     "listes" = {
 *       "label" = @Translation(" listes "),
 *     }
 *   }
 * )
 */
class PresentationBuildercv extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub.
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    // $this->pluginDefinition->set('icon', drupal_get_path('module',
    // 'formatage_models') . "/icones/sections/formatage-models-about-ac.png");
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
      'css' => 'bg-theme text-white',
      'region_tag_subtitle' => 'h4',
      'region_tag_title' => 'h2',
      'region_css_subtitle' => 'h2',
      'region_css_title' => 'h4',
      'region_css_image' => 'col-md-2',
      'region_css_listes' => 'col-md-3 h4'
    ] + parent::defaultConfiguration();
  }
  
}