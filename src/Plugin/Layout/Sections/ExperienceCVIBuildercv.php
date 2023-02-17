<?php

namespace Drupal\buildercv\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "experience_cvi_bluidercv",
 *   label = @Translation("Experience (CV1)"),
 *   category = @Translation("buildercv"),
 *   path = "layouts/sections",
 *   template = "experience-cv1-buildercv",
 *   library = "buildercv/experience-cv1-buildercv",
 *   default_region = "title",
 *   regions = {
 *     "buildercv_experience_cv1_title" = {
 *       "label" = @Translation(" title "),
 *     },
 *     "buildercv_experience_cv1_works" = {
 *       "label" = @Translation(" works "),
 *     },
 *     "buildercv_experience_cv1_bg" = {
 *       "label" = @Translation(" Background Image "),
 *     }
 *   }
 * )
 */
class ExperienceCVIBuildercv extends FormatageModelsSection {
  
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
      'load_library' => true,
      'content' => [
                'builder-form' => true,
                'info' => [
                    'title' =>'buildercv experience cv1',
                    'loader' => 'dynamic',
                ],
                'fields' => [
                    'buildercv_experience_cv1_title1' => [
                        'text_html' => [
                            'label' => 'title 1',
                            'value' => 'Experiences',
                        ]
                    ],
                    'buildercv_experience_cv1_works' => [
                        'text_html' => [
                            'label' => 'works',
                            'fids' => '',
                        ]
                    ],
                    'buildercv_experience_cv1_bg' => [
                        'img_bg' => [
                          'label' => 'background image'
                        ]
                    ]
                ],
            ],
    ] + parent::defaultConfiguration();
  } 
}