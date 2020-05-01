// Fade aways
$(window).scroll(function () {
	$("header").css("opacity", 1 - $(window).scrollTop() / 800);
	$(".scroll-downs, .phrase").css("opacity", 1 - $(window).scrollTop() / 100);
	$("#intro").css("opacity", 1 - $(window).scrollTop() / 4000);
});

// Makes ATG expand on scroll
$(function () {
	var text = $(".hero-text");
	var disappear = $(".spaced");

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 25) {
			text.removeClass("hidden");
			disappear.hide();
		} else {
			text.addClass("hidden");
			disappear.show("slow");
		}
	});
});
