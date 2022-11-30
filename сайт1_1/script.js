//для поддрерживания старых сайтов
'use strict'
//создание переменных для слайдера 1) обращение ко всему диву, к предыдущему и к следующиму элементу
let sliderBox = document.querySelector('.slider')
let slides = sliderBox.querySelectorAll('.slider-item')
let btnPrev = sliderBox.querySelector('.slider-btn--prev')
let btnNext = sliderBox.querySelector('.slider-btn--next')

//счетчик слайдов

let counter = 0;
//создаем функцию с проверкой и нахождением класса перехода к след. фотографии
btnNext.addEventListener('click', function(){
	slides[counter].classList.toggle('slider-item--current')
	counter++;
	if (counter >= slides.length) {
		counter = 0;
	}
	slides[counter].classList.toggle('slider-item--current')
})
//создаем функцию с проверкой и нахождением класса перехода к пред. фотографии
btnPrev.addEventListener('click', function(){
	slides[counter].classList.toggle('slider-item--current')
	counter--;
	if (counter < 0) {
		counter = slides.length - 1 ;
	}
	slides[counter].classList.toggle('slider-item--current')
})