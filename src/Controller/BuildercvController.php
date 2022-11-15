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
  public function build() {

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];

    return $build;
  }

}
