// ! ==================== swiper ==================== 

const swiper = new Swiper('.swiper', {
	// ===== Optional parameters =====
	direction: 'horizontal',
	loop: true,
	speed: 400,
	spaceBetween: 100,
	effect: 'slider', // slider - за замовч., cards, coverflow, flip, fade, cube

	// ===== Pagination =====
	pagination: {
		el: '.my-swiper-pagination',
		type: 'fraction',  // fraction, bullets, progressbar, custom
		renderFraction: function (currentClass, totalClass) {
			return '<span class="' + currentClass + '"></span>' +
				' / ' +
				'<span class="' + totalClass + '"></span>';
		}
	},

	// ===== Navigation arrows =====
	navigation: {
		nextEl: '.my-button-next',
		prevEl: '.my-button-prev',
		// nextEl: '.swiper-button-next',
		// prevEl: '.swiper-button-prev',

	},

});

