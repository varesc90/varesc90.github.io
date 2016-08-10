$(document).ready(function() {

  $('html').show();

	$("#header li").mouseenter(function(){
		$("#header").css("background-color","white")
	});
	$("#header li").mouseleave(function(){

		$("#header").css("background-color","")
	});

  	$("#choices li").each(function(i){
  		$(this).mouseenter(function(){
  			$(this).animate({"letter-spacing":"3px"},'fast')
  		})
  		$(this).mouseleave(function(){
  			$(this).animate({"letter-spacing":"2px"},'fast')
  		})
  	})

  	$("#business").click(function(){
  		fadeout("#body");
      fadein("#businessBody");
  	})

      $("#blog").click(function(){
      fadeout("#body");
      fadein("#blogBody");
    })

    $("#restaurant").click(function(){
      fadeout("#body");
      fadein("#restaurantBody");
    }) 

 })


/////////////////////////////////////
//            Functions
////////////////////////////////////

function fadeout(element){
	$(element).fadeOut("slow",function(){

	});
}

function fadein(element){
  $(element).fadeIn("slow",function(){

  });
}