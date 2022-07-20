//A Function That Loops Through Numbers And Characters And Returns Random Hex Color
function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';

	for (var i = 0; i < 6; i++) {color += letters[Math.floor(Math.random() * 16)];}
	return color;
}

// Fetching Api Of Github For Second Section Projects
fetch('https://api.github.com/users/MohamadMahdi-Tasha/repos?sort=date')
	.then(result => result.json())
	.then(result => {
		// Removes Keletons Of It
		skeltonOfSecondSection.forEach(item => item.remove());
		result.forEach(item => {
			// Creates Elements
			const swiperSlide = document.createElement('a');
			const titleOfSlide = document.createElement('h3');

			//Adding Attrs Of Created Elements
		
			swiperSlide.className = 'swiper-slide p-4 d-flex align-items-center justify-content-center text-white transition';
			swiperSlide.style.backgroundColor = getRandomColor();
			swiperSlide.href = `https://github.com/MohamadMahdi-Tasha/${item.name}`;
			swiperSlide.target = '_blank';
			titleOfSlide.textContent = item.name;

			// Appending Them To Swiper Wrapper In Second Section
			swiperSlide.appendChild(titleOfSlide);
			secondSectionsSwiperWrapper.appendChild(swiperSlide);
	
		})	
	})
