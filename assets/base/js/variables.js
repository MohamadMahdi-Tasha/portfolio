// Made With Love By Mohamad Mahdi Tasha In Neovim
const header = document.getElementById('header');
const secondSectionsSwiperWrapper = document.getElementById('second-section-swiper-wrapper');	
const recentWorks = document.getElementById('recent-works');
const skeltonParentOfThirdSection = document.querySelectorAll('.skelton-parent-of-third-section');
const skeltonOfSecondSection = document.querySelectorAll('.skelton-of-second-section');	
const navToggle = document.getElementById('nav-toggler');
const nav = document.getElementById('nav');
const darkBgOfNav = document.getElementById('dark-bg-nav');
const isNavOpened = nav.getAttribute('data-opened');

const swiper = new Swiper('.defualt-swiper', {
	slidesPerView: 4,
	mousewheel: true,
	breakpoints: {
 	1: {slidesPerView: 1,},
	991: {slidesPerView: 4,},
  }
})
