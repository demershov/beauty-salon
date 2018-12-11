$(function() {

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салон красоты S&Mitler">'
		},
		offCanvas: {
			position: false
		},
	});
	var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function(){
		$('.hamburger').addClass('is-active')
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	})

	$('.carousel-servises').on('initialized.owl.carousel', function() {
		setTimeout(function(){
			carouselServises();
		}, 100);
	})

	$('.carousel-servises').owlCarousel({
		// loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		},
		dots: false
	});

	$('.carousel-servises-content').equalHeights();

	function carouselServises() {
		$('.carousel-servises-item').each(function() {
			var ths = $(this),
					thsh = ths.find('.carousel-servises-content').outerHeight();
			ths.find('.carousel-servises-image').css('min-height', thsh);
		});
	};

	$('.carousel-servises-composition .h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	$('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	$('select').selectize({
		// create: true,
		
	});

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		autoHeight: true
	})

	$('form.callback').submit(function() {
		var th = $(this);
		$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
		setTimeout(function() {
			$(th).find('.success').removeClass('active').fadeOut();
			th.trigger('reset');
		}, 3000)
		return false;
	})

	// Ресайз окна
	function onResize() {
		$('.carousel-servises-content').equalHeights();
	}onResize();

	window.onresize = function() {
		// console.log(1)
		onResize();
	}
});
