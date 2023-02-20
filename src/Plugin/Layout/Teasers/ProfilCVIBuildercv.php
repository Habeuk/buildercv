<?php

namespace Drupal\buildercv\Plugin\Layout\Teasers;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Teasers\FormatageModelsTeasers;

/**
 * A  teaser for experience : impact module 
 * 
 * @Layout(
 *  id = "impact_hero_teaser",
 *  label = @Translation("impact_hero_teaser"),
 *  category = @Translation("impact"),
 *  path = "layouts/teasers",
 *  template = "impact_hero_teaser",
 *  library = "impact/impact_hero_teaser",
 *  default_region = "content",
 *  regions = {
 *      "impact_hero_teaser_title" = {
 *          "label" = @Translation("impact hero teaser title")     
 *      },
 *      "impact_hero_teaser_icon" = {
 *          "label" = @Translation("impact hero teaser icon"),     
 *      }
 *   }
 * )
 * 
 */

class ImpactHeroTeaser extends FormatageModelsTeasers
{

    /**
     *
     * {@inheritdoc}
     * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
     */
    public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager)
    {
        // TODO Auto-generated method stub
        parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
        $this->pluginDefinition->set('icon', drupal_get_path('module', 'impact') . "/icones/teasers/impact-hero-teaser.png");
    }

    /**
     *
     * {@inheritdoc}
     * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels:build()
     *
     */
    public function build(array $regions)
    {
        // TODO Auto-generated method stub
        $build = parent::build($regions);
        FormatageModelsThemes::formatSettingValues($build);
        return $build;
    }

    /**
     * 
     * {@inheritdoc}
     * 
     */
    public function defaultConfiguration()
    {
        return parent::defaultConfiguration() + [
            'css' => '',
            'content' => [
                'builder-form' => true,
                'info' => [
                    'title' => 'Contenu',
                    'loader' => 'dynamic'
                ],
                'fields' => [
                    "impact_hero_teaser_title" => [
                        'text_html' => [
                            'label' => 'Title',
                            'value' => 'Lorem Ipsum'
                        ]
                    ],
                    "impact_hero_teaser_icon" => [
                        'text_html' => [
                            'label' => 'Lien',
                            'value' => '<svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-easel"><path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0zM2 3v7h12V3H2z"/></svg>'
                        ]
                    ]
                ]
            ]
        ];
    }
}
