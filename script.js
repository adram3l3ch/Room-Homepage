const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const heroImages = document.querySelectorAll(".slider-image");
const hamBurger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

let currentIndex = 0;

const slide = () => {
	if (currentIndex < 0) {
		currentIndex = heroImages.length - 1;
	}
	if (currentIndex > heroImages.length - 1) {
		currentIndex = 0;
	}
	heroImages.forEach((hero, index) => {
		if (index === currentIndex) {
			hero.classList.add("active");
			hero.classList.remove("next-image");
			hero.classList.remove("prev-image");
		} else if (
			index == currentIndex - 1 ||
			(currentIndex === 0 && index == heroImages.length - 1)
		) {
			hero.classList.remove("next-image");
			hero.classList.remove("active");
			hero.classList.add("prev-image");
		} else {
			hero.classList.remove("active");
			hero.classList.remove("prev-image");
			hero.classList.add("next-image");
		}
	});
};

const debounce = (func, timeout = 300) => {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
};

const processChangeRight = debounce(() => rightSlide());
const processChangeLeft = debounce(() => leftSlide());

const rightSlide = () => {
	currentIndex++;
	slide();
};
const leftSlide = () => {
	currentIndex--;
	slide();
};

rightBtn.addEventListener("click", processChangeRight);
leftBtn.addEventListener("click", processChangeLeft);

hamBurger.addEventListener("click", () => {
	sidebar.style.transform = "scale(1)";
	hamBurger.style.display = "none";
	close.style.display = "block";
});
close.addEventListener("click", () => {
	sidebar.style.transform = "scale(0)";
	hamBurger.style.display = "block";
	close.style.display = "none";
});
