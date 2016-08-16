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
				<a href="whatyouneed.html"><ul>What you need..</ul></a>
				<a href="folio.html"><ul>Folio</ul></a>
				<a href=""><ul>Get a quote</ul></a>
				<a href="aboutme.html"><ul>About Me</ul></a>
				<a href=""><ul>Contact Me</ul></a>
		</li>
		
		<li id="socialNavBar">
					<a href=""><ul>FACEBOOK</ul></a>
					<a href=""><ul>TWITTER</ul></a>
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