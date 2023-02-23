<?php

namespace Drupal\buildercv\Entity;

use Drupal\views\EntityViewsData;

/**
 * Provides Views data for Cv entity entities.
 */
class CvEntityViewsData extends EntityViewsData {

  /**
   * {@inheritdoc}
   */
  public function getViewsData() {
    $data = parent::getViewsData();

    // Additional information for Views integration, such as table joins, can be
    // put here.
    return $data;
  }

}
