$(document).ready(function() {
    $('html').show();
    
	$("#header li").mouseenter(function(){
		$("#header").css("background-color","white")
	});
	$("#header li").mouseleave(function(){

		$("#header").css("background-color","")
	});

 })