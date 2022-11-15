<?php

namespace Drupal\buildercv;

use Drupal\Core\Entity\ContentEntityStorageInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Language\LanguageInterface;
use Drupal\buildercv\Entity\CvEntityInterface;

/**
 * Defines the storage handler class for Cv entity entities.
 *
 * This extends the base storage class, adding required special handling for
 * Cv entity entities.
 *
 * @ingroup buildercv
 */
interface CvEntityStorageInterface extends ContentEntityStorageInterface {

  /**
   * Gets a list of Cv entity revision IDs for a specific Cv entity.
   *
   * @param \Drupal\buildercv\Entity\CvEntityInterface $entity
   *   The Cv entity entity.
   *
   * @return int[]
   *   Cv entity revision IDs (in ascending order).
   */
  public function revisionIds(CvEntityInterface $entity);

  /**
   * Gets a list of revision IDs having a given user as Cv entity author.
   *
   * @param \Drupal\Core\Session\AccountInterface $account
   *   The user entity.
   *
   * @return int[]
   *   Cv entity revision IDs (in ascending order).
   */
  public function userRevisionIds(AccountInterface $account);

  /**
   * Counts the number of revisions in the default language.
   *
   * @param \Drupal\buildercv\Entity\CvEntityInterface $entity
   *   The Cv entity entity.
   *
   * @return int
   *   The number of revisions in the default language.
   */
  public function countDefaultLanguageRevisions(CvEntityInterface $entity);

  /**
   * Unsets the language for all Cv entity with the given language.
   *
   * @param \Drupal\Core\Language\LanguageInterface $language
   *   The language object.
   */
  public function clearRevisionsLanguage(LanguageInterface $language);

}
