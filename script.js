var countDownDate = new Date("Aug 09, 2025 13:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        document.getElementById("days").innerHTML = 0;
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("minutes").innerHTML = 0;
        document.getElementById("seconds").innerHTML = 0;

        // Számolja ki az eltelt időt az eredeti időpont és a jelenlegi idő között
        var elapsedTime = now - countDownDate;
        
        var elapsedDays = Math.floor(Math.abs(elapsedTime) / (1000 * 60 * 60 * 24));
        var elapsedHours = Math.floor((Math.abs(elapsedTime) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var elapsedMinutes = Math.floor((Math.abs(elapsedTime) % (1000 * 60 * 60)) / (1000 * 60));
        var elapsedSeconds = Math.floor((Math.abs(elapsedTime) % (1000 * 60)) / 1000);

        // Kiírja az eltelt időt
        document.getElementById("days").innerHTML = elapsedDays;
        document.getElementById("hours").innerHTML = elapsedHours;
        document.getElementById("minutes").innerHTML = elapsedMinutes;
        document.getElementById("seconds").innerHTML = elapsedSeconds;
    }

}, 1000);

document.addEventListener('DOMContentLoaded', function () {
var hamburgerButton = document.getElementById('hamburgerButton');
var navLinks = document.querySelector('.nav-container .links');
var linkClose1 = document.getElementById('linkClose1');
var linkClose2 = document.getElementById('linkClose2');
var linkClose3 = document.getElementById('linkClose3');
var linkClose4 = document.getElementById('linkClose4');

hamburgerButton.addEventListener('click', function () {
    // Toggle the visibility of the navigation links with animation
    if (navLinks.style.display === 'none' || navLinks.style.display === '') {
        navLinks.style.animation = 'slideDown 0.5s ease-in-out';
        navLinks.style.display = 'flex';
        //ide kerül a kinézete
        navLinks.style.height = '40vh';
        navLinks.style.position = 'fixed';
        navLinks.style.top = '0';
        navLinks.style.right = '0';
        navLinks.style.left = '0';
        navLinks.style.flexDirection = 'column';
        navLinks.style.justifyContent = 'center';
        navLinks.style.alignItems = 'center';
        navLinks.style.backgroundImage = 'linear-gradient(rgba(251, 197, 184, 1), rgba(251, 197, 184, 0))';
        //
        hamburgerButton.style.display = 'none';
    } else {
        navLinks.style.animation = 'slideUp 0.5s ease-in-out';
        setTimeout(() => {
            navLinks.style.display = 'none';
        }, 500);
    }
});

function closeMenu() {
    var isMobileDevice = window.matchMedia("(max-width: 1023px)").matches;
    if (isMobileDevice){
        navLinks.style.animation = 'slideUp 0.5s ease-in-out';
        hamburgerButton.style.display = 'inline';
        setTimeout(() => {
            navLinks.style.display = 'none';
        }, 500);
    }
}

linkClose1.addEventListener('click', closeMenu);
linkClose2.addEventListener('click', closeMenu);
linkClose3.addEventListener('click', closeMenu);
linkClose4.addEventListener('click', closeMenu);
linkClose5.addEventListener('click', closeMenu);
linkClose6.addEventListener('click', closeMenu);

document.addEventListener('click', function (event) {
var isClickInside = navLinks.contains(event.target) || hamburgerButton.contains(event.target);
// Checking if the device is a mobile device
var isMobileDevice = window.matchMedia("(max-width: 767px)").matches;
if (!isClickInside && isMobileDevice) {
    navLinks.style.animation = 'slideUp 0.5s ease-in-out';
    hamburgerButton.style.display = 'inline';
    setTimeout(() => {
        navLinks.style.display = 'none';
    }, 500);
}
});

});

//slider javascript valami

const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;
let autoSlideInterval;

// Funkció a következő képre váltáshoz
function showNextSlide() {
    //console.log(slides[currentIndex]);
    slides[currentIndex].classList.remove('active');
    //console.log(slides);
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

// Funkció az előző képre váltáshoz
function showPrevSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
}

// Automatikus képváltás elindítása
function startAutoSlide() {
    autoSlideInterval = setInterval(showNextSlide, 5000);
}

// Automatikus képváltás leállítása
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Eseményfigyelők a gombokhoz
nextButton.addEventListener('click', () => {
    stopAutoSlide();
    showNextSlide();
    startAutoSlide();
});

prevButton.addEventListener('click', () => {
    stopAutoSlide();
    showPrevSlide();
    startAutoSlide();
});

// Automatikus indítás
startAutoSlide();





//Kezdetek:

