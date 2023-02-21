<?php

namespace Drupal\buildercv\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configure buildercv settings for this site.
 */
class SettingsForm extends ConfigFormBase {
  
  /**
   *
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'buildercv_settings';
  }
  
  /**
   *
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'buildercv.settings'
    ];
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('buildercv.settings')->getRawData();
    $form['texts'] = [
      '#type' => 'details',
      '#title' => "text utilisé au niveau du front",
      '#tree' => TRUE,
      '#open' => true
    ];
    // modals
    $form['texts']['modal'] = [
      '#type' => 'details',
      '#title' => "Modal",
      '#open' => false
    ];
    $form['texts']['modal']['title_button_modal'] = [
      "#type" => 'textfield',
      '#title' => 'title_button_modal',
      '#default_value' => isset($config['texts']['modal']['title_button_modal']) ? $this->t($config['texts']['modal']['title_button_modal']) : $this->t(" Conseils ")
    ];
    $form['texts']['modal']['desc_modal'] = [
      "#type" => 'text_format',
      '#title' => 'desc_modal',
      '#default_value' => isset($config['texts']['modal']['desc_modal']) ? $this->t($config['texts']['modal']['desc_modal']['value']) : "",
      '#format' => isset($config['texts']['modal']['desc_modal']) ? $config['texts']['modal']['desc_modal']['format'] : 'full_html'
    ];
    $form['texts']['modal']['button'] = [
      "#type" => 'textfield',
      '#title' => 'button',
      '#default_value' => isset($config['texts']['modal']['button']) ? $this->t($config['texts']['modal']['button']) : $this->t(" J'ai compris ")
    ];
    // Presentation
    $form['texts']['presentation'] = [
      '#type' => 'details',
      '#title' => "Presentation",
      '#open' => false
    ];
    $form['texts']['presentation']['title_box'] = [
      "#type" => 'textfield',
      '#title' => 'title_box',
      '#default_value' => isset($config['texts']['presentation']['title_box']) ? $this->t($config['texts']['presentation']['title_box']) : $this->t(" Dites-nous en plus sur vous ")
    ];
    $form['texts']['presentation']['desc_box'] = [
      "#type" => 'text_format',
      '#title' => 'desc_box',
      '#default_value' => isset($config['texts']['presentation']['desc_box']) ? $this->t($config['texts']['presentation']['desc_box']['value']) : $this->t(" Dites-nous qui vous êtes, comment les employeurs peuvent vous contacter et quelle est votre profession "),
      '#format' => isset($config['texts']['presentation']['desc_modal']) ? $config['texts']['presentation']['desc_modal']['format'] : 'full_html'
    ];
    // Experience
    $form['texts']['experience'] = [
      '#type' => 'details',
      '#title' => "Experience",
      '#open' => false
    ];
    $form['texts']['experience']['title_box'] = [
      "#type" => 'textfield',
      '#title' => 'title_box',
      '#default_value' => isset($config['texts']['experience']['title_box']) ? $this->t($config['texts']['experience']['title_box']) : $this->t(" Expérience professionnelle ")
    ];
    $form['texts']['experience']['desc_box'] = [
      "#type" => 'text_format',
      '#title' => 'desc_box',
      '#default_value' => isset($config['texts']['experience']['desc_box']) ? $this->t($config['texts']['experience']['desc_box']['value']) : $this->t("  Commencez par votre poste actuel et remontez dans le passé. Si vous
          avez beaucoup d'expérience, n'ajoutez que les postes les plus récents
          et pertinents. "),
      '#format' => isset($config['texts']['experience']['desc_modal']) ? $config['texts']['experience']['desc_modal']['format'] : 'full_html'
    ];
    // Formation
    $form['texts']['formation'] = [
      '#type' => 'details',
      '#title' => "Formation",
      '#open' => false
    ];
    $form['texts']['formation']['title_box'] = [
      "#type" => 'textfield',
      '#title' => 'title_box',
      '#default_value' => isset($config['texts']['formation']['title_box']) ? $this->t($config['texts']['formation']['title_box']) : $this->t(" Vos diplomes / formations ")
    ];
    $form['texts']['formation']['desc_box'] = [
      "#type" => 'text_format',
      '#title' => 'desc_box',
      '#default_value' => isset($config['texts']['formation']['desc_box']) ? $this->t($config['texts']['formation']['desc_box']['value']) : $this->t(" Commencez par vos études les plus récentes et remontez dans le passé.
          Si vous avez suivi de nombreuses études, n'ajoutez que les plus
          récentes et pertinentes. "),
      '#format' => isset($config['texts']['formation']['desc_modal']) ? $config['texts']['formation']['desc_modal']['format'] : 'full_html'
    ];
    
    // Boutons actions.
    $form['texts']['actions'] = [
      '#type' => 'details',
      '#title' => "Actions",
      '#open' => false
    ];
    $form['texts']['actions']['buttons_previews'] = [
      "#type" => 'textfield',
      '#title' => 'buttons_previews',
      '#default_value' => isset($config['texts']['actions']['buttons_previews']) ? $this->t($config['texts']['actions']['buttons_previews']) : $this->t("Previous step")
    ];
    $form['texts']['actions']['buttons_next'] = [
      "#type" => 'textfield',
      '#title' => 'buttons_next',
      '#default_value' => isset($config['texts']['actions']['buttons_next']) ? $this->t($config['texts']['actions']['buttons_next']) : $this->t("next step")
    ];
    return parent::buildForm($form, $form_state);
  }
  
  /**
   *
   * {@inheritdoc}
   */
  // public function validateForm(array &$form, FormStateInterface $form_state)
  // {
  // if ($form_state->getValue('example') != 'example') {
  // $form_state->setErrorByName('example', $this->t('The value is not
  // correct.'));
  // }
  // parent::validateForm($form, $form_state);
  // }
  
  /**
   *
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->t("Previous step");
    $config = $this->config('buildercv.settings');
    $config->set('texts', $form_state->getValue('texts'));
    $config->save();
    parent::submitForm($form, $form_state);
  }
  
}
