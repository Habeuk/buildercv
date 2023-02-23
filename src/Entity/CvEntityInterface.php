<?php

namespace Drupal\buildercv\Entity;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\RevisionLogInterface;
use Drupal\Core\Entity\EntityChangedInterface;
use Drupal\Core\Entity\EntityPublishedInterface;
use Drupal\user\EntityOwnerInterface;

/**
 * Provides an interface for defining Cv entity entities.
 *
 * @ingroup buildercv
 */
interface CvEntityInterface extends ContentEntityInterface, RevisionLogInterface, EntityChangedInterface, EntityPublishedInterface, EntityOwnerInterface {

  /**
   * Add get/set methods for your configuration properties here.
   */

  /**
   * Gets the Cv entity name.
   *
   * @return string
   *   Name of the Cv entity.
   */
  public function getName();

  /**
   * Sets the Cv entity name.
   *
   * @param string $name
   *   The Cv entity name.
   *
   * @return \Drupal\buildercv\Entity\CvEntityInterface
   *   The called Cv entity entity.
   */
  public function setName($name);

  /**
   * Gets the Cv entity creation timestamp.
   *
   * @return int
   *   Creation timestamp of the Cv entity.
   */
  public function getCreatedTime();

  /**
   * Sets the Cv entity creation timestamp.
   *
   * @param int $timestamp
   *   The Cv entity creation timestamp.
   *
   * @return \Drupal\buildercv\Entity\CvEntityInterface
   *   The called Cv entity entity.
   */
  public function setCreatedTime($timestamp);

  /**
   * Gets the Cv entity revision creation timestamp.
   *
   * @return int
   *   The UNIX timestamp of when this revision was created.
   */
  public function getRevisionCreationTime();

  /**
   * Sets the Cv entity revision creation timestamp.
   *
   * @param int $timestamp
   *   The UNIX timestamp of when this revision was created.
   *
   * @return \Drupal\buildercv\Entity\CvEntityInterface
   *   The called Cv entity entity.
   */
  public function setRevisionCreationTime($timestamp);

  /**
   * Gets the Cv entity revision author.
   *
   * @return \Drupal\user\UserInterface
   *   The user entity for the revision author.
   */
  public function getRevisionUser();

  /**
   * Sets the Cv entity revision author.
   *
   * @param int $uid
   *   The user ID of the revision author.
   *
   * @return \Drupal\buildercv\Entity\CvEntityInterface
   *   The called Cv entity entity.
   */
  public function setRevisionUserId($uid);

}
