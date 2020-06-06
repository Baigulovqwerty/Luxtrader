function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}else{
		document.querySelector('body').classList.add('no-webp');
	}	
});
let w = window.innerWidth;
let h = window.innerHeight;
let body = document.querySelector('body');
if ((w >= 320) && (w < 768)) {
	if (h > w) {
		body.classList.add('d1');
	} else {
		body.classList.add('d2');
	}
} else if ((w >= 768) && (w < 1024)) {
	if (h > w) {
		body.classList.add('f1');
	} else {
		body.classList.add('f2');
	}
} else if ((w >= 1024) && (w < 1200)) {
	if (h > w) {
		body.classList.add('g1');
	} else {
		body.classList.add('g2');
	}
} else if (w >= 1200) {
	if (h > w) {
		body.classList.add('h1');
	} else {
		body.classList.add('h2');
	}
}
//if (window.matchMedia("(hover: none)").matches)
let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function (e) {
	let user_menu = document.querySelector('.user-header__menu');
	user_menu.classList.toggle('_active');
});