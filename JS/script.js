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