<?php
/*

Last updated by Dalbey - 10-2017

*/


// NOTE THIS COULD BE UPDATED AND PART OF THE PACKAGE
// add_action( 'woocommerce_email', 'unhook_those_pesky_emails' );
//
// function unhook_those_pesky_emails( $email_class ) {
//
// 		/**
// 		 * Hooks for sending emails during store events
// 		 **/
// 		remove_action( 'woocommerce_low_stock_notification', array( $email_class, 'low_stock' ) );
// 		remove_action( 'woocommerce_no_stock_notification', array( $email_class, 'no_stock' ) );
// 		remove_action( 'woocommerce_product_on_backorder_notification', array( $email_class, 'backorder' ) );
//
// 		// New order emails
// 		remove_action( 'woocommerce_order_status_pending_to_processing_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
// 		remove_action( 'woocommerce_order_status_pending_to_completed_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
// 		remove_action( 'woocommerce_order_status_pending_to_on-hold_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
// 		remove_action( 'woocommerce_order_status_failed_to_processing_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
// 		remove_action( 'woocommerce_order_status_failed_to_completed_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
// 		remove_action( 'woocommerce_order_status_failed_to_on-hold_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
//
// 		// Processing order emails
// 		remove_action( 'woocommerce_order_status_pending_to_processing_notification', array( $email_class->emails['WC_Email_Customer_Processing_Order'], 'trigger' ) );
// 		remove_action( 'woocommerce_order_status_pending_to_on-hold_notification', array( $email_class->emails['WC_Email_Customer_Processing_Order'], 'trigger' ) );
//
// 		// Completed order emails
// 		remove_action( 'woocommerce_order_status_completed_notification', array( $email_class->emails['WC_Email_Customer_Completed_Order'], 'trigger' ) );
//
// 		// Note emails
// 		remove_action( 'woocommerce_new_customer_note_notification', array( $email_class->emails['WC_Email_Customer_Note'], 'trigger' ) );
// }
//
// //disable core wp_user notify
// remove_action('register_new_user', 'wp_send_new_user_notifications');
// add_action('register_new_user', 'ecpd_send_new_user_notifications');
//
// function ecpd_send_new_user_notifications($user_id, $notify = 'user') {
//     wp_new_user_notification($user_id, null, $notify);
// }
