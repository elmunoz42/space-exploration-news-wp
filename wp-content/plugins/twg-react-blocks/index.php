<?php

/*
  Plugin Name: TWG React Blocks
  Version: 1.0
  Author: Carlos Munoz Kampff with Fountain City, Inc
  Author URI: https://fountaincity.tech
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class BradsBoilerplate {
  function __construct() {
    add_action('init', array($this, 'onInit'));
  }

  function onInit() {
    wp_register_script('twgReactBlocksScripts', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_style('twgReactBlocksStyle', plugin_dir_url(__FILE__) . 'build/index.css');
    
    register_block_type('twg-react-blocks/masterclass-videos', array(
      'render_callback' => array($this, 'renderCallback'),
      'editor_script' => 'twgReactBlocksScripts',
      'editor_style' => 'twgReactBlocksStyle'
    ));
  }

  function renderCallback($attributes) {
    if (!is_admin()) {
      wp_enqueue_script('boilerplateFrontendScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
      wp_enqueue_style('boilerplateFrontendStyles', plugin_dir_url(__FILE__) . 'build/frontend.css');
    }

    ob_start(); ?>
    <div class="boilerplate-update-me"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
    <?php return ob_get_clean();
    
  }

  function renderCallbackBasic($attributes) {
    return '<div class="boilerplate-frontend">Widget Placeholder Text</div>';
  }
}

$bradsBoilerplate = new BradsBoilerplate();