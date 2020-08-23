$(document).ready(function () {
	
	// Слайдер в шапке //
	$('.header__bg').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
		initialSlide: 1,
		fade: true,
		responsive: [
			{
				breakpoint: 1251,
				settings: {
					arrows: false
				}
			}
		]
	});

	// Бургер меню //
	$('.menu__btn').on('click', function() {
		$('.menu').toggleClass('dropdown__menu');
		$(this).toggleClass('menu__btn_open');
	});
	$('nav.menu ul li a').on('click', function() {
		$('.menu').removeClass('dropdown__menu');
		$('.menu__btn').removeClass('menu__btn_open');
	});

	// Слайдер постов //
	$('.posts__recent').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: true,
	  autoplay: true,
	  prevArrow: '<button type="button" class="post-prev slick-prev">Previous</button>',
		nextArrow: '<button type="button" class="post-next slick-next">Next</button>',
		responsive: [
			{
				breakpoint: 961,
				settings: {
					slidesToShow: 1,
					arrows: false,
					fade: true
				}
			}
		]
	});

	// Табы //
	$('body').on('click','.tab-nav a',function(e){
		e.preventDefault();
		$('.tab-nav a').removeClass('tab_active');
		$(this).addClass('tab_active');
		var href = $(this).attr('href');
		$('.tab-pane').removeClass('tab_active').removeClass('tab_in');
		$(href).addClass('tab_active');
		setTimeout(function(){
			$(href).addClass('tab_in');
		}, 200);
	});


	// Анимация цифер //
	var show = true;
	var countbox = ".numbers__item_number";
	$(window).on("scroll load resize", function () {
			if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
			var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
			var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
			var w_height = $(window).height(); // Высота окна браузера
			var d_height = $(document).height(); // Высота всего документа
			var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
			if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
					$('.numbers__item_number').css('opacity', '1');
					$('.numbers__item_number').spincrement({
							thousandSeparator: "",
							duration: 3000
					});
					show = false;
			}
	});
});
