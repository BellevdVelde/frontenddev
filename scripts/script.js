// JavaScript Document
console.log("hi");

const hamMenu = document.querySelector("button");

const offScreenMenu = document.querySelector("ul");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// Tweede sectie carousel
const section2 = document.querySelector(".home section:nth-of-type(2)");
const ul2 = section2.querySelector(".home ul");
const buttons2 = section2.querySelectorAll(".home button");
const liItems2 = ul2.querySelectorAll(".home li");

let currentIndex2 = 0;
const itemWidth2 = liItems2[0].offsetWidth + parseInt(window.getComputedStyle(liItems2[0]).marginRight);

buttons2.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentIndex2 = index;

    let offset = -(currentIndex2 * itemWidth2) + (window.innerWidth / 3) - (itemWidth2 / 3);

    if (currentIndex2 === 0) {
      offset = -(currentIndex2 * itemWidth2) + 10; 
    }

    if (currentIndex2 === liItems2.length - 1) {
      offset = -(currentIndex2 * itemWidth2) + 70; 
    }

    ul2.style.transform = `translateX(${offset}px)`;

    buttons2.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

const buttons = document.querySelectorAll('.home section:nth-of-type(7) .buttons button');
const list = document.querySelector('.home section:nth-of-type(7) ul');
const items = document.querySelectorAll('.home section:nth-of-type(7) li');

const totalItems = items.length;
const itemWidth = items[0].offsetWidth + 16;
const containerWidth = list.offsetWidth;  

const itemsPerPage = Math.floor(containerWidth / itemWidth);

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const offset = index * itemsPerPage * itemWidth;

        list.style.transform = `translateX(-${offset}px)`;

        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null, 
    rootMargin: "0px",
    threshold: 0.1, 
  };

  const elements = document.querySelectorAll(
    ".home section:nth-of-type(1) h1, " +
    ".home section:nth-of-type(1) p, " +
    ".home section:nth-of-type(1) a, " +
    ".home section:nth-of-type(3) video, " +
    ".home section:nth-of-type(3) h2, " +
    ".home section:nth-of-type(3) a, " +
    ".home section:nth-of-type(4) h2, " +
    ".home section:nth-of-type(4) a"
  );

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); 
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  elements.forEach(el => observer.observe(el)); 
});

    // Functie om de light/dark mode in te schakelen
    const toggleButton = document.getElementById('mode-toggle');
    const root = document.documentElement;

    const savedMode = localStorage.getItem('mode');

    if (savedMode === 'light') {
        root.classList.add('light-mode');
        toggleButton.textContent = 'Switch to Dark Mode';
    } else {
        root.classList.remove('light-mode');
        toggleButton.textContent = 'Switch to Light Mode';
    }

    toggleButton.addEventListener('click', () => {
        if (root.classList.contains('light-mode')) {
            root.classList.remove('light-mode');
            toggleButton.textContent = 'Switch to Light Mode';
            localStorage.setItem('mode', 'dark');
        } else {
            root.classList.add('light-mode');
            toggleButton.textContent = 'Switch to Dark Mode';
            localStorage.setItem('mode', 'light');
        }
    });

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("section:nth-of-type(1) button");

  button.addEventListener("click", () => {
    const secondSection = document.querySelector("section:nth-of-type(2)");

    secondSection.scrollIntoView({
      behavior: "smooth",
      block: "start" 
    });
  });
});


