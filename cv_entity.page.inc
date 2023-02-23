<?php

/**
 * @file
 * Contains cv_entity.page.inc.
 *
 * Page callback for Cv entity entities.
 */

use Drupal\Core\Render\Element;

/**
 * Prepares variables for Cv entity templates.
 *
 * Default template: cv_entity.html.twig.
 *
 * @param array $variables
 *   An associative array containing:
 *   - elements: An associative array containing the user information and any
 *   - attributes: HTML attributes for the containing element.
 */
function template_preprocess_cv_entity(array &$variables) {
  // Fetch CvEntity Entity Object.
  $cv_entity = $variables['elements']['#cv_entity'];

  // Helpful $content variable for templates.
  foreach (Element::children($variables['elements']) as $key) {
    $variables['content'][$key] = $variables['elements'][$key];
  }
}
