<?php

namespace Drupal\buildercv;

use Drupal\Core\Entity\Sql\SqlContentEntityStorage;
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
class ModelCvStorage extends SqlContentEntityStorage implements ModelCvStorageInterface {

  /**
   * {@inheritdoc}
   */
  public function revisionIds(ModelCvInterface $entity) {
    return $this->database->query(
      'SELECT vid FROM {model_cv_revision} WHERE id=:id ORDER BY vid',
      [':id' => $entity->id()]
    )->fetchCol();
  }

  /**
   * {@inheritdoc}
   */
  public function userRevisionIds(AccountInterface $account) {
    return $this->database->query(
      'SELECT vid FROM {model_cv_field_revision} WHERE uid = :uid ORDER BY vid',
      [':uid' => $account->id()]
    )->fetchCol();
  }

  /**
   * {@inheritdoc}
   */
  public function countDefaultLanguageRevisions(ModelCvInterface $entity) {
    return $this->database->query('SELECT COUNT(*) FROM {model_cv_field_revision} WHERE id = :id AND default_langcode = 1', [':id' => $entity->id()])
      ->fetchField();
  }

  /**
   * {@inheritdoc}
   */
  public function clearRevisionsLanguage(LanguageInterface $language) {
    return $this->database->update('model_cv_revision')
      ->fields(['langcode' => LanguageInterface::LANGCODE_NOT_SPECIFIED])
      ->condition('langcode', $language->getId())
      ->execute();
  }

}
