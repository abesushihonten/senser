$(function(){
	$("h1").fadeIn(1500,function(){
		$("#btns").fadeIn(1500);
	});
	$(".fa-bars").on("click",function(){
		$(".side-container").toggle("slideDown");
	});
});