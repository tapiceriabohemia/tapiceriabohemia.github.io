/* eslint-disable */

const header = document.querySelector('header');
const container = document.querySelector('header .container');

const toImage = (imageNumber) => {
	setTimeout(() => {
		requestAnimationFrame(() => {
			container.style.background = 'rgba(0, 0, 0, 1.0)';
			setTimeout(() => {
				requestAnimationFrame(() => {
					container.style.background = 'rgba(0, 0, 0, 0.8)';
					header.style.backgroundImage = `url(/img/header-bg-${imageNumber}.jpg)`;
					container.style.background = 'rgba(0, 0, 0, 0.0)';
					toImage((imageNumber + 1) > 4 ? 0 : imageNumber + 1);
				});
			}, 1500);
		});
	}, 6000);
};

toImage(1);
