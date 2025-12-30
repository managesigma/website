<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  echo 'Working!';
  $receiving_email_address = 'patilshubani@gmail.com';

 
  $to = $receiving_email_address;
  $from_name = $_POST['name'];
  $from_email = $_POST['email'];
  $from_phone = $_POST['phone_num'];
  $subject = $_POST['subject'];


// COMPOSE
	$message = $_POST['message'];
	

	// BASIC HEADER
	$headers = 'From: ' . $from_email . "\r\n" .
	   	   	   'Reply-To: ' . $to . "\r\n" .
	    	   'X-Mailer: PHP/' . phpversion();
	
	
	// SEND AND SHOW MESSAGE
	if (mail($to, $subject, $message, $headers)) echo $headers.'<h1>Mail sent!</h1>';
	else echo '<h1>Something went wrong...</h1>';
	

?>
