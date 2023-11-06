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
	$(".item-1 .toggleButton").click(function(){
		$(".services-grid .item-1 .content").toggleClass('show');
	})
	$(".item-2 .toggleButton").click(function(){
		$(".services-grid .item-2 .content").toggleClass('show');
	})
	$(".item-3 .toggleButton").click(function(){
		$(".services-grid .item-3 .content").toggleClass('show');
	})
	$("[class^='item'] .toggleButton").click(function(){
		// Trouver le bouton cliqué
		var button = $(this);
	
		// Trouver le texte actuel du bouton
		var buttonText = button.text();
	
		// Basculer la classe 'show' sur le contenu
		button.parent().find('.content p').toggleClass('show');
	
		// Mettre à jour le texte du bouton en fonction de l'état
		if (buttonText === 'Read more') {
			button.text('Read less');
		} else {
			button.text('Read more');
		}
	});

}(jQuery));