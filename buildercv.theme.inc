<?php

function template_preprocess_buildercv_experience_formatter(&$vars) {
  $vars['item'] = [];
  if (!empty($vars['element']['#item'])) {
    $vars['item'] = $vars['element']['#item'];
  }
}

function template_preprocess_buildercv_value_niveau_formatter(&$vars) {
  // dump($vars);
  if (!empty($vars['element']['#item'])) {
    $vars['item'] = $vars['element']['#item'];
  }
}

function template_preprocess_buildercv_experience_formatter3(&$vars) {
  $vars['item'] = [];
  if (!empty($vars['element']['#item'])) {
    $vars['item'] = $vars['element']['#item'];
  }
}

function template_preprocess_buildercv_icon_text(&$vars) {
  $vars['item'] = [];
  if (!empty($vars['element']['#item'])) {
    $vars['item'] = $vars['element']['#item'];
  }
}

function template_preprocess_buildercv_field_chart(&$vars) {
  //
}