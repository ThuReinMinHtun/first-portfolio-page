// click hover for nav bar
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const navMenu = document.querySelector(".nav_menu");

menuBtn.addEventListener("click", () => {
  navMenu.style.display = "block";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  navMenu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
});

// for animation appearance
const skillSection = document.querySelector("#skills");
const projectSection = document.querySelector("#projects");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(skillSection);
observer.observe(projectSection);

// top scroll button
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.querySelectorAll("nav a"),
  foreach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
// about me part
function showContent(sectionId) {
  const screenWidth = window.innerWidth;

  // Hide all sections for desktop/tablet
  if (screenWidth > 600) {
    document.querySelectorAll(".right-section").forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
  } else {
    // Handle mobile view
    toggleAnswer(sectionId + "-answer");
  }
}

function toggleAnswer(id) {
  const answer = document.getElementById(id);
  answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

// Event listener to handle resizing and hiding right section on mobile
function checkScreenSize() {
  if (window.innerWidth <= 600) {
    document.querySelectorAll(".right-section").forEach(section => {
      section.style.display = "none";
    });
  }
}

// Add event listener to check screen size on resize
window.addEventListener("resize", checkScreenSize);

// Initial check on page load
checkScreenSize();

