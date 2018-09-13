$(function() {

	$('#nav-toggle').on('click', function() {
		$(this).toggleClass('active');
		$('.main-nav__list').slideToggle (300, function(){
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});

	//////sliders//////

	$('.header-slider__inner').slick({
		infinite: true,
		autoplay: true,
		speed: 1000,
  		slidesToShow: 1,
  		dots: true,
  		appendDots:$('.dots-wrapper'),
  		dotsClass: 'slick-dots light-dots',
  		nextArrow: $('.next'),
		prevArrow: $('.prev'),
		responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    }
    ],
	});

});