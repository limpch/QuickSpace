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
const time = document.querySelectorAll('.time');
const cost = document.querySelectorAll('.costJS');

let isLeft = true;

function changeRadioButton () {
	radioButton.firstChild.classList.toggle('right');
	radioButton.firstChild.classList.toggle('left');
	isLeft = !isLeft;
	if (isLeft) {
		time.forEach(item => {
			item.innerHTML = 'Month';
		});
		cost.forEach(item => {
			let costin = item.innerHTML;
			if (costin != 0) {
				let costin2 = costin / 12 + 5;
				item.innerHTML = costin2.toString();
			}
		});
	} else if(!isLeft) {
		time.forEach(item => {
			item.innerHTML = 'Year';
		});
		cost.forEach(item => {
			let costin = item.innerHTML;
			if (costin != 0) {
				let costin2 = (costin - 5) * 12;
				item.innerHTML = costin2.toString();
			}
		});
	}

}

radioButton.addEventListener('click', changeRadioButton);

/*=======================================================================================*/


/*BUTTON GO UP*/

const btnGoUp = document.querySelector('.go-up');

btnGoUp.addEventListener('click', () => {
	if(btnGoUp.classList.contains('active')) {
		document.querySelector('.header').scrollIntoView( {
			behavior: 'smooth',
			block: 'start'
		});
	}
});

window.addEventListener('scroll', () => {
	if(window.scrollY > 800) {
		btnGoUp.classList.add('active');
	} else {
		btnGoUp.preventDefault;
		btnGoUp.classList.remove('active');
	}
});

/*=======================================================================================*/