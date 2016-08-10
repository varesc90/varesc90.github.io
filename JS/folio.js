$(document).ready(function() {
    $('html').show();
 	$("#header").css("background-color","white");
 	// $('#someMusicLimited').mouseenter(function(){
 	// 	$('#showCase').attr('src','images/artistPage.png');
 	// })
 	changeImgWhenHover('#someMusicLimited img');
 	changeImgWhenHover('#whereToGo img');
 	changeImgWhenHover('#inTheBox img');

})




function changeImgWhenHover(element)
{
	$(element).mouseenter(function(){
 		$('#showCase').attr('src',this.src);
 	})

 	$(element).mouseleave(function(){
 		$('#showCase').attr('src','images/nyc.jpg')
 	})
}