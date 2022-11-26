<?php

namespace Drupal\buildercv;

use Drupal\Core\Entity\EntityAccessControlHandler;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Access\AccessResult;

/**
 * Access controller for the Cv entity entity.
 *
 * @see \Drupal\buildercv\Entity\CvEntity.
 */
class CvEntityAccessControlHandler extends EntityAccessControlHandler {
  
  /**
   *
   * {@inheritdoc}
   */
  protected function checkAccess(EntityInterface $entity, $operation, AccountInterface $account) {
    /** @var \Drupal\buildercv\Entity\CvEntityInterface $entity */
    switch ($operation) {
      
      case 'view':
        
        if (!$entity->isPublished()) {
          return AccessResult::allowedIfHasPermission($account, 'view unpublished cv entity entities');
        }
        
        return AccessResult::allowed();
      // return AccessResult::allowedIfHasPermission($account, 'view published
      // cv entity entities');
      
      case 'update':
        
        return AccessResult::allowedIfHasPermission($account, 'edit cv entity entities');
      
      case 'delete':
        
        return AccessResult::allowedIfHasPermission($account, 'delete cv entity entities');
    }
    
    // Unknown operation, no opinion.
    return AccessResult::neutral();
  }
  
  /**
   *
   * {@inheritdoc}
   */
  protected function checkCreateAccess(AccountInterface $account, array $context, $entity_bundle = NULL) {
    return AccessResult::allowedIfHasPermission($account, 'add cv entity entities');
  }
  
}
