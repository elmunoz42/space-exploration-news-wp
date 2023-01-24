<?php // Aaadmin-Boss - Settings Page



// disable direct file access
if ( ! defined( 'ABSPATH' ) ) {

	exit;

}



// display the plugin settings page
function ab_display_settings_page() {

	// check if user is allowed access
	if ( ! current_user_can( 'manage_options' ) ) return;

	?>

	<div class="wrap">
		<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
		 <br><br>

	 	<!-- Logo upload not working -->
		<!-- <a href="http://aaadmin-boss-wp/wp-admin/options-general.php?page=ab-login-logo" target="_blank"><button>Add custom login logo</button></a> -->
		<h3><strong>Replace custom login logo here: /wp-content/plugins/aaadmin-boss/public/assets/login-screen-logo.png</strong></h3>
		<p>NOTE: This will only be enabled if you also enable the custom login page style</p>
		<form action="options.php" method="post">
         <br><br>

			<?php

           

			// output security fields
			settings_fields( 'ab_options' );

			// output setting sections
			do_settings_sections( 'aaadmin-boss' );
			// submit button
			submit_button();

			?>

		</form>
	</div>

	<?php

}
