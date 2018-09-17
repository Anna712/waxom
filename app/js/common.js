$(function() {

	$('#nav-toggle').on('click', function() {
		$(this).toggleClass('active');
		$('.main-nav__list').slideToggle (300, function(){
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	});

	// $('.portfolio-categories__item a').click(function() {
	// 	$('.portfolio-categories__item').removeClass('selected');
	// 	$(this).parent('li').addClass('selected');
	
	// thisItem = $(this).data('category');
	// if(thisItem != 'all') {
	// 	$('.gallery-item[data-category='+thisItem+']').slideDown(1000);
	// 	$('.gallery-item[data-category!='+thisItem+']').slideUp(1000);
	// } else {
	// 	$('.gallery-item').slideDown(1000);
	// }
	// 	return false;
	// });

	//////sliders//////

	$('.header-slider__inner').slick({
		infinite: true,
		autoplay: true,
		speed: 1000,
  		slidesToShow: 1,
  		dots: true,
  		appendDots:$('.dots-wrapper'),
  		dotsClass: 'slick-dots light-dots',
  		nextArrow: $('.header-next'),
		prevArrow: $('.header-prev'),
		responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    }
    ],
	});

	$('.post-slider').slick({
		infinite: true,
		autoplay: true,
		speed: 1000,
  		slidesToShow: 3,
  		nextArrow: $('.post-next'),
		prevArrow: $('.post-prev'),
		responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    ]
  	});
 

	$('.clients-slider').slick({
		infinite: true,
		autoplay: true,
		speed: 1000,
  		slidesToShow: 4,
  		arrows: false,
  		responsive: [{
	  		breakpoint: 992,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		    breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		      }
		    },
		    {
		    breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		      }
		    },
		    ]
  	});

});