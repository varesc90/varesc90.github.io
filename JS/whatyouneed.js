
var x;


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

    $(".backbutton").click(function(){
      backToPrev(x);
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
  x = element;
  console.log(x);
}

function backToPrev(element){
  fadeout(element);
  console.log(element);
  fadein("#body");
}