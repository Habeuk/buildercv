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
    $form['texts']['modal']['desc_header'] = [
      "#type" => 'text_format',
      '#title' => 'desc_header',
      '#default_value' => isset($config['texts']['modal']['desc_header']) ? $this->t($config['texts']['modal']['desc_header']['value']) : "",
      '#format' => isset($config['texts']['modal']['desc_header']) ? $config['texts']['modal']['desc_header']['format'] : 'full_html'
    ];
    $form['texts']['modal']['desc_modal'] = [
      "#type" => 'text_format',
      '#title' => 'desc_modal',
      '#default_value' => isset($config['texts']['modal']['desc_modal']) ? $this->t($config['texts']['modal']['desc_modal']['value']) : '<ul class="chip-check">
           <li data-qa="contact-information-tips-1" class="sc-1qcv85o-2 gEfbim">
             <p class="sc-2wh0z1-0 eQnuyS tips-text">
               Keep in mind that your email address and website
               should be professional as they will be seen and used by
               potential employers.
             </p>
           </li>
           <li data-qa="contact-information-tips-2" class="sc-1qcv85o-2 gEfbim">
             <p class="sc-2wh0z1-0 eQnuyS tips-text">
               The standard email address format used by the
               majority of applicants is firstname.lastname@email.com
             </p>
           </li>
           <li data-qa="contact-information-tips-3" class="sc-1qcv85o-2 gEfbim">
             <p class="sc-2wh0z1-0 eQnuyS tips-text">
               Your LinkedIn profile should be up-to-date and match the most
               as possible to the information in your CV.
             </p>
           </li>
           <li data-qa="contact-information-tips-4" class="sc-1qcv85o-2 gEfbim">
             <p class="sc-2wh0z1-0 eQnuyS tips-text">
               If you are applying for a job in Europe, it is practically
               mandatory to add a professional photo to your CV.
             </p>
           </li>
           <li data-qa="contact-information-tips-5" class="sc-1qcv85o-2 gEfbim">
             <p class="sc-2wh0z1-0 eQnuyS tips-text">
               Your photo should look like a passport photo, not showing
               only the head and shoulders and not the rest of your body, with a
               good lighting and a professional appearance.
             </p>
           </li>
           <li data-qa="contact-information-tips-6" class="sc-1qcv85o-2 gEfbim">
             <p class="sc-2wh0z1-0 eQnuyS tips-text">
               Don\'t forget that this is the first impression you will make on a
               potential employer - make sure it\'s good!
             </p>
           </li>
         </ul>',
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
      '#default_value' => isset($config['texts']['experience']['title_box']) ? $this->t($config['texts']['experience']['title_box']) : $this->t(" Professional experience")
    ];
    $form['texts']['experience']['desc_box'] = [
      "#type" => 'text_format',
      '#title' => 'desc_box',
      '#default_value' => isset($config['texts']['experience']['desc_box']) ? $this->t($config['texts']['experience']['desc_box']['value']) : $this->t("Commencez par votre poste actuel et remontez dans le passé. Si vous avez beaucoup d'expérience, n'ajoutez que les postes les plus récents et pertinents. "),
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
      '#default_value' => isset($config['texts']['formation']['title_box']) ? $this->t($config['texts']['formation']['title_box']) : $this->t(" Your diplomas / training")
    ];
    $form['texts']['formation']['desc_box'] = [
      "#type" => 'text_format',
      '#title' => 'desc_box',
      '#default_value' => isset($config['texts']['formation']['desc_box']) ? $this->t($config['texts']['formation']['desc_box']['value']) : $this->t(" Start with your most recent studies and go back in time. If you have followed many studies, add only the most recent and relevant. "),
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
    $form['texts']['actions']['create_cv'] = [
      "#type" => 'textfield',
      '#title' => 'create_cv',
      '#default_value' => isset($config['texts']['actions']['create_cv']) ? $this->t($config['texts']['actions']['create_cv']) : $this->t("Create your resume")
    ];
    $form['texts']['actions']['see_cv'] = [
      "#type" => 'textfield',
      '#title' => 'see_cv',
      '#default_value' => isset($config['texts']['actions']['see_cv']) ? $this->t($config['texts']['actions']['see_cv']) : $this->t("See your CV")
    ];
    $form['texts']['actions']['admin_cv'] = [
      "#type" => 'textfield',
      '#title' => 'admin_cv',
      '#default_value' => isset($config['texts']['actions']['admin_cv']) ? $this->t($config['texts']['actions']['admin_cv']) : $this->t("Administration of your resume")
    ];
    
    // Steps.
    $form['texts']['createpage'] = [
      '#type' => 'details',
      '#title' => "page create cv",
      '#open' => false
    ];
    $form['texts']['createpage']['title_box'] = [
      "#type" => 'textfield',
      '#title' => 'title_box',
      '#default_value' => isset($config['texts']['createpage']['title_box']) ? $this->t($config['texts']['createpage']['title_box']) : $this->t("Create your CV")
    ];
    $form['texts']['createpage']['desc_box'] = [
      "#type" => 'text_format',
      '#title' => 'desc_box',
      '#default_value' => isset($config['texts']['createpage']['desc_box']) ? $this->t($config['texts']['createpage']['desc_box']['value']) : $this->t(" Your CV will be generated from the information provided, you can modify it later. "),
      '#format' => isset($config['texts']['createpage']['desc_modal']) ? $config['texts']['createpage']['desc_modal']['format'] : 'full_html'
    ];
    
    // Steps.
    $form['texts']['steps'] = [
      '#type' => 'details',
      '#title' => "Steps",
      '#open' => false
    ];
    $form['texts']['steps']['create_domaine'] = [
      "#type" => 'textfield',
      '#title' => 'create_domaine',
      '#default_value' => isset($config['texts']['steps']['buttons_previews']) ? $this->t($config['texts']['steps']['buttons_previews']) : $this->t("Creation of your domain")
    ];
    $form['texts']['steps']['register_domaine'] = [
      "#type" => 'textfield',
      '#title' => 'register_domaine',
      '#default_value' => isset($config['texts']['steps']['register_domaine']) ? $this->t($config['texts']['steps']['register_domaine']) : $this->t("Registering your domain")
    ];
    $form['texts']['steps']['create_content'] = [
      "#type" => 'textfield',
      '#title' => 'create_content',
      '#default_value' => isset($config['texts']['steps']['create_content']) ? $this->t($config['texts']['steps']['create_content']) : $this->t("Creation of your content + CV")
    ];
    $form['texts']['steps']['create_theme'] = [
      "#type" => 'textfield',
      '#title' => 'create_theme',
      '#default_value' => isset($config['texts']['steps']['create_theme']) ? $this->t($config['texts']['steps']['create_theme']) : $this->t("Create your theme")
    ];
    $form['texts']['steps']['layout_header'] = [
      "#type" => 'textfield',
      '#title' => 'layout_header',
      '#default_value' => isset($config['texts']['steps']['layout_header']) ? $this->t($config['texts']['steps']['layout_header']) : $this->t("Creation of the header")
    ];
    $form['texts']['steps']['layout_footer'] = [
      "#type" => 'textfield',
      '#title' => 'layout_footer',
      '#default_value' => isset($config['texts']['steps']['layout_footer']) ? $this->t($config['texts']['steps']['layout_footer']) : $this->t("Creation of the footer")
    ];
    $form['texts']['steps']['generate_style'] = [
      "#type" => 'textfield',
      '#title' => 'generate_style',
      '#default_value' => isset($config['texts']['steps']['generate_style']) ? $this->t($config['texts']['steps']['generate_style']) : $this->t("Generate theme styles")
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
