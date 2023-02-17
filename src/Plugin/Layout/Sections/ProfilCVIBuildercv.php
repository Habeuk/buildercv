<?php

namespace Drupal\buildercv\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "profil_cvi_bluidercv",
 *   label = @Translation("Profil (CV1)"),
 *   category = @Translation("buildercv"),
 *   path = "layouts/sections",
 *   template = "profil-cv1-buildercv",
 *   library = "buildercv/profil-cv1-buildercv",
 *   default_region = "title",
 *   regions = {
 *     "buildercv_profil_cv1_title1" = {
 *       "label" = @Translation(" titre section 1 "),
 *     },
 *     "buildercv_profil_cv1_title2" = {
 *       "label" = @Translation(" titre section 2 "),
 *     },
 *     "buildercv_profil_cv1_resumed" = {
 *       "label" = @Translation("Profil Resume "),
 *     },
 *     "buildercv_profil_cv1_competences" = {
 *       "label" = @Translation(" competences "),
 *     },
 *     "buildercv_profil_cv1_bg" = {
 *       "label" = @Translation(" Background Image "),
 *     }
 *   }
 * )
 */
class ProfilCVIBuildercv extends FormatageModelsSection {
  
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
                    'title' =>'buildercv profil cv1',
                    'loader' => 'dynamic',
                ],
                'fields' => [
                    'buildercv_profil_cv1_title1' => [
                        'text_html' => [
                            'label' => 'title 1',
                            'value' => 'compétences',
                        ]
                    ],
                    'buildercv_profil_cv1_title2' => [
                        'text_html' => [
                            'label' => 'title 2',
                            'value' => 'Compétences',
                        ]
                    ],
                    'buildercv_profil_cv1_resumed' => [
                        'text_html' => [
                            'label' => 'resumed',
                            'value' => 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.',
                        ]
                    ],
                    'buildercv_profil_cv1_competences' => [
                        'text_html' => [
                            'label' => 'image',
                            'fids' => '',
                        ]
                    ],
                    'buildercv_profil_cv1_bg' => [
                        'img_bg' => [
                          'label' => 'background image'
                        ]
                    ]
                ],
            ],
    ] + parent::defaultConfiguration();
  } 
}