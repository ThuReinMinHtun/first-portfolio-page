// click hover for nav bar
document.getElementById("menu-icon").addEventListener("click", function () {
  document.querySelector(".nav-list").classList.toggle("show");
});
// for animation appearance
const skillSection = document.querySelector("#skills");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.5
});

observer.observe(skillSection);