<?php 
error_reporting(0); 
$name = $_POST['name']; 
$email= $_POST['email']; 
$phone = $_POST['phone']; 
$msg = $_POST['msg'];

$header .= "X-Mailer: PHP/" . phpversion() . " \r\n"; 
$header .= "Mime-Version: 1.0 \r\n"; 
$header .= "Content-Type: text/plain"; 

$mensaje = "Nombre: " . $name . " \r\n"; 
$mensaje .= "Correo: " . $email . " \r\n"; 
$mensaje .= "Teléfono: " . $phone . " \r\n"; 
$mensaje .= "Mensaje: " . $msg . " \r\n"; 
$mensaje .= "Enviado el " . date('d/m/Y', time()); 

$para = 'manuelalferezruiz@gmail.com'; 
$asunto = 'Mensaje de volpolini.com'; 

mail($para, $asunto, utf8_decode($mensaje), $header); 

echo 'Mensaje enviado correctamente'; 
?> 