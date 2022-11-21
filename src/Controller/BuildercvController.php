<?php

namespace Drupal\buildercv\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for buildercv routes.
 */
class BuildercvController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function BuildCv() {
    $build['content'] = [
      '#type' => 'html_tag',
      '#tag' => 'section',
      "#attributes" => [
        'id' => 'app',
        'class' => [
          'm-5',
          'p-5'
        ]
      ]
    ];
    $build['content']['#attached']['library'][] = 'buildercv/buildercv';

    return $build;
  }

}
