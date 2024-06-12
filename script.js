var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

sideNav.style.right = "-250px";

menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "img/close.png";
    }
    else {
        sideNav.style.right = "-250px";
        menu.src = "img/menu.png";
    }
}


function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("item");
  if (c === "all") {
      for (i = 0; i < x.length; i++) {
          x[i].style.display = "block";
      }
  } else {
      for (i = 0; i < x.length; i++) {
          if (x[i].classList.contains(c)) {
              x[i].style.display = "block";
          } else {
              x[i].style.display = "none";
          }
      }
  }
}


let slideIndex = 0;
const slides = document.querySelector('.mySlides');
const totalSlides = slides.children.length;
const visibleSlides = 4; // Number of images visible at once
const dots = document.querySelectorAll('.dot');

// Clone slides to create infinite effect
for (let i = 0; i < visibleSlides; i++) {
    const clone = slides.children[i].cloneNode(true);
    slides.appendChild(clone);
}

function showSlides(n) {
    slideIndex += n;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
        slides.style.transition = 'none'; // Disable transition for reset
        slides.style.transform = `translateX(0)`;
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease';
            slideIndex = visibleSlides;
            slides.style.transform = `translateX(-${slideIndex * slides.children[0].offsetWidth}px)`;
        }, 50);
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - visibleSlides;
        slides.style.transition = 'none'; // Disable transition for reset
        slides.style.transform = `translateX(-${slideIndex * slides.children[0].offsetWidth}px)`;
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease';
        }, 50);
    } else {
        const slideWidth = slides.children[0].offsetWidth;
        slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }

    // Update dots
    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[Math.floor(slideIndex % totalSlides / visibleSlides)].classList.add('active');
}

// Automatic slide show
function autoShowSlides() {
    showSlides(1);
    setTimeout(autoShowSlides, 3000); // Change image every 3 seconds
}

// Initial show and auto slide
showSlides(0);
autoShowSlides();

// Event listeners for the buttons
document.querySelector('.next').addEventListener('click', () => showSlides(1));
document.querySelector('.prev').addEventListener('click', () => showSlides(-1));

// Event listeners for the dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index * visibleSlides;
        showSlides(0);
    });
});
