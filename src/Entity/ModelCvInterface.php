<?php

namespace Drupal\buildercv\Entity;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\RevisionLogInterface;
use Drupal\Core\Entity\EntityChangedInterface;
use Drupal\Core\Entity\EntityPublishedInterface;
use Drupal\user\EntityOwnerInterface;

/**
 * Provides an interface for defining Model cv entities.
 *
 * @ingroup buildercv
 */
interface ModelCvInterface extends ContentEntityInterface, RevisionLogInterface, EntityChangedInterface, EntityPublishedInterface, EntityOwnerInterface {

  /**
   * Add get/set methods for your configuration properties here.
   */

  /**
   * Gets the Model cv name.
   *
   * @return string
   *   Name of the Model cv.
   */
  public function getName();

  /**
   * Sets the Model cv name.
   *
   * @param string $name
   *   The Model cv name.
   *
   * @return \Drupal\buildercv\Entity\ModelCvInterface
   *   The called Model cv entity.
   */
  public function setName($name);

  /**
   * Gets the Model cv creation timestamp.
   *
   * @return int
   *   Creation timestamp of the Model cv.
   */
  public function getCreatedTime();

  /**
   * Sets the Model cv creation timestamp.
   *
   * @param int $timestamp
   *   The Model cv creation timestamp.
   *
   * @return \Drupal\buildercv\Entity\ModelCvInterface
   *   The called Model cv entity.
   */
  public function setCreatedTime($timestamp);

  /**
   * Gets the Model cv revision creation timestamp.
   *
   * @return int
   *   The UNIX timestamp of when this revision was created.
   */
  public function getRevisionCreationTime();

  /**
   * Sets the Model cv revision creation timestamp.
   *
   * @param int $timestamp
   *   The UNIX timestamp of when this revision was created.
   *
   * @return \Drupal\buildercv\Entity\ModelCvInterface
   *   The called Model cv entity.
   */
  public function setRevisionCreationTime($timestamp);

  /**
   * Gets the Model cv revision author.
   *
   * @return \Drupal\user\UserInterface
   *   The user entity for the revision author.
   */
  public function getRevisionUser();

  /**
   * Sets the Model cv revision author.
   *
   * @param int $uid
   *   The user ID of the revision author.
   *
   * @return \Drupal\buildercv\Entity\ModelCvInterface
   *   The called Model cv entity.
   */
  public function setRevisionUserId($uid);

}
