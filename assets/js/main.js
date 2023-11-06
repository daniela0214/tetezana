$(document).ready(function () {
	// menu fixe et logo tow //
	function checkScroll() {
		var posScroll = $(document).scrollTop();

		if (posScroll > 0)
			$('body').addClass('sticky')
		else
			$('body').removeClass('sticky')

		if (posScroll > 160)
			$('.go-top').addClass('show')
		else
			$('.go-top').removeClass('show')
	}
	$(window).scroll(function () {
		checkScroll();
	});
	$(window).resize(function () {
		checkScroll();
	});
	checkScroll();
	// Go to Top
	$(function () {
		// Scroll Event
		$(window).on('scroll', function () {
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) $('.go-top').addClass('active');
			if (scrolled < 600) $('.go-top').removeClass('active');
		});
		// Click Even
	});

	$(".hamburger").click(function () {
		$(this).toggleClass("active");
		$('.navbar').slideToggle();
		$("body").toggleClass("overflow_hidden");
	});
	$(".navbar-ul li i").click(function () {
		$(this).toggleClass('active');
		$(".navbar-ul").find('.sub').slideUp();
		if ($(this).hasClass("active")) {
			$(".navbar-ul li i").removeClass('active');
			$(this).next().slideToggle();
			$(this).toggleClass('active');
		}
	});
	$(".toggleButton").click(function(){
		$(".services-grid .item .content").toggleClass('show');
	})

}(jQuery));