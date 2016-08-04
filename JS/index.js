
var slideIndex = 0;




$(document).ready(function() {
    $('html').show();
    
    carousel();


	$("#header li").mouseenter(function(){
		$("#header").css("background-color","white")
	});
	$("#header li").mouseleave(function(){

		$("#header").css("background-color","")
	});



})

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000); // Change image every 2 seconds
}