document.addEventListener('DOMContentLoaded', () => {
    const rightBubbleContainer = document.querySelector('.bubble-container.right-bubbles');
    const leftBubbleContainer = document.querySelector('.bubble-container.left-bubbles');
    const headerUs = document.querySelectorAll('.headerUs');
    const leftHeader = document.getElementById("leftHead");
    const rightHeader = document.getElementById("rightHead");
    const screenWidth = window.innerWidth;
    const usSection = document.querySelector('#us');

    const rightBubbles = [
        { id: 1, size: 120, img: 'assets/images/AboutUs/Tomi/1.jpg', top: 20, left: 20,     focusX: 0, focusY: 20, focusLapX: 0, focusLapY: 0 },
        { id: 2, size: 85, img: 'assets/images/AboutUs/Tomi/2.jpg', top: 5, left: 140,      focusX: 40, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 3, size: 150, img: 'assets/images/AboutUs/Tomi/3.jpg', top: 95, left: 120,     focusX: 40, focusY: 0, focusLapX: 30, focusLapY: 0  },
        { id: 4, size: 80, img: 'assets/images/AboutUs/Tomi/4.jpg', top: 10, left: 230,     focusX: 40, focusY: 20, focusLapX: 50, focusLapY: 0   },
        { id: 5, size: 140, img: 'assets/images/AboutUs/Tomi/5.jpg', top: 70, left: 270,    focusX: 40, focusY: 60, focusLapX: 25, focusLapY: 0   },
        { id: 6, size: 100, img: 'assets/images/AboutUs/Tomi/6.jpg', top: 8, left: 440,     focusX: 0, focusY: 60, focusLapX: 20, focusLapY: 0   },
        { id: 7, size: 60, img: 'assets/images/AboutUs/Tomi/7.jpg', top: 2, left: 540,        focusX: 0, focusY: 20, focusLapX: 0, focusLapY: 30   },//ezt
        { id: 8, size: 70, img: 'assets/images/AboutUs/Tomi/8.jpg', top: 110, left: 415,    focusX: 0, focusY: 0, focusLapX: 20, focusLapY: 0   },
        { id: 9, size: 70, img: 'assets/images/AboutUs/Tomi/9.jpg', top: 170, left: 475,      focusX: 60, focusY: 0, focusLapX: 0, focusLapY: 30   },//ezt
        { id: 10, size: 60, img: 'assets/images/AboutUs/Tomi/10.jpg', top: 105, left: 490,     focusX: 0, focusY: 0, focusLapX: 20, focusLapY: 0   },
        { id: 11, size: 190, img: 'assets/images/AboutUs/Tomi/11.jpg', top: 45, left: 555,   focusX: 60, focusY: 60, focusLapX: 30, focusLapY: 0   },
        { id: 12, size: 110, img: 'assets/images/AboutUs/Tomi/12.jpg', top: 155, left: 5,    focusX: 50, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 13, size: 70, img: 'assets/images/AboutUs/Tomi/13.jpg', top: 265, left: 0,       focusX: 60, focusY: 0, focusLapX: 20, focusLapY: 0   },
        { id: 14, size: 70, img: 'assets/images/AboutUs/Tomi/14.jpg', top: 260, left: 75,      focusX: 60, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 15, size: 80, img: 'assets/images/AboutUs/Tomi/15.jpg', top: 250, left: 150,   focusX: 60, focusY: 30, focusLapX: 40, focusLapY: 0   },
        { id: 16, size: 170, img: 'assets/images/AboutUs/Tomi/16.jpg', top: 235, left: 235, focusX: 60, focusY: 60, focusLapX: 50, focusLapY: 0   },
        { id: 17, size: 90, img: 'assets/images/AboutUs/Tomi/17.jpg', top: 200, left: 390,  focusX: 60, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 18, size: 100, img: 'assets/images/AboutUs/Tomi/18.jpg', top: 295, left: 410, focusX: 90, focusY: 60, focusLapX: 50, focusLapY: 0   },
        { id: 19, size: 110, img: 'assets/images/AboutUs/Tomi/19.jpg', top: 230, left: 500, focusX: 40, focusY: 60, focusLapX: 30, focusLapY: 0   },
        { id: 20, size: 90, img: 'assets/images/AboutUs/Tomi/20.jpg', top: 320, left: 580,  focusX: 40, focusY: 20, focusLapX: 0, focusLapY: 20   },//ezt
        { id: 21, size: 100, img: 'assets/images/AboutUs/Tomi/21.jpg', top: 235, left: 640, focusX: 0, focusY: 60, focusLapX: 20, focusLapY: 0   },
        { id: 22, size: 80, img: 'assets/images/AboutUs/Tomi/22.jpg', top: 340, left: 675,  focusX: 40, focusY: 60, focusLapX: 30, focusLapY: 0   },
        { id: 23, size: 70, img: 'assets/images/AboutUs/Tomi/23.jpg', top: 335, left: 25,   focusX: 40, focusY: 60, focusLapX: 40, focusLapY: 0   },
        { id: 24, size: 85, img: 'assets/images/AboutUs/Tomi/24.jpg', top: 410, left: 0,    focusX: 80, focusY: 60, focusLapX: 70, focusLapY: 0   },
        { id: 25, size: 170, img: 'assets/images/AboutUs/Tomi/25.jpg', top: 340, left: 90,  focusX: 40, focusY: 60, focusLapX: 40, focusLapY: 0   },
        { id: 26, size: 140, img: 'assets/images/AboutUs/Tomi/26.jpg', top: 410, left: 260, focusX: 0, focusY: 60, focusLapX: 0, focusLapY: 0   },
        { id: 27, size: 90, img: 'assets/images/AboutUs/Tomi/27.jpg', top: 400, left: 400,  focusX: 40, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 28, size: 130, img: 'assets/images/AboutUs/Tomi/28.jpg', top: 460, left: 470, focusX: 80, focusY: 60, focusLapX: 60, focusLapY: 0   },
        { id: 29, size: 90, img: 'assets/images/AboutUs/Tomi/29.jpg', top: 365, left: 495,  focusX: 60, focusY: 0, focusLapX: 60, focusLapY: 0   },
        { id: 30, size: 120, img: 'assets/images/AboutUs/Tomi/30.jpg', top: 415, left: 595, focusX: 40, focusY: 60, focusLapX: 40, focusLapY: 0   },
        { id: 31, size: 80, img: 'assets/images/AboutUs/Tomi/31.jpg', top: 500, left: 0,    focusX: 40, focusY: 100, focusLapX: 50, focusLapY: 10   },//ezt
        { id: 32, size: 90, img: 'assets/images/AboutUs/Tomi/32.jpg', top: 510, left: 85,      focusX: 40, focusY: 60, focusLapX: 45, focusLapY: 0   },
        { id: 33, size: 90, img: 'assets/images/AboutUs/Tomi/33.jpg', top: 585, left: 5,       focusX: 40, focusY: 60, focusLapX: 50, focusLapY: 0   },
        { id: 34, size: 60, img: 'assets/images/AboutUs/Tomi/34.jpg', top: 605, left: 100, focusX: 40, focusY: 60, focusLapX: 40, focusLapY: 0   },
        { id: 35, size: 110, img: 'assets/images/AboutUs/Tomi/35.jpg', top: 510, left: 180, focusX: 40, focusY: 60, focusLapX: 50, focusLapY: 0   },
        { id: 36, size: 140, img: 'assets/images/AboutUs/Tomi/36.jpg', top: 560, left: 280, focusX: 40, focusY: 60, focusLapX: 30, focusLapY: 0   },
        { id: 37, size: 80, img: 'assets/images/AboutUs/Tomi/37.jpg', top: 500, left: 385, focusX: 40, focusY: 60, focusLapX: 50, focusLapY: 0   },
        { id: 38, size: 190, img: 'assets/images/AboutUs/Tomi/38.jpg', top: 595, left: 415, focusX: 40, focusY: 60, focusLapX: 20, focusLapY: 0   },
        { id: 39, size: 150, img: 'assets/images/AboutUs/Tomi/39.jpg', top: 540, left: 590, focusX: 40, focusY: 60, focusLapX: 50, focusLapY: 0   },
        { id: 40, size: 80, img: 'assets/images/AboutUs/Tomi/40.jpg', top: 700, left: 600, focusX: 40, focusY: 60, focusLapX: 30, focusLapY: 0   },
        { id: 41, size: 60, img: 'assets/images/AboutUs/Tomi/41.jpg', top: 685, left: 685, focusX: 40, focusY: 60, focusLapX: 30, focusLapY: 0   },
        { id: 42, size: 110, img: 'assets/images/AboutUs/Tomi/42.jpg', top: 680, left: 0, focusX: 40, focusY: 60, focusLapX: 50, focusLapY: 0   },
        { id: 43, size: 200, img: 'assets/images/AboutUs/Tomi/43.jpg', top: 640, left: 115, focusX: 40, focusY: 60, focusLapX: 40, focusLapY: 0   },
        { id: 44, size: 80, img: 'assets/images/AboutUs/Tomi/44.jpg', top: 705, left: 320, focusX: 80, focusY: 60, focusLapX: 55, focusLapY: 0   },
        { id: 45, size: 120, img: 'assets/images/AboutUs/Tomi/45.jpg', top: 790, left: 35, focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },        
        { id: 46, size: 60, img: 'assets/images/AboutUs/Tomi/46.jpg', top: 840, left: 155, focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 47, size: 70, img: 'assets/images/AboutUs/Tomi/47.jpeg', top: 830, left: 240, focusX: 40, focusY: 60, focusLapX: 0, focusLapY: 0   },
        { id: 48, size: 70, img: 'assets/images/AboutUs/Tomi/48.jpg', top: 790, left: 305, focusX: 40, focusY: 60, focusLapX: 0, focusLapY: 0   },
        { id: 49, size: 90, img: 'assets/images/AboutUs/Tomi/49.jpeg', top: 760, left: 380, focusX: 75, focusY: 60, focusLapX: 60, focusLapY: 0   },
        { id: 50, size: 110, img: 'assets/images/AboutUs/Tomi/50.jpg', top: 790, left: 470, focusX: 80, focusY: 60, focusLapX: 60, focusLapY: 0   },
        { id: 51, size: 125, img: 'assets/images/AboutUs/Tomi/51.jpg', top: 785, left: 590, focusX: 40, focusY: 10, focusLapX: 0, focusLapY: 10   }
        
    ];

    const leftBubbles = [
        { id: 52, size: 120,    img: 'assets/images/AboutUs/Viki/1.jpg', top: 20, left: 20,     focusX: 0, focusY: 0, focusLapX: 20, focusLapY: 20 },
        { id: 53, size: 85,     img: 'assets/images/AboutUs/Viki/2.jpg', top: 5, left: 140,     focusX: 0, focusY: 0, focusLapX: 40, focusLapY: 0   },
        { id: 54, size: 150,    img: 'assets/images/AboutUs/Viki/3.jpg', top: 95, left: 120,    focusX: 10, focusY: 0, focusLapX: 40, focusLapY: 0  },
        { id: 55, size: 80,     img: 'assets/images/AboutUs/Viki/4.jpg', top: 10, left: 230,    focusX: 0, focusY: 0, focusLapX: 40, focusLapY: 0   },
        { id: 56, size: 140,    img: 'assets/images/AboutUs/Viki/5.jpg', top: 70, left: 270,    focusX: 20, focusY: 0, focusLapX: 30, focusLapY: 0   },
        { id: 57, size: 90,    img: 'assets/images/AboutUs/Viki/6.jpg', top: 8, left: 465,      focusX: 20, focusY: 0, focusLapX: 40, focusLapY: 0   },
        { id: 58, size: 60,     img: 'assets/images/AboutUs/Viki/7.jpg', top: 2, left: 555,     focusX: 40, focusY: 0, focusLapX: 40, focusLapY: 0   },
        { id: 59, size: 70,     img: 'assets/images/AboutUs/Viki/8.jpg', top: 110, left: 415,   focusX: 0, focusY: 0, focusLapX: 15, focusLapY: 0   },
        { id: 60, size: 70,     img: 'assets/images/AboutUs/Viki/9.jpg', top: 170, left: 475,   focusX: 0, focusY: 0, focusLapX: 30, focusLapY: 0   },
        { id: 61, size: 60,     img: 'assets/images/AboutUs/Viki/10.jpg', top: 105, left: 490,  focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 62, size: 190,    img: 'assets/images/AboutUs/Viki/11.jpg', top: 45, left: 555,   focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 10   },//ezt
        { id: 63, size: 110,    img: 'assets/images/AboutUs/Viki/12.jpg', top: 155, left: 5,    focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 64, size: 70,     img: 'assets/images/AboutUs/Viki/13.jpg', top: 265, left: 2,    focusX: 20, focusY: 0, focusLapX: 30, focusLapY: 0   },
        { id: 65, size: 70,     img: 'assets/images/AboutUs/Viki/14.jpg', top: 260, left: 75,   focusX: 0, focusY: 0, focusLapX: 10, focusLapY: 0   },
        { id: 66, size: 80,     img: 'assets/images/AboutUs/Viki/15.jpg', top: 250, left: 150,  focusX: 40, focusY: 0, focusLapX: 40, focusLapY: 0   },
        { id: 67, size: 170,    img: 'assets/images/AboutUs/Viki/16.jpg', top: 235, left: 235,  focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 68, size: 90,     img: 'assets/images/AboutUs/Viki/17.jpg', top: 200, left: 390,  focusX: 10, focusY: 0, focusLapX: 30, focusLapY: 0   },
        { id: 69, size: 100,    img: 'assets/images/AboutUs/Viki/18.jpg', top: 295, left: 410,  focusX: 50, focusY: 0, focusLapX: 60, focusLapY: 0   },
        { id: 70, size: 110,    img: 'assets/images/AboutUs/Viki/19.jpg', top: 230, left: 500,  focusX: 40, focusY: 0, focusLapX: 40, focusLapY: 0   },
        { id: 71, size: 90,     img: 'assets/images/AboutUs/Viki/20.jpg', top: 320, left: 580,  focusX: 10, focusY: 0, focusLapX: 20, focusLapY: 0   },//
        { id: 72, size: 100,    img: 'assets/images/AboutUs/Viki/21.jpg', top: 235, left: 640,  focusX: 20, focusY: 0, focusLapX: 40, focusLapY: 0   },
        { id: 73, size: 80,     img: 'assets/images/AboutUs/Viki/22.jpg', top: 340, left: 675,  focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 74, size: 70,     img: 'assets/images/AboutUs/Viki/23.jpg', top: 335, left: 25,   focusX: 60, focusY: 0, focusLapX: 80, focusLapY: 0   },
        { id: 75, size: 85,     img: 'assets/images/AboutUs/Viki/24.jpg', top: 410, left: 3,    focusX: 50, focusY: 0, focusLapX: 50, focusLapY: 0   },
        { id: 76, size: 170,    img: 'assets/images/AboutUs/Viki/25.jpg', top: 340, left: 90,   focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 77, size: 140,    img: 'assets/images/AboutUs/Viki/26.jpg', top: 410, left: 260,  focusX: 100, focusY: 0, focusLapX: 50, focusLapY: 0   },
        { id: 78, size: 90,     img: 'assets/images/AboutUs/Viki/27.jpg', top: 400, left: 400,  focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 79, size: 130,    img: 'assets/images/AboutUs/Viki/28.jpg', top: 460, left: 470,  focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 80, size: 90,     img: 'assets/images/AboutUs/Viki/29.jpg', top: 365, left: 495,  focusX: 10, focusY: 0, focusLapX: 20, focusLapY: 0   },
        { id: 81, size: 120,    img: 'assets/images/AboutUs/Viki/30.jpg', top: 415, left: 595,  focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 82, size: 80,     img: 'assets/images/AboutUs/Viki/31.jpg', top: 500, left: 2,    focusX: 0, focusY: 0, focusLapX: 20, focusLapY: 0   },
        { id: 83, size: 90,     img: 'assets/images/AboutUs/Viki/32.jpg', top: 510, left: 85,   focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 84, size: 90,     img: 'assets/images/AboutUs/Viki/33.jpg', top: 585, left: 5,    focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 85, size: 60,     img: 'assets/images/AboutUs/Viki/34.jpg', top: 605, left: 100,  focusX: 100, focusY: 0, focusLapX: 80, focusLapY: 0   },
        { id: 86, size: 110,    img: 'assets/images/AboutUs/Viki/35.jpg', top: 510, left: 180,  focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 87, size: 140,    img: 'assets/images/AboutUs/Viki/36.jpg', top: 560, left: 280,  focusX: 100, focusY: 0, focusLapX: 100, focusLapY: 0   },
        { id: 88, size: 80,     img: 'assets/images/AboutUs/Viki/37.jpg', top: 500, left: 385,  focusX: 50, focusY: 0, focusLapX: 50, focusLapY: 0   },
        { id: 89, size: 190,    img: 'assets/images/AboutUs/Viki/38.jpg', top: 595, left: 415,  focusX: 0, focusY: 30, focusLapX: 0, focusLapY: 20   },//ezt
        { id: 90, size: 150,    img: 'assets/images/AboutUs/Viki/39.jpg', top: 540, left: 590,  focusX: 50, focusY: 0, focusLapX: 40, focusLapY: 0   },
        { id: 91, size: 80,     img: 'assets/images/AboutUs/Viki/40.jpg', top: 700, left: 600,  focusX: 0, focusY: 65, focusLapX: 0, focusLapY: 0   },
        { id: 92, size: 60,     img: 'assets/images/AboutUs/Viki/41.jpg', top: 685, left: 685,  focusX: 45, focusY: 0, focusLapX: 30, focusLapY: 0   },
        { id: 93, size: 110,    img: 'assets/images/AboutUs/Viki/42.jpg', top: 680, left: 4,    focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 94, size: 200,    img: 'assets/images/AboutUs/Viki/43.jpg', top: 640, left: 115,  focusX: 40, focusY: 0, focusLapX: 40, focusLapY: 0   },
        { id: 95, size: 80,     img: 'assets/images/AboutUs/Viki/44.jpg', top: 705, left: 320,  focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 96, size: 120,    img: 'assets/images/AboutUs/Viki/45.jpg', top: 790, left: 35,   focusX: 0, focusY: 60, focusLapX: 0, focusLapY: 0   },        
        { id: 97, size: 60,     img: 'assets/images/AboutUs/Viki/46.jpg', top: 840, left: 155,  focusX: 20, focusY: 0, focusLapX: 20, focusLapY: 0   },
        { id: 98, size: 70,     img: 'assets/images/AboutUs/Viki/47.jpg', top: 830, left: 240,  focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 99, size: 70,     img: 'assets/images/AboutUs/Viki/48.jpg', top: 790, left: 305,  focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 100, size: 90,    img: 'assets/images/AboutUs/Viki/49.jpg', top: 760, left: 380,  focusX: 0, focusY: 0, focusLapX: 0, focusLapY: 0   },
        { id: 101, size: 110,   img: 'assets/images/AboutUs/Viki/50.jpg', top: 790, left: 470,  focusX: 0, focusY: 20, focusLapX: 0, focusLapY: 0   },
        { id: 102, size: 125,    img: 'assets/images/AboutUs/Viki/51.jpg', top: 785, left: 590, focusX: 0, focusY: 10, focusLapX: 0, focusLapY: 10   }
    ];

    if (screenWidth < 1350) {
        if (screenWidth < 767){
            //teló
            usSection.style.flexDirection = "column";
            usSection.style.justifyContent = "space-around";
            rightBubbleContainer.style.height = "40vh";
            rightBubbleContainer.style.width = "100vw";
            leftBubbleContainer.style.height = "40vh";
            leftBubbleContainer.style.width = "100vw";
        }
        else{
            //laptop
            usSection.style.flexDirection = "row";
            usSection.style.justifyContent = "space-around";
            rightBubbleContainer.style.height = "100vh";
            rightBubbleContainer.style.width = "40vw";
            leftBubbleContainer.style.height = "100vh";
            leftBubbleContainer.style.width = "40vw";
        }
        headerUs.forEach((headerUs) => {
            headerUs.style.display = "none";
        });


        let rightCurrentIndex = 0;
        let leftCurrentIndex = 0;
    
        // Create img elements for both containers
        const rightImageElement = document.createElement('div');
    rightImageElement.style.width = '100%';
    rightImageElement.style.height = '100%';
    rightImageElement.style.backgroundSize = 'cover';
    rightImageElement.style.backgroundPosition = 'center';
    rightBubbleContainer.appendChild(rightImageElement);

    const leftImageElement = document.createElement('div');
    leftImageElement.style.width = '100%';
    leftImageElement.style.height = '100%';
    leftImageElement.style.backgroundSize = 'cover';
    leftImageElement.style.backgroundPosition = 'center';
    leftBubbleContainer.appendChild(leftImageElement);

    // Function to update the right image
    const updateRightImage = () => {
        const currentRightBubble = rightBubbles[rightCurrentIndex];
        rightImageElement.style.backgroundImage = `url('${currentRightBubble.img}')`;
        rightImageElement.style.backgroundPosition = `${currentRightBubble.focusLapX}% ${currentRightBubble.focusLapY}%`;
        rightCurrentIndex = (rightCurrentIndex + 1) % rightBubbles.length;
    };

    // Function to update the left image
    const updateLeftImage = () => {
        const currentLeftBubble = leftBubbles[leftCurrentIndex];
        leftImageElement.style.backgroundImage = `url('${currentLeftBubble.img}')`;
        leftImageElement.style.backgroundPosition = `${currentLeftBubble.focusLapX}% ${currentLeftBubble.focusLapY}%`;
        leftCurrentIndex = (leftCurrentIndex + 1) % leftBubbles.length;
    };

    
        // Initial image load
        updateRightImage();
        updateLeftImage();

        // Globális függvény a képek frissítéséhez
        window.updateImages = () => {
            updateRightImage();
            updateLeftImage();
            console.log("Index: " + rightCurrentIndex);
        };
    
        // Change images every 2 seconds
        setInterval(() => {
            updateRightImage();
            updateLeftImage();
        }, 3000);

    } else {
        const getScreenMultiplier = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1920) return 1;
            else if (screenWidth >= 1820 && screenWidth < 1920) return 0.98;
            else if (screenWidth >= 1720 && screenWidth < 1820) return 0.93;
            else if (screenWidth >= 1620 && screenWidth < 1720) return 0.88;
            else if (screenWidth >= 1520 && screenWidth < 1620) return 0.82;
            else if (screenWidth >= 1420 && screenWidth < 1520) return 0.77;
            else if (screenWidth >= 1320 && screenWidth < 1420) return 0.71;
            else if (screenWidth >= 1220 && screenWidth < 1320) return 0.66;
            else if (screenWidth >= 1120 && screenWidth < 1220) return 0.61;
            else if (screenWidth >= 1020 && screenWidth < 1120) return 0.53;
            return 0.50; // Default for smaller screens
        };
    
    
        const multiplier = getScreenMultiplier();
    
        leftHeader.style.left = 315 * multiplier;
        leftHeader.style.fontSize = 40 * multiplier;
        rightHeader.style.left = 315 * multiplier;
        rightHeader.style.fontSize = 40 * multiplier;
    
        const createBubbles = (container, bubbles) => {
            const multiplier = getScreenMultiplier();
            bubbles.forEach((bubble) => {
                const bubbleElement = document.createElement('div');
                bubbleElement.classList.add('bubble');
                bubbleElement.style.width = `${bubble.size * multiplier}px`;
                bubbleElement.style.height = `${bubble.size * multiplier}px`;
                bubbleElement.style.background = `url(${bubble.img}) no-repeat center/cover`;
                bubbleElement.style.backgroundPosition = `${bubble.focusX}% ${bubble.focusY}%`;
                bubbleElement.style.top = `${bubble.top * multiplier}px`;
                bubbleElement.style.left = `${bubble.left * multiplier}px`;
                bubbleElement.style.position = 'absolute';
    
                container.appendChild(bubbleElement);
            });
        };
    
        createBubbles(rightBubbleContainer, rightBubbles);
        createBubbles(leftBubbleContainer, leftBubbles);
    
        // Define fixed center positions
        
        const usSectionHeight = usSection.offsetHeight;
        const verticalCenter = (usSectionHeight / 2) - 160;
    
        const rightCenter = { x: 0, y: verticalCenter };
        const leftContainerWidth = leftBubbleContainer.offsetWidth;
        const leftCenter = { x: leftContainerWidth - 400, y: verticalCenter }; // Updated to align the bubble's right edge with the container's right edge
    
        const highlightBubble = (bubble, centerPosition) => {
            bubble.style.transition = 'all 1s ease-in-out';
            bubble.style.left = `${centerPosition.x}px`;
            bubble.style.top = `${centerPosition.y - bubble.offsetHeight / 2}px`;
            bubble.style.width = '400px';
            bubble.style.height = '400px';
            bubble.style.zIndex = 10;
        };
    
        const resetBubble = (bubble, originalBubbleData) => {
            const multiplier = getScreenMultiplier();
            bubble.style.transition = ''; // Remove animation
            bubble.style.width = `${originalBubbleData.size * multiplier}px`;
            bubble.style.height = `${originalBubbleData.size * multiplier}px`;
            bubble.style.zIndex = 1;
            bubble.style.top = `${originalBubbleData.top * multiplier}px`;
            bubble.style.left = `${originalBubbleData.left * multiplier}px`;
        };
    
        const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
        let currentIndexRight = 0;
        let currentIndexLeft = 0;
        let previousIndexRight = null;
        let previousIndexLeft = null;
    
        setInterval(async () => {
            const allRightBubbles = document.querySelectorAll('.bubble-container.right-bubbles .bubble');
            const allLeftBubbles = document.querySelectorAll('.bubble-container.left-bubbles .bubble');
    
            // Reset previous bubbles
            if (previousIndexRight !== null) {
                resetBubble(allRightBubbles[previousIndexRight], rightBubbles[previousIndexRight]);
            }
            if (previousIndexLeft !== null) {
                resetBubble(allLeftBubbles[previousIndexLeft], leftBubbles[previousIndexLeft]);
            }
    
            await wait(1000);
    
            // Highlight current bubbles
            highlightBubble(allRightBubbles[currentIndexRight], rightCenter);
            highlightBubble(allLeftBubbles[currentIndexLeft], leftCenter);
    
            // Update previous indices
            previousIndexRight = currentIndexRight;
            previousIndexLeft = currentIndexLeft;
    
            // Update current indices
            currentIndexRight = (currentIndexRight + 1) % allRightBubbles.length;
            currentIndexLeft = (currentIndexLeft + 1) % allLeftBubbles.length;
        }, 3000);
    }

    

});

