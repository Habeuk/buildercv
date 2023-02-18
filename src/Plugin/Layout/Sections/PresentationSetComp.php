<?php

namespace Drupal\buildercv\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "presentation_set_comp",
 *   label = @Translation("Presentation Set Comp (CV)"),
 *   category = @Translation("buildercv"),
 *   path = "layouts/sections",
 *   template = "set-comp-presentation",
 *   library = "buildercv/set-comp-presentation",
 *   default_region = "sc_name",
 *   regions = {
 *     "sc_poste" = {
 *       "label" = @Translation(" Post "),
 *     },
 *     "sc_name" = {
 *       "label" = @Translation(" Name "),
 *     },
 *     "sc_status" = {
 *       "label" = @Translation(" Status "),
 *     },
 *     "sc_description" = {
 *       "label" = @Translation(" Description "),
 *     },
 *     "sc_image" = {
 *       "label" = @Translation(" Image "),
 *     },
 *     "sc_iconText" = {
 *       "label" = @Translation(" Icon Text "),
 *     }
 *   }
 * )
 */
class PresentationSetComp extends FormatageModelsSection {
  
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
      'css' => 'bg-theme text-white col-md-6',
      'region_tag_sc_poste' => 'h5',
      'region_tag_sc_name' => 'h1',
      'region_tag_sc_status' => 'h6',
      'region_css_sc_image' => 'col-md-2'
    ] + parent::defaultConfiguration();
  }
  
}