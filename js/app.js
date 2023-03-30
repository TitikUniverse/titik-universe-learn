// -------- Scroll --------
window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

// -------- Form --------
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const inputs = form.querySelectorAll('input');
	inputs.forEach((input) => {
		input.classList.remove('text-field__input_valid');
		input.classList.remove('text-field__input_invalid');
		input.nextElementSibling.textContent = '';
		if (input.checkValidity()) {
			input.classList.add('text-field__input_valid');
			input.nextElementSibling.textContent = 'Отлично! Скоро я свяжусь с тобой 🤝';
		} else {
			input.classList.add('text-field__input_invalid');
			input.nextElementSibling.textContent = input.validationMessage;
		}
	});
});

// -------- Dropdown --------
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function toggleShowDropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
}

/* When the user clicks on the dropdown element */
function dropdownButtonTapHandler(item) {
	document.getElementById("myDropdownBtn").innerHTML = item
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}