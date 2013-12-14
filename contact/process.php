<?php

// Information to be modified

$your_email = "g.bourdais@gmail.com"; // email address to which the form data will be sent
$subject = "Appli Guitare"; // subject of the email that is sent
$thanks_page = "../index.html"; // path to the thank you page following successful form submission
$contact_page = "contact.html"; // path to the HTML contact page where the form appears


// Nothing needs to be modified below this line

if (!isset($_POST['submit'])) {
    header( "Location: $contact_page" );
  }

if (isset($_POST["submit"])) {
	$nam = htmlentities(htmlspecialchars($_POST["name"]));
	/*$ema = trim($_POST["email"]);*/
	$com = htmlentities(htmlspecialchars($_POST["comments"]));
	$spa = $_POST["spam"];

	if (get_magic_quotes_gpc()) { 
	$nam = stripslashes($nam);
	/*$ema = stripslashes($ema);*/
	$com = stripslashes($com);
	}

$error_msg=array(); 
/*
if (empty($nam) || !preg_match("~^[a-z\-'\s]{1,60}$~i", $nam)) { 
$error_msg[] = "Le nom ne doit contenir que des caracteres, espaces, tirets et apostrophes.";
}*/
/*
if (empty($ema) || !filter_var($ema, FILTER_VALIDATE_EMAIL)) {
	$error_msg[] = "Entrer un email valide";
}*/

/*$limit = 1000;

if (empty($com) || !preg_match("/^[0-9A-Za-z\/-\s'\(\)!\?\.,]+$/", $com) || (strlen($com) > $limit)) { 
$error_msg[] = "The Comments field must contain only letters, digits, spaces and basic punctuation (&nbsp;'&nbsp;-&nbsp;,&nbsp;.&nbsp;), and has a limit of 1000 characters";
}

if (!empty($spa) && !($spa == "4" || $spa == "four")) {
	echo "SPAM !";
	exit ();
}*/


if ($error_msg) {
echo '<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>Erreur</title>
<style>
	body {background: #f7f7f7; font: 100%/1.375 georgia, serif;padding: 20px 40px;}
	form div {margin-bottom: 10px;}
	.content {width: 40%; margin: 0 auto;}
	h1 {margin: 0 0 20px 0; font-size: 175%; font-family: calibri, arial, sans-serif;}
	label {margin-bottom: 2px;}
	input[type="text"], input[type="email"], textarea {font-size: 0.75em; width: 98%; font-family: arial; border: 1px solid #ebebeb; padding: 4px; display: block;}
	input[type="radio"] {margin: 0 5px 0 0;}
	textarea {overflow: auto;}
	.hide {display: none;}
	.err {color: red; font-size: 0.875em; margin: 1em 0; padding: 0 2em;}
</style>
</head>
<body>
	<div class="content">
		<h1>Oups !</h1>
		<p>Le message n a pas pu etre envoye.
		Vérifier que chaque champ est rempli.</p>
		<ul class="err">';
foreach ($error_msg as $err) {
echo '<li>'.$err.'</li>';
}
echo '</ul>
	<form method="post" action="', $_SERVER['PHP_SELF'], '">
		<div>
			<label for="name">Name</label>
			<input name="name" type="text" size="40" maxlength="60" id="name" value="'; if (isset($_POST["name"])) {echo $nam;}; echo '">
		</div>
		
		<div>
			<label for="comm">Comments</label>
			<textarea name="comments" rows="10" cols="50" id="comm">'; if (isset($_POST["comments"])) {echo $com;}; echo '</textarea>
		</div>
		<div class="hide">
			<label for="spam">What is two plus two?</label>
			<input name="spam" type="text" size="4" id="spam">
		</div>
		<div>
			<input type="submit" name="submit" value="Envoyer">
		</div>
	</form>
</body>
</html>';
exit();
} 

$email_body = 
	"Name of sender: $nam\n\n" .
	"Email of sender: retour@bourdais.info\n\n" .
    "COMMENTS:\n\n" .
	"$com" ; 


if (isset($_REQUEST['comments']) && !$error_msg) {
mail ($your_email, $subject, $email_body, "From: $nam <retour@bourdais.info>" . "\r\n" . "Reply-To: $nam <$ema>");
header ("Location: $thanks_page");
exit();
}  
}