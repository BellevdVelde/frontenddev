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

    // Basisverschuiving
    let offset = -(currentIndex2 * itemWidth2) + (window.innerWidth / 3) - (itemWidth2 / 3);

    // Eerste item offset aanpassen
    if (currentIndex2 === 0) {
      offset = -(currentIndex2 * itemWidth2) + 10; // Voeg wat extra ruimte toe aan de linkerzijde
    }

    // Laatste item offset aanpassen
    if (currentIndex2 === liItems2.length - 1) {
      offset = -(currentIndex2 * itemWidth2) + 70; // Voeg wat extra ruimte toe aan de rechterzijde
    }

    // Verplaats de ul
    ul2.style.transform = `translateX(${offset}px)`;

    // Maak de actieve knop duidelijker
    buttons2.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

const buttons = document.querySelectorAll('.home section:nth-of-type(7) .buttons button');
const list = document.querySelector('.home section:nth-of-type(7) ul');
const items = document.querySelectorAll('.home section:nth-of-type(7) li');

// Het aantal lijstitems en de breedte van een item bepalen
const totalItems = items.length;
const itemWidth = items[0].offsetWidth + 16;  // Adjust for margin/padding
const containerWidth = list.offsetWidth;  // The width of the container

// Set the number of visible items in the viewport (for horizontal scroll)
const itemsPerPage = Math.floor(containerWidth / itemWidth);

// Add an event listener to each button
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Calculate the offset to shift the items
        const offset = index * itemsPerPage * itemWidth;

        // Update the transform property to slide the items
        list.style.transform = `translateX(-${offset}px)`;

        // Update the active button styling
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null, // Hele viewport als root
    rootMargin: "0px", // Geen extra marge
    threshold: 0.1, // 10% van het element moet zichtbaar zijn
  };

  // Selecteer alle elementen die met een fade-in effect zichtbaar moeten worden
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
        entry.target.classList.add("visible"); // Voeg de 'visible' klasse toe
        observer.unobserve(entry.target); // Stop observeren na zichtbaar worden
      }
    });
  }, observerOptions);

  elements.forEach(el => observer.observe(el)); // Observeer elk element
});



    // Functie om de light/dark mode in te schakelen
    const toggleButton = document.getElementById('mode-toggle');
    const root = document.documentElement;

    // Check of de gebruiker eerder een voorkeur heeft ingesteld
    const savedMode = localStorage.getItem('mode');

    // Als er een voorkeur is opgeslagen, gebruik die voorkeur
    if (savedMode === 'light') {
        root.classList.add('light-mode');
        toggleButton.textContent = 'Switch to Dark Mode';
    } else {
        root.classList.remove('light-mode');
        toggleButton.textContent = 'Switch to Light Mode';
    }

    // Event listener voor de toggle-knop
    toggleButton.addEventListener('click', () => {
        // Als de light-mode klasse al aanwezig is, zet het om naar dark mode
        if (root.classList.contains('light-mode')) {
            root.classList.remove('light-mode');
            toggleButton.textContent = 'Switch to Light Mode';
            localStorage.setItem('mode', 'dark');
        } else {
            // Zet light mode in
            root.classList.add('light-mode');
            toggleButton.textContent = 'Switch to Dark Mode';
            localStorage.setItem('mode', 'light');
        }
    });

// Wacht tot de DOM volledig is geladen
document.addEventListener("DOMContentLoaded", () => {
  // Zoek de button
  const button = document.querySelector("section:nth-of-type(1) button");

  // Voeg een klik-event toe aan de button
  button.addEventListener("click", () => {
    // Zoek de tweede sectie
    const secondSection = document.querySelector("section:nth-of-type(2)");

    // Scroll naar de tweede sectie
    secondSection.scrollIntoView({
      behavior: "smooth", // Maak de scroll vloeiend
      block: "start" // Scroll naar de bovenkant van de sectie
    });
  });
});


