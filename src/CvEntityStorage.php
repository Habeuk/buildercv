<?php

namespace Drupal\buildercv;

use Drupal\Core\Entity\Sql\SqlContentEntityStorage;
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
class CvEntityStorage extends SqlContentEntityStorage implements CvEntityStorageInterface {

  /**
   * {@inheritdoc}
   */
  public function revisionIds(CvEntityInterface $entity) {
    return $this->database->query(
      'SELECT vid FROM {cv_entity_revision} WHERE id=:id ORDER BY vid',
      [':id' => $entity->id()]
    )->fetchCol();
  }

  /**
   * {@inheritdoc}
   */
  public function userRevisionIds(AccountInterface $account) {
    return $this->database->query(
      'SELECT vid FROM {cv_entity_field_revision} WHERE uid = :uid ORDER BY vid',
      [':uid' => $account->id()]
    )->fetchCol();
  }

  /**
   * {@inheritdoc}
   */
  public function countDefaultLanguageRevisions(CvEntityInterface $entity) {
    return $this->database->query('SELECT COUNT(*) FROM {cv_entity_field_revision} WHERE id = :id AND default_langcode = 1', [':id' => $entity->id()])
      ->fetchField();
  }

  /**
   * {@inheritdoc}
   */
  public function clearRevisionsLanguage(LanguageInterface $language) {
    return $this->database->update('cv_entity_revision')
      ->fields(['langcode' => LanguageInterface::LANGCODE_NOT_SPECIFIED])
      ->condition('langcode', $language->getId())
      ->execute();
  }

}
