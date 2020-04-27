// Fade aways
$(window).scroll(function () {
	$("header").css("opacity", 1 - $(window).scrollTop() / 800);
	$(".scroll-downs").css("opacity", 1 - $(window).scrollTop() / 150);
	$("#intro").css("opacity", 1 - $(window).scrollTop() / 4000);
});

// Makes ATG expand on scroll
$(function() {
	var text = $(".hero-text");
	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
  
	  if (scroll >= 25) {
		text.removeClass("hidden");
	  } else {
		text.addClass("hidden");
	  }
	});
  });