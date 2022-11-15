<?php

/**
 * @file
 * Contains model_cv.page.inc.
 *
 * Page callback for Model cv entities.
 */

use Drupal\Core\Render\Element;

/**
 * Prepares variables for Model cv templates.
 *
 * Default template: model_cv.html.twig.
 *
 * @param array $variables
 *   An associative array containing:
 *   - elements: An associative array containing the user information and any
 *   - attributes: HTML attributes for the containing element.
 */
function template_preprocess_model_cv(array &$variables) {
  // Fetch ModelCv Entity Object.
  $model_cv = $variables['elements']['#model_cv'];

  // Helpful $content variable for templates.
  foreach (Element::children($variables['elements']) as $key) {
    $variables['content'][$key] = $variables['elements'][$key];
  }
}
