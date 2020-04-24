// Makes header section fade away
$(window).scroll(function () {
	$("header").css("opacity", 1 - $(window).scrollTop() / 700);
	$(".scroll-downs").css("opacity", 1 - $(window).scrollTop() / 150);
	$("#intro").css("opacity", 1 - $(window).scrollTop() / 2500);
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

// WILL NEED FOR LATER!!!
//   $(window).scroll(function() {
// 	if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
// 	  $('#myDivId').hide();
// 	}
// 	else {
// 	  $('#myDivId').show();
// 	}
//   });

// Counter for stats
var a = 0;
$(window).scroll(function () {
//change back to stats if not working?
	var oTop = $('#intro').offset().top - window.innerHeight;
	if (a == 0 && $(window).scrollTop() > oTop) {
		$('.counter').each(function () {
			var $this = $(this),
				countTo = $this.attr('data-count');
			$({
				countNum: $this.text()
			}).animate({
				countNum: countTo
			},
				{
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
						//alert('finished');
					}
				});
		});
		a = 1;
	}
});