//Ülésrend

const seatsSection = document.getElementById("seats");
const seatsForMobileSection = document.getElementById("seatsForMobile");

function checkScreenWidth() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1350) {
        seatsSection.style.display = "none";
        seatsForMobileSection.style.display = "flex";

        document.querySelectorAll('.download-link').forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault(); // Alapértelmezett működés letiltása
    
                const imagePath = event.target.dataset.image; // Az adat attribútumból kapjuk meg a kép útvonalát
    
                // Letöltési folyamat elindítása
                const anchor = document.createElement('a');
                anchor.href = imagePath;
                anchor.download = imagePath.split('/').pop(); // A fájlnév kivonása az útvonalból
                document.body.appendChild(anchor);
                anchor.click();
                document.body.removeChild(anchor);
            });
        });
    } else {
        seatsSection.style.display = "block";
        seatsForMobileSection.style.display = "none";
        
let people = [
    {seatNo: 1,  Name: "Horváth Franciska",             table: "groom"},
    {seatNo: 2,  Name: "Semsei Péter",                  table: "groom"},
    {seatNo: 3,  Name: "Semsei Hanna",                  table: "groom"},
    {seatNo: 4,  Name: "Semseiné Hajdú Zsanett",        table: "groom"},
    {seatNo: 5,  Name: "Kovács Istvánné",               table: "groom"},
    {seatNo: 6,  Name: "Sőregi Józsefné",               table: "groom"},
    {seatNo: 7,  Name: "Sőregi József",                 table: "groom"},
    {seatNo: 8,  Name: "Sőregi Róbert",                 table: "groom"},
    {seatNo: 9,  Name: "Sőregi Dominik",                table: "groom"},
    {seatNo: 10, Name: "Sőregi Angéla",                 table: "groom"},
    {seatNo: 11, Name: "Zenész",                        table: "groom"},
    {seatNo: 12, Name: "Zenész",                        table: "groom"},
    {seatNo: 13, Name: "Áron atya",                     table: "groom"},
    {seatNo: 14, Name: "Torákné Kovács Krisztina",      table: "groom"},
    {seatNo: 15, Name: "Torák Vencel Lőrinc",           table: "groom"},
    {seatNo: 16, Name: "Torák Lőrinc",                  table: "groom"},
    {seatNo: 17, Name: "Torákné Gyurcsik Ildikó",       table: "groom"},
    {seatNo: 18, Name: "Torák Pál",                     table: "groom"},
    {seatNo: 19, Name: "Mezei Krisztián",               table: "groom"},
    {seatNo: 20, Name: "Mezei Krisztiánné",             table: "groom"},
    {seatNo: 21, Name: "Tóthné Kovács Noémi",           table: "groom"},
    {seatNo: 22, Name: "Tóth József",                   table: "groom"},
    {seatNo: 23, Name: "Vékony Csaba",                  table: "groom"},
    {seatNo: 24, Name: "Vékony Gecse Mariann",          table: "groom"},
    {seatNo: 25, Name: "Vékony Kiara",                  table: "groom"},
    {seatNo: 26, Name: "Hemző László vőfély",           table: "groom"},
    {seatNo: 27, Name: "Keresztapa",                    table: "bride"},
    {seatNo: 28, Name: "Keresztanya",                   table: "bride"},
    {seatNo: 29, Name: "Verebélyiné Gáspár Zita",       table: "bride"},
    {seatNo: 30, Name: "Verebélyi Gábor",               table: "bride"},
    {seatNo: 31, Name: "Verebélyi Ivett",               table: "bride"},
    {seatNo: 32, Name: "Kovácsné Verebélyi Szandra",    table: "bride"},
    {seatNo: 33, Name: "Kovács Nimród",                 table: "bride"},
    {seatNo: 34, Name: "Kovács Dániel",                 table: "bride"},
    {seatNo: 35, Name: "Palánki Zsolt",                 table: "bride"},
    {seatNo: 36, Name: "Palánki Benedek",               table: "bride"},
    {seatNo: 37, Name: "Palánki Gréta",                 table: "bride"},
    {seatNo: 38, Name: "Palánki Zsoltné",               table: "bride"},
    {seatNo: 39, Name: "Fotós",                         table: "bride"},
    {seatNo: 40, Name: "Videós",                        table: "bride"},
    {seatNo: 41, Name: "Verebélyiné Illés Beáta",       table: "bride"},
    {seatNo: 42, Name: "Verebélyi Tamás",               table: "bride"},
    {seatNo: 43, Name: "Verebélyi Botond",              table: "bride"},
    {seatNo: 44, Name: "Illés András",                  table: "bride"},
    {seatNo: 45, Name: "Illés Roland",                  table: "bride"},
    {seatNo: 46, Name: "Illésné Tajti Tímea",           table: "bride"},
    {seatNo: 47, Name: "Palánkiné Kiss Veronika",       table: "bride"},
    {seatNo: 48, Name: "Palánki Edina",                 table: "bride"},
    {seatNo: 49, Name: "Palánki Petra",                 table: "bride"},
    {seatNo: 50, Name: "Palánki Gábor",                 table: "bride"},
    {seatNo: 51, Name: "Palánki Viktorné",              table: "bride"},
    {seatNo: 52, Name: "Mucsina Józsefné",              table: "bride"},
    {seatNo: 53, Name: "Mucsina Gabriella",             table: "bride"},
    {seatNo: 54, Name: "Sevelya Ákos",                  table: "friends"},
    {seatNo: 55, Name: "Penderik Barbara",              table: "friends"},
    {seatNo: 56, Name: "Oldal Nikolett",                table: "friends"},
    {seatNo: 57, Name: "Zsidai Máté",                   table: "friends"},
    {seatNo: 58, Name: "Illés Nikolett",                table: "friends"},
    {seatNo: 59, Name: "Tóth Gergő",                    table: "friends"},
    {seatNo: 60, Name: "Csák Vivien",                   table: "friends"},
    {seatNo: 61, Name: "Varga Alexandra",               table: "friends"},
    {seatNo: 62, Name: "Szeles Andrea",                 table: "friends"},
    {seatNo: 63, Name: "Boros Attila Dávid",            table: "friends"},
    {seatNo: 64, Name: "Gergely Gábor",                 table: "friends"},
    {seatNo: 65, Name: "Tóth Dávid",                    table: "friends"},
    {seatNo: 66, Name: "Soós Luca",                     table: "friends"},
    {seatNo: 67, Name: "Tóth Enikő",                    table: "friends"},
    {seatNo: 68, Name: "Mezeiné Bakács Elizabet",       table: "friends"},
    {seatNo: 69, Name: "Mezei Dávid",                   table: "friends"},
    {seatNo: 70, Name: "Holló Márton",                  table: "friends"},
    {seatNo: 71, Name: "Holló Rozina Blanka",           table: "friends"},
    {seatNo: 72, Name: "Hollóné Lós Eliza",             table: "friends"},
    {seatNo: 73, Name: "Dorozsin Regina Zsuzsanna",     table: "friends"},
    {seatNo: 74, Name: "Dorozsin Zorka",                table: "friends"},
    {seatNo: 75, Name: "Dorozsin Róbert",               table: "friends"},
    {seatNo: 76, Name: "Kovács János",                  table: "friends"},
    {seatNo: 77, Name: "Kovács-Varga Virág",            table: "friends"},
    {seatNo: 78, Name: "Jakubovics Réka",               table: "friends"},
    {seatNo: 79, Name: "Kiss Dávid Attila",             table: "friends"},
    {seatNo: 80, Name: "Benus Dominik",                 table: "friends"},
    {seatNo: 81, Name: "Hulitka Szabolcs",              table: "friends"},
    {seatNo: 82, Name: "Hulitka Dániel",                table: "friends"},
    {seatNo: 83, Name: "Szűcs Kitti",                   table: "friends"},
    {seatNo: 84, Name: "Mezei Dorina",                  table: "friends"},
    {seatNo: 85, Name: "Katona Máté Barnabás",          table: "friends"}
];

function displayNamesDiv(who){
    who.forEach(element => {
        element.style.display = "flex";
        element.style.flexDirection = "column";
        element.style.justifyContent = "space-around";
        element.style.height = "72vh";
        element.style.width = "15vw";
        element.style.fontSize = "1vw";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const searchDiv = document.querySelector('.searchDiv');
    const forBride = document.querySelectorAll(".forBride");
    const forGroom = document.querySelectorAll(".forGroom");
    const forFriends = document.querySelectorAll(".forFriends");
    
    // Találatok div létrehozása
    const suggestionsDiv = document.createElement('div');
    suggestionsDiv.id = 'suggestions';
    suggestionsDiv.style.position = 'absolute';
    suggestionsDiv.style.backgroundColor = '#fff';
    suggestionsDiv.style.border = '1px solid #ccc';
    suggestionsDiv.style.width = searchBar.offsetWidth + 'px';
    suggestionsDiv.style.maxHeight = '150px';
    suggestionsDiv.style.overflowY = 'auto';
    suggestionsDiv.style.zIndex = '1000';
    suggestionsDiv.style.display = 'none'; // Alapértelmezetten rejtett

    // Elhelyezés a searchDiv-en belül
    searchDiv.appendChild(suggestionsDiv);

    // Pozicionálás az inputmezőhöz
    const positionSuggestions = () => {
        const rect = searchBar.getBoundingClientRect();
        suggestionsDiv.style.top = searchBar.offsetTop - suggestionsDiv.offsetHeight + 'px'; // A találatok a mező fölé kerülnek
        suggestionsDiv.style.left = searchBar.offsetLeft + 'px';
    };
    
    positionSuggestions();

    // Találatok frissítése
    const updateSuggestions = (query) => {
        // Tisztítás
        suggestionsDiv.innerHTML = '';
        if (!query) {
            suggestionsDiv.style.display = 'none';
            return;
        }

        // Találatok szűrése
        const matches = people.filter(person => 
            person.Name.toLowerCase().includes(query.toLowerCase())
        );

        const exactMatch = people.find(person => person.Name.toLowerCase() === query.toLowerCase());
        if (exactMatch) {
            suggestionsDiv.style.display = 'none';
            return;
        }

        // Találatok megjelenítése
        if (matches.length > 0) {
            matches.forEach(match => {
                const item = document.createElement('div');
                if(match.table == "groom"){
                    item.textContent = `${match.Name} - Vőlegény családja - Ülés: ${match.seatNo}`;
                }
                else if(match.table == "bride"){
                    item.textContent = `${match.Name} - Menyasszony családja - Ülés: ${match.seatNo}`;
                }
                else{
                    item.textContent = `${match.Name} - Fiatalok - Ülés: ${match.seatNo}`;
                }
                //item.textContent = `${match.Name} - ${match.table} - Ülés: ${match.seatNo}`;
                item.style.padding = '5px';
                item.style.cursor = 'pointer';
                

                // Esemény hozzáadása
                item.addEventListener('click', () => {
                    searchBar.value = match.Name;
                    const inputEvent = new Event('input'); // Új input esemény létrehozása
                    searchBar.dispatchEvent(inputEvent); // Esemény kiváltása
                    suggestionsDiv.style.display = 'none';

                    // Eltüntetjük az összes seatAllocation div-et
                    const seatAllocations = document.querySelectorAll(".seatAllocation");
                    seatAllocations.forEach(div => div.style.display = "none");

                    const matchingSeatAllocation = document.querySelector(`.seatAllocation.${match.table}`);
                    if (matchingSeatAllocation) {
                        matchingSeatAllocation.style.display = "block";
                        matchingSeatAllocation.style.width = "50vw";

                        const tableAndSeat = matchingSeatAllocation.querySelector(".tableAndSeat");
                        const seatAllocationHead = matchingSeatAllocation.querySelector(".seatAllocationHead");

                        tableAndSeat.style.width = "50vw";
                        seatAllocationHead.style.width = "50vw";
                        if(match.table == "groom"){
                            displayNamesDiv(forGroom);
                        }
                        else if(match.table == "bride"){
                            displayNamesDiv(forBride);
                        }
                        else{
                            displayNamesDiv(forFriends);
                        }
                    }
                    

                    const matchedSeat = document.querySelector(`.seat-${match.seatNo}`);
                    if (matchedSeat) {
                        matchedSeat.style.backgroundColor = "white";
                        matchedSeat.style.border = "1px solid black";
                    }
                });

                suggestionsDiv.appendChild(item);
            });
            suggestionsDiv.style.display = 'block';
            positionSuggestions();
        } else {
            suggestionsDiv.style.display = 'none';
        }
    };

    // Input események
    searchBar.addEventListener('input', (e) => {
        const query = e.target.value;
        updateSuggestions(query);
    });

    // Elrejtés, ha az inputmező elhagyása történik
    searchBar.addEventListener('blur', () => {
        setTimeout(() => {
            suggestionsDiv.style.display = 'none';
        }, 200); // Késleltetés a kattintás érzékelése miatt
    });

    // Újraméretezés esetén a pozíció frissítése
    window.addEventListener('resize', positionSuggestions);
});

document.getElementById("searchBar").addEventListener("input", function () {
    const searchTerm = this.value.trim().toLowerCase();
    const seatAllocations = document.querySelectorAll(".seatAllocation");
    const seats = document.querySelectorAll(".seat");
    const forBride = document.querySelectorAll(".forBride");
    const forGroom = document.querySelectorAll(".forGroom");
    const forFriends = document.querySelectorAll(".forFriends");
    
    function hideNamesDiv() {
        // Elrejti a nevekhez tartozó div-eket
        forBride.forEach(element => element.style.display = "none");
        forGroom.forEach(element => element.style.display = "none");
        forFriends.forEach(element => element.style.display = "none");
    
        // Visszaállítja a seatAllocation, tableAndSeat, és seatAllocationHead szélességét
        const tableAndSeats = document.querySelectorAll(".tableAndSeat");
        const seatAllocationHeads = document.querySelectorAll(".seatAllocationHead");
        const seatAllocations = document.querySelectorAll(".seatAllocation");
    
        tableAndSeats.forEach(element => element.style.width = "25vw");
        seatAllocationHeads.forEach(element => element.style.width = "25vw");
        seatAllocations.forEach(element => element.style.width = "25vw");
    }

    function resetSeats(){
        seats.forEach(seat => seat.style.backgroundColor = "#D9D9D9");
        seats.forEach(seat => seat.style.border = "none");
    }

    // Ha az input mező üres, minden seatAllocation div megjelenik és a seat színek alapértelmezettek
    if (searchTerm === "") {
        seatAllocations.forEach(div => div.style.display = "block");
        hideNamesDiv();
        resetSeats();
        return;
    }

    // Keresés a people listában
    const matchedPerson = people.find(person => person.Name.toLowerCase() === searchTerm);

    if (matchedPerson) {
        // Csak azok a seatAllocation div-ek jelennek meg, amelyek megfelelnek a talált személy táblájának
        seatAllocations.forEach(div => {
            if (div.classList.contains(matchedPerson.table)) {
                div.style.display = "block";
                div.style.width = "50vw";

                const tableAndSeat = div.querySelector(".tableAndSeat");
                const seatAllocationHead = div.querySelector(".seatAllocationHead");

                tableAndSeat.style.width = "50vw";
                seatAllocationHead.style.width = "50vw";
            } else {
                div.style.display = "none";
            }
            if(matchedPerson.table == "groom"){
                displayNamesDiv(forGroom);
            }
            else if(matchedPerson.table == "bride"){
                displayNamesDiv(forBride);
            }
            else{
                displayNamesDiv(forFriends);
            }
        });

        // Alaphelyzet: Minden seat szín visszaállítása
        resetSeats();

        // Talált seat színének módosítása
        const matchingSeat = document.querySelector(`.seat-${matchedPerson.seatNo}`);
        if (matchingSeat) {
            matchingSeat.style.backgroundColor = "#FFF";
            matchingSeat.style.border = "1px solid black";
        }
    } else {
        // Ha nincs találat, alapértelmezett stílusok
        seatAllocations.forEach(div => div.style.display = "block");
        hideNamesDiv();
        resetSeats();
    }
});


function displayNames() {
    // Kategóriákhoz tartozó div-ek
    const groomDivs = document.querySelectorAll(".forGroom");
    const brideDivs = document.querySelectorAll(".forBride");
    const friendsDivs = document.querySelectorAll(".forFriends");

    // Táblákhoz tartozó emberek neveinek szűrése
    const groomNames = people.filter(person => person.table === "groom");
    const brideNames = people.filter(person => person.table === "bride");
    const friendsNames = people.filter(person => person.table === "friends");

    // Nevek feltöltése Vőlegény családjának asztalához (különböző oldalak)
    if (groomDivs.length === 2) {
        fillDivWithNames(groomDivs[0], groomNames.slice(0, 13), "right"); // Első oldal
        fillDivWithNames(groomDivs[1], groomNames.slice(13), "left");    // Második oldal
    }

    // Nevek feltöltése Menyasszony családjának asztalához
    if (brideDivs.length === 2) {
        fillDivWithNames(brideDivs[0], brideNames.slice(0, 14), "right"); // Első oldal
        fillDivWithNames(brideDivs[1], brideNames.slice(14), "left");    // Második oldal
    }

    // Nevek feltöltése Fiatalok asztalához
    if (friendsDivs.length === 2) {
        fillDivWithNames(friendsDivs[0], friendsNames.slice(0, 16), "right"); // Első oldal
        fillDivWithNames(friendsDivs[1], friendsNames.slice(16), "left");    // Második oldal
    }
}

// Helper function: Nevek feltöltése a megfelelő div-be
function fillDivWithNames(div, names, alignment) {
    div.innerHTML = ""; // Törli a korábbi tartalmat
    div.style.textAlign = alignment; // Igazítás beállítása (right vagy left)
    names.forEach(person => {
        const nameDiv = document.createElement("div");
        nameDiv.textContent = person.Name; // Nevet hozzáadja
        div.appendChild(nameDiv); // Hozzáfűzi a div-hez
    });
}

// Meghívja a displayNames függvényt az oldal betöltésekor
document.addEventListener("DOMContentLoaded", displayNames);

let lastPerson = "";

function highlightName() {
    const searchTerm = document.getElementById("searchBar").value.trim().toLowerCase();
    
    // Keresés a people listában
    const matchedPerson = people.find(person => person.Name.toLowerCase() === searchTerm);

    // Ha van utolsó személy és a keresett név már nem szerepel, fehérre állítja
    if (lastPerson && lastPerson != matchedPerson) {
        
        const seatAllocations = document.querySelectorAll(".seatAllocation");
        seatAllocations.forEach(div => {
            const nameDivs = div.querySelectorAll("div");
            nameDivs.forEach(nameDiv => {
                if (nameDiv.textContent.trim().toLowerCase() === lastPerson) {
                    nameDiv.style.color = "white";
                }
            });
        });
        lastPerson = ""; // Reset the last person
    }

    if (matchedPerson) {
        // Ellenőrzi, hogy megtalálható-e a név a seatAllocation div-ekben
        const seatAllocations = document.querySelectorAll(".seatAllocation");
        seatAllocations.forEach(div => {
            const nameDivs = div.querySelectorAll("div");

            nameDivs.forEach(nameDiv => {
                // Ha a div szövege megegyezik a keresett névvel, feketére állítja
                if (nameDiv.textContent.trim().toLowerCase() === matchedPerson.Name.toLowerCase()) {
                    nameDiv.style.color = "black";
                    lastPerson = matchedPerson.Name.toLowerCase();
                }
            });
        });
    }
}

// Meghívás a keresés alapján
document.getElementById("searchBar").addEventListener("input", highlightName);

    }
}

checkScreenWidth();

// Ellenőrzés az ablak méretezésekor
window.addEventListener('resize', checkScreenWidth);
