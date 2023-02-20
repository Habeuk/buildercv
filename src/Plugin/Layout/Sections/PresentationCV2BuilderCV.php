<?php

namespace Drupal\buildercv\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "presentation_cv2_bluidercv",
 *   label = @Translation("Presentation (CV2)"),
 *   category = @Translation("buildercv"),
 *   path = "layouts/sections",
 *   template = "presentation-cv2-buildercv",
 *   library = "buildercv/presentation-cv2-buildercv",
 *   default_region = "title",
 *   regions = {
 *     "buildercv_presentation_cv2_name" = {
 *       "label" = @Translation(" Name "),
 *     },
 *     "buildercv_presentation_cv2_job" = {
 *       "label" = @Translation(" Job "),
 *     },
 *     "buildercv_presentation_cv2_status" = {
 *       "label" = @Translation(" status "),
 *     },
 *     "buildercv_presentation_cv2_image" = {
 *       "label" = @Translation(" Image "),
 *     },
 *     "buildercv_presentation_cv2_description" = {
 *       "label" = @Translation(" Description "),
 *     }
 *     "buildercv_presentation_cv2_contact" = {
 *       "label" = @Translation(" Contact "),
 *     }
 *   }
 * )
 */
class PresentationCV2Buildercv extends FormatageModelsSection
{

  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager)
  {
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
  public function build(array $regions)
  {
    // TODO Auto-generated method stub
    $build = parent::build($regions);
    FormatageModelsThemes::formatSettingValues($build);
    $regions['buildercv_presentation_cv2_name']['0483a634-a241-4c7b-969d-680ed304d1a0']['#attributes'] = [
      'class' => [
        'item-roll'
      ]
    ];
    return $build;
  }

  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection::defaultConfiguration()
   */
  public function defaultConfiguration()
  {
    return [
      'css' => 'container',
      'region_css_buildercv_presentation_cv2_name' => 'h1 font-weight-bold d-flex',
      'region_css_buildercv_presentation_cv2_job' => 'h2 font-weight-bold',
      'content' => [
        'builder-form' => true,
        'info' => [
          'title' => 'buildercv presentation cv2',
          'loader' => 'dynamic'
        ],
        'fields' => [
          'buildercv_presentation_cv2_image' => [
            'img' => [
              'label' => 'image',
              'fids' => ''
            ]
          ],
          'buildercv_presentation_cv2_name' => [
            'text_html' => [
              'label' => 'name',
              'value' => ''
            ]
          ],
          'buildercv_presentation_cv2_job' => [
            'text_html' => [
              'label' => 'job',
              'value' => 'Developpeur'
            ]
          ],
          'buildercv_presentation_cv2_status' => [
            'text_html' => [
              'label' => 'job',
              'value' => 'Developpeur'
            ]
          ],
          'buildercv_presentation_cv2_description' => [
            'text_html' => [
              'label' => 'Description'
            ]
          ],
          'buildercv_presentation_cv2_contact' => [
            'text_html' => [
              'label' => 'contact',
              'value' => ''
            ]
          ],
        ]
      ]
    ] + parent::defaultConfiguration();
  }
}
