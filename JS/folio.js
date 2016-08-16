$(document).ready(function() {
    $('html').show();
 	$("#header").css("background-color","white");
 	// $('#someMusicLimited').mouseenter(function(){
 	// 	$('#showCase').attr('src','images/artistPage.png');
 	// })
 	changeImgWhenHover('#someMusicLimited img','#caption1');
 	changeImgWhenHover('#whereToGo img','#caption2');
 	changeImgWhenHover('#inTheBox img','#caption3');

})




function changeImgWhenHover(element,element2)
{
	$(element).mouseenter(function(){
 		$('#display').attr('src',this.src);
 		$('#caption').hide();
 		$(element2).show();
 	})

 	$(element).mouseleave(function(){
 		$('#display').attr('src','')
 		$(element2).hide();
 		$('#caption').show();
 	})
}