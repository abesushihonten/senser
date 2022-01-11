$(function(){
	$("h1").fadeIn(1500,function(){
		$("#btns").fadeIn(1500);
	});
	$(".fa-bars").click(function(){
		if($("#menu").hasClass("hide")){
			$("#menu").slideDown().removeClass("hide");
		}else{
			$("#menu").slideUp().addClass("hide");
		}
	});

});