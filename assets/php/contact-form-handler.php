<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message3 = $_POST['phonenumber'];
$message = $_POST['textarea'];

$email_form = '1humanx911@gmail.com';

$email_subject = "New Form Submission";



$email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n".
                 "Phone : $message3.\n".
                    "User Message: $message.\n";

                    $to = "sevenart2030@hotmail.com";
                    $headers = "Form: $email_form \r\n";
                    
                    $headers .= "Reply-To: $visitor_email \r\n";

                    mail($to,$email_subject,$email_body,$headers);
                    
                    header("Location: https://naderhns.000webhostapp.com/");
exit;