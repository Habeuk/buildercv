<?php

namespace Drupal\buildercv;

class Buildercv {

  /**
   * Liste de page par defaut
   *
   * @return array
   */
  static function getDefautPage() {
    return [];
  }

  public static function getActiveDomain() {
    /**
     *
     * @var \Drupal\domain\DomainNegotiator $domainNegos
     */
    $domainNegos = \Drupal::service('domain.negotiator');
    if ($domainNegos->getActiveDomain())
      return $domainNegos->getActiveId();
  }

}