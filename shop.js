$(function(){
	$("#title").fadeIn(1500);
	$(".fa-bars").on("click",function(){
		$(".side-container").toggle();
	});
	$(".fa-shopping-cart").on("click",function(){
    $(".cart").toggle();
  });
	$(".fa-bars").click(function(){
    if($("#menu").hasClass("hide")){
      $("#menu").slideDown().removeClass("hide");
    }else{
      $("#menu").slideUp().addClass("hide");
    }
  });
	$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

});