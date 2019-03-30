$(function() {

	$(document).ready(function() {
		// $('.concierg-carousel').on('init',  function(event, slick){

		// var $dots = slick.$dots,
		// 	$currentSlide = $(slick.$slider.context)
		// 		.find('.slick-current'),

		// 	$currentButton = $currentSlide
		// 		.find('.concierg-button'),

		// 	$currentSlideOffset = $currentSlide.offset().top,
		// 	$currentButtonOffset = $currentButton.offset().top;


		// 	offsetSumm = $currentButtonOffset - $currentSlideOffset;


		// 	$dots.css('top', offsetSumm);

		// });

		var conciergSlider = $('.concierg-carousel').slick({
			arrows: false,
			dots: true,
			fade: true,
			appendDots: $('.concierge__append-dots'),
			// adaptiveHeight: true
		});

		$('.concierg-forward').click(function() {
			conciergSlider.slick('slickNext');
		});

		var $conciergSliderDots = $('.concierg-carousel .slick-dots');
		
		conciergSlider.on('afterChange',  function(event, slick, currentSlide, nextSlide){
			var $dots = slick.$dots,
				$currentSlide = $(slick.$slider.context)
					.find('.slick-current');

				console.log(currentSlide);
				 $currentSlide
					.find('.slick-dots')
					.find('li')
					.eq(currentSlide)
					.addClass('slick-active');
		});

		// conciergSlider.on('beforeChange',  function(event, slick, currentSlide, nextSlide){
		// 	slick.$dots.css('visibility', 'hidden');
		// });
	});

	

});
