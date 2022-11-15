<?php

namespace Drupal\buildercv;

use Drupal\Core\Entity\ContentEntityStorageInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Language\LanguageInterface;
use Drupal\buildercv\Entity\ModelCvInterface;

/**
 * Defines the storage handler class for Model cv entities.
 *
 * This extends the base storage class, adding required special handling for
 * Model cv entities.
 *
 * @ingroup buildercv
 */
interface ModelCvStorageInterface extends ContentEntityStorageInterface {

  /**
   * Gets a list of Model cv revision IDs for a specific Model cv.
   *
   * @param \Drupal\buildercv\Entity\ModelCvInterface $entity
   *   The Model cv entity.
   *
   * @return int[]
   *   Model cv revision IDs (in ascending order).
   */
  public function revisionIds(ModelCvInterface $entity);

  /**
   * Gets a list of revision IDs having a given user as Model cv author.
   *
   * @param \Drupal\Core\Session\AccountInterface $account
   *   The user entity.
   *
   * @return int[]
   *   Model cv revision IDs (in ascending order).
   */
  public function userRevisionIds(AccountInterface $account);

  /**
   * Counts the number of revisions in the default language.
   *
   * @param \Drupal\buildercv\Entity\ModelCvInterface $entity
   *   The Model cv entity.
   *
   * @return int
   *   The number of revisions in the default language.
   */
  public function countDefaultLanguageRevisions(ModelCvInterface $entity);

  /**
   * Unsets the language for all Model cv with the given language.
   *
   * @param \Drupal\Core\Language\LanguageInterface $language
   *   The language object.
   */
  public function clearRevisionsLanguage(LanguageInterface $language);

}
