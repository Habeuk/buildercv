<?php

namespace Drupal\buildercv\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "presentation_cvi_bluidercv",
 *   label = @Translation("Presentation (CV)"),
 *   category = @Translation("buildercv"),
 *   path = "layouts/sections",
 *   template = "presentation-cv1-buildercv",
 *   library = "buildercv/presentation_cv1_buildercv",
 *   default_region = "title",
 *   regions = {
 *     "buildercv_presentation_cv1_name" = {
 *       "label" = @Translation(" Name "),
 *     },
 *     "buildercv_presentation_cv1_job" = {
 *       "label" = @Translation(" Job "),
 *     },
 *     "buildercv_presentation_cv1_image" = {
 *       "label" = @Translation(" Image "),
 *     }
 *   }
 * )
 */
class PresentationCVIBuildercv extends FormatageModelsSection {
  
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
                    'title' =>'buildercv presentation cv1',
                    'loader' => 'dynamic',
                ],
                'fields' => [
                    'buildercv_presentation_cv1_name' => [
                        'text_html' => [
                            'label' => 'name',
                            'value' => 'Welcome to Impact',
                        ]
                    ],
                    'buildercv_presentation_cv1_job' => [
                        'text_html' => [
                            'label' => 'hero impact description',
                            'value' => 'Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.',
                        ]
                    ],
                    'buildercv_presentation_cv1_image' => [
                        'img' => [
                            'label' => 'image',
                            'fids' => '',
                        ]
                    ]
                ],
            ],
    ] + parent::defaultConfiguration();
  }
  
}