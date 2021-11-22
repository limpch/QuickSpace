/*BURGER MENU LOGIC*/
const burgerBlock = document.querySelector('.burger-block'),
burger = document.querySelector('.burger'),
navMenu = document.querySelector('.navmenu');
let isOpen = false;
function toggleActive() {
	document.querySelector('.burger').classList.toggle('active');
	document.querySelector('.navmenu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
	setTimeout(() => {isOpen = !isOpen}, 500)
}
burgerBlock.addEventListener("click", toggleActive);
document.addEventListener('click', (event) => {
	if (burger.classList.contains("active") && isOpen && event.target != navMenu) {
		toggleActive();
	}
});
/*=======================================================================================*/

/*SLIDER*/

$('.slider').slick({
	infinite: false,
	autoplay: false,
  	slidesToShow: 2,
  	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 967,
			settings: {
				autoplay: false,
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplaySpeed: 3000,
				arrows: false,
			}
		}
	]
});

/*=======================================================================================*/

/*RADIOBUTTON*/

const radioButton = document.querySelector('#radiobutton');
let isLeft = true;

function changeRadioButton () {
	radioButton.firstChild.classList.toggle('right');
	radioButton.firstChild.classList.toggle('left');
	isLeft = !isLeft;
}

radioButton.addEventListener('click', changeRadioButton);

/*=======================================================================================*/