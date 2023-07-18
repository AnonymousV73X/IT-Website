

//PreLoader Starts Here...

const fade = () => {
  const wrapper = document.querySelector(".wrapper-loader");
  wrapper.classList.add("fade");
};

// Add an event listener to ensure the preloader stays visible until the content is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Remove the "fade" class from the preloader wrapper initially
  const wrapper = document.querySelector(".wrapper-loader");
  wrapper.classList.remove("fade");

  // Add the "fade" class to the preloader wrapper once the content is loaded
  window.addEventListener("load", fade);
});


//PreLoader Ends Here...

//NavBar Animations Starts Here...

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (this.scrollY > 0) {
    navbar.classList.remove("py-4");
    navbar.classList.add("shadow-custom", "py-3");
  } else {
    navbar.classList.add("py-4");
    navbar.classList.remove("shadow-custom", "py-3");
  }
});


// Add event listeners for showing/hiding the navbar-toggler icon and hiding the dropdown
          document.addEventListener("DOMContentLoaded", function () {
            const navbarToggler = document.querySelector("#navbarTogglerIcon");
            const navbarCollapse = document.querySelector("#navbarColor03");

            // Hide the dropdown when the user clicks outside
            document.addEventListener("click", function (event) {
              const isInsideNavbar = navbarCollapse.contains(event.target);
              const isNavbarToggler = navbarToggler.contains(event.target);

              if (!isInsideNavbar && !isNavbarToggler) {
                navbarCollapse.classList.remove("show");
                
              }
            });

           // Add event listener for hiding the focus style when the user scrolls
            window.addEventListener("scroll", function () {
              const navbarToggler = document.querySelector(".navbar-toggler");
              navbarToggler.blur();
              navbarCollapse.classList.remove("show");
            });
          });


//NavBar Animations End Here...

//Data AOS initialization...
AOS.init({
  duration: 600,
});

// Typing Effect...

const text = "Coming Soon . . . ";
let index = 0;
const typingElement = document.getElementById("typing-effect");

function typeText() {
  const currentText = typingElement.textContent;

  if (index < text.length) {
    const nextChar = text.charAt(index);
    typingElement.textContent = currentText + nextChar;
    index++;
  } else {
    // When the entire text is typed, reset the index to the first character
    index = 0;
    typingElement.textContent = text.charAt(index);
    index++;
  }

  setTimeout(typeText, 150);
}

typeText();

// Scroll to top...

window.addEventListener("scroll", function () {
  var scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  var scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;

  if (scrollPos > (1 / 4) * scrollHeight) {
    document.querySelector(".scroll-to-top").style.display = "flex";
  } else {
    document.querySelector(".scroll-to-top").style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


// Toggle the drop
function toggleHamburger() {
  var hamburger = document.querySelector(".hamburger");
  var menu = document.querySelector(".menu");
  var body = document.querySelector("body");

  hamburger.classList.toggle("is-active");
  menu.classList.toggle("is-visible");
  body.classList.toggle("menu-open");

  // Add event listeners to handle scrolling and outside click
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", handleClickOutside);

  function handleScroll() {
    // Hide the menu when scrolling
    menu.classList.remove("is-visible");
    body.classList.remove("menu-open");
    hamburger.classList.remove("is-active");

    // Remove the event listener after hiding the menu
    window.removeEventListener("scroll", handleScroll);
  }

  function handleClickOutside(event) {
    if (
      !menu.contains(event.target) &&
      !hamburger.contains(event.target) &&
      !event.target.classList.contains("menu")
    ) {
      // Hide the menu when clicking outside
      menu.classList.remove("is-visible");
      body.classList.remove("menu-open");
      hamburger.classList.remove("is-active");
    }

    // Remove the event listener after hiding the menu
    setTimeout(function () {
      document.removeEventListener("click", handleClickOutside);
    });
  }

  // Add event listener for the initial click event
  document.addEventListener("click", function (event) {
    // Execute handleClickOutside only once per click event
    if (!event._menuClicked) {
      handleClickOutside(event);
      event._menuClicked = true;
    }
  });
}

const accordionPanelHeaders = document.querySelectorAll(
  ".accordion-panel-header"
);

for (let semester = 1; semester <= 4; semester++) {
  for (let subsemester = 1; subsemester <= 2; subsemester++) {
    const semesterId = `semester-${semester}-${subsemester}`;
    const semesterDiv = document.getElementById(semesterId);
    semesterDiv.addEventListener("click", () => {
      window.location.href = `./${semesterId}/`;
    });
  }
}

const electiveElements = document.querySelectorAll(".electives p");

electiveElements.forEach(function (element) {
  element.addEventListener("click", function () {
    window.location.href = "./electives";
  });
});




//Alternate Images

var images = [
  "./assets/images/Compress_20230521_170856_6540.jpg",
  "./assets/images/Compress_20230521_170917_7149.jpg",
  "./assets/images/Compress_20230521_170854_4474.jpg",
];
var currentIndex = 0;
var imageElement = document.getElementById("image");

function fadeIn() {
  imageElement.style.opacity = "1";
}

function fadeOut() {
  imageElement.style.opacity = "0";
}

function changeImage() {
  fadeOut();
  setTimeout(function () {
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
    fadeIn();
  }, 600); // Delay for 0.5 seconds before fading in (adjust as needed)
}

// Immediately show the first image
imageElement.src = images[currentIndex];
currentIndex = (currentIndex + 1) % images.length;
fadeIn(); // Apply initial fade-in effect

setTimeout(function () {
  // Start alternating images after 30 seconds
  setInterval(changeImage, 20000); // 30 seconds in milliseconds
}, 200); // Delay for 0.5 seconds before starting rotation
