<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="styles/styles.css">
	<meta charset="UTF-8">
</head>
<body>


		<img id="bgImage" src="images/shibuya.jpg">
		

<p id="topic">Thank You</p>


	<section id ="header">
		<li id="siteNavBar">
				<a href="index.html"><ul id= "logo"><img src="images/Logo.png"></ul></a>
				<a href="whatyouneed.html"><ul>What you need..</ul></a>
				<a href="folio.html"><ul>My Folio</ul></a>
				<a href=""><ul>Get a quote</ul></a>
				<a href="aboutme.html"><ul>About Me</ul></a>
				<a href="contactme.php"><ul>Contact Me</ul></a>
		</li>
		
		<li id="socialNavBar">
					<a href=""><ul><img src="images/facebook.jpg"></ul></a>
					<a href=""><ul><img src="images/twitter.png"></ul></a>
		</li>
	</section>

<?php  

	date_default_timezone_set('America/New_York');
	$contactme =$_POST["contactme"];
	$date = date('H:i, jS F Y');

	$fp = fopen("Feedback/contactme.txt",'a');

	$outputToFile = $date."\n".$contactme."\n\n";

	fwrite($fp,$outputToFile);

?>


	<script src="JS/jquery-3.0.0.js"></script>
	<script src="JS/contactme.js"></script>

</body>
</html>