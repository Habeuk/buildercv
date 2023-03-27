<?php

namespace Drupal\buildercv\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "presentation_cv_budapest,
 *   label = @Translation("Presentation budapest (CV)"),
 *   category = @Translation("buildercv"),
 *   path = "layouts/sections",
 *   template = "presentation-cv-budapest",
 *   library = "buildercv/presentation-cv-budapest",
 *   default_region = "name",
 *   regions = {
 *     "name" = {
 *       "label" = @Translation(" Nom "),
 *     },
 *     "prenom" = {
 *       "label" = @Translation(" Prenom "),
 *     },
 *     "competance" = {
 *       "label" = @Translation(" Competance "),
 *     },
 *     "image" = {
 *       "label" = @Translation(" Image "),
 *     }
 *   }
 * )
 */
class PresentationCvBudapest extends FormatageModelsSection {
  
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
      'css' => 'align-items-center border-dark  border-bottom',
      'region_css_competance' => 'font-weight-bolder'
    ] + parent::defaultConfiguration();
  }
  
}