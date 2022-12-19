<?php

namespace Drupal\buildercv\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "buildercv_competances",
 *   label = @Translation("Competances (CV)"),
 *   category = @Translation("buildercv"),
 *   path = "layouts/sections",
 *   template = "buildercv-competances",
 *   library = "buildercv/buildercv-competances",
 *   default_region = "title",
 *   regions = {
 *     "title" = {
 *       "label" = @Translation(" Title competance "),
 *     },
 *     "title2" = {
 *       "label" = @Translation(" Title langue "),
 *     },
 *     "listes" = {
 *       "label" = @Translation(" listes competance "),
 *     },
 *     "listes2" = {
 *       "label" = @Translation(" listes langue "),
 *     }
 *   }
 * )
 */
class CompetancesBuildercv extends FormatageModelsSection {
  
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
      'css' => '',
      'region_tag_title' => 'h2',
      'region_tag_title2' => 'h2'
    ] + parent::defaultConfiguration();
  }
  
}