

//acordion handler

const panelHeaders = document.querySelectorAll(".accordion-panel-header");

panelHeaders.forEach(function (panelHeader) {
  const content = document.querySelector(panelHeader.getAttribute("href"));
  const plusIcon = panelHeader.querySelector(".fas.fa-plus");
  const paragraphs = content.querySelectorAll("p");
  const buttons = content.querySelectorAll("button");

  panelHeader.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the default behavior of anchor tag

    content.classList.toggle("show");
    panelHeader.classList.toggle("active");

    if (content.classList.contains("show")) {
      paragraphs.forEach(function (paragraph) {
        paragraph.style.display = "block";
      });
      buttons.forEach(function (button) {
        button.style.display = "block";
      });
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      paragraphs.forEach(function (paragraph) {
        paragraph.style.display = "none";
      });
      buttons.forEach(function (button) {
        button.style.display = "none";
      });
      content.style.maxHeight = "0";
    }
  });
});

// JavaScript to add/remove the 'shadow' class and reduce navbar height based on scroll position
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var initialHeight = 58; // Initial height of the navbar in pixels
  var scrollThreshold = 10; // Number of pixels to scroll before reducing the height

  if (scrollTop > scrollThreshold) {
    nav.classList.add("shadow");
    nav.style.height = initialHeight - 20 + "px"; // Reduce the height by 20 pixels
  } else {
    nav.classList.remove("shadow");
    nav.style.height = initialHeight + "px"; // Reset the height to the initial value
  }
});

window.addEventListener("scroll", function () {
  var slideUpElements = document.querySelectorAll(".slide-up");
  var triggerOffset = 100; // Offset from the bottom of the viewport to trigger the animation

  slideUpElements.forEach(function (element) {
    var elementOffsetTop = element.offsetTop;
    var windowHeight = window.innerHeight;

    if (window.scrollY > elementOffsetTop - windowHeight + triggerOffset) {
      element.classList.add("fade-up-active");
    } else {
      element.classList.remove("fade-up-active");
    }
  });
});

var icon = document.getElementById("icon");
var instruction = document.getElementById("instruction");
var container = document.getElementById("container");
var clickCount = 0;
var timer;

icon.addEventListener("click", function () {
  clickCount++;

  if (clickCount === 2) {
    clearTimeout(timer);
    container.classList.add("hidden");
  } else {
    instruction.classList.toggle("hidden");
    timer = setTimeout(function () {
      container.classList.add("hidden");
    }, 8000);
  }
});

// Scroll to top

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

function rotateAndHidePopup(index) {
  var closeBtn = document.querySelector(`#popupCard${index} .close-btn`);
  closeBtn.classList.add("rotate-animation");

  setTimeout(function () {
    hidePopup(index);
    closeBtn.classList.remove("rotate-animation");
  }, 300);
}

function hidePopup(index) {
  document.getElementById(`popupCard${index}`).style.display = "none";
}

function showPopup(index) {
  const popupCard = document.getElementById(`popupCard${index}`);
  if (popupCard) {
    popupCard.style.display = "flex";
  }
}

function hidePopup(index) {
  const popupCard = document.getElementById(`popupCard${index}`);
  if (popupCard) {
    popupCard.style.display = "none";
  }
}



// Get all the <ul> elements with the common class
const ulElements = document.querySelectorAll('.ul-units');

// Loop through the <ul> elements
ulElements.forEach((ulElement, index) => {
  // Add click event listener to each <ul> element
  ulElement.addEventListener('click', function() {
    showPopup(12); // Replace with your desired logic
  });
});