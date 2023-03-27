<?php

namespace Drupal\buildercv\Plugin\Layout\Pages;

use Drupal\formatage_models\Plugin\Layout\Pages\FormatageModelsPages;
use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "buildercv_page_butapest",
 *   label = @Translation("Page model CV butapest (CV)"),
 *   category = @Translation("buildercv"),
 *   description = "Model à 3 regions entete, sidebarleft et conetent, definie à la base pour un CV.",
 *   path = "layouts/pages",
 *   template = "buildercv-page-butapest",
 *   library = "buildercv/buildercv-page-butapest",
 *   default_region = "entete",
 *   regions = {
 *     "entete" = {
 *       "label" = @Translation(" Entete "),
 *     },
 *     "sidebarleft" = {
 *       "label" = @Translation(" Sidebar left "),
 *     },
 *     "contentpage" = {
 *       "label" = @Translation(" Content page "),
 *     }
 *   }
 * )
 */
class BuildercvPageButaPest extends FormatageModelsPages {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'buildercv') . "/icones/pages/buildercv_page_butapest.png");
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
      'css' => 'container',
      'region_css_sidebarleft' => 'border-right border-dark'
    ] + parent::defaultConfiguration();
  }
  
}