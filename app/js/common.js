$(function() {

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}

	});


	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});


 	$('.icon-menu').on('click', function(event) {
		$('.close-menu').addClass('active');
		$('.main-nav__list').animate({ 
            top: '0px'
        }, 500); 
	});
 	 $('.close-menu').click(function() { 
 	 	$('.close-menu').removeClass('active');
        $('.main-nav__list').animate({ 
            top: '-500px' 
        }, 500);
    }); 


    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.main-nav__list a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.main-nav__list li a').removeClass("active");
            currLink.addClass("active");
        }
        
    });
}
 

var a = 0;
$(window).scroll(function() {

  var oTop = $('.counters').offset().top + 200 - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counters__number').each(function() {
      var $this = $(this),
        countTo = $this.text();
      $({
        countNum: 0
      }).animate({
          countNum: countTo
        },

        {

          duration: 5000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);

          }

        });
    });
    a = 1;
  }

});

	$('.portfolio-list__item a').click(function() {
		$('.portfolio-list__item').removeClass('active');
		$(this).parent('li').addClass('active');
		thisItem = $(this).data('category');
		$('.item.project').parent().removeClass('d-block d-none');
	if(thisItem != 'All') {
		$('.item.project[data-category='+thisItem+']').slideDown(1000).parent().addClass('d-block');
		$('.item.project[data-category!='+thisItem+']').slideUp(1000).parent().addClass('d-none');
	} else {
		$('.item.project').slideDown(1000).parent().addClass('d-block');
	}
		return false;
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
  		nextArrow: $('.header-next'),
		prevArrow: $('.header-prev'),
		responsive: [{
          breakpoint: 768,
          settings: {
            arrows: false,
        }
      }],
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
        }],
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

  $(window).on('load', function() {
  	$('.preloader').delay(1000).fadeOut('slow');
  });

});