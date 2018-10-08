const header = document.querySelector('header');
const container = document.querySelector('header .container');
const TIME_BETWEEN_IMAGES = 6000;
const TIME_IMAGE_TRANSITION = 1500;

const setBackgroundImageNumber = (imageNumber) => {
	header.style.backgroundImage = `url(/img/header-bg-${imageNumber}.jpg)`;
};
const fadeImage = () => { container.style.background = 'rgba(0, 0, 0, 1.0)'; };
const displayImage = () => { container.style.background = 'rgba(0, 0, 0, 0.0)'; };
const getRandomImageNumber = (exclude) => {
	let random = Math.floor(Math.random() * 5);

	while (random === exclude) { random = Math.floor(Math.random() * 5); }

	return random;
};

const changeImage = (imageNumber) => {
	setTimeout(() => {
		requestAnimationFrame(() => {
			setBackgroundImageNumber(imageNumber);
			displayImage();
			transitionToImage((imageNumber + 1) > 4 ? 0 : imageNumber + 1);//eslint-disable-line no-use-before-define, no-magic-numbers, max-len
		});
	}, TIME_IMAGE_TRANSITION);
};

const transitionToImage = (imageNumber) => {
	setTimeout(() => {
		requestAnimationFrame(() => {
			fadeImage();
			changeImage(imageNumber);
		});
	}, TIME_BETWEEN_IMAGES);
};

const init = () => {
	const firstImageNumber = getRandomImageNumber();

	setBackgroundImageNumber(firstImageNumber);
	transitionToImage(getRandomImageNumber(firstImageNumber));
};

init();
