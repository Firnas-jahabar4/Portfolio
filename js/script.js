// Basic form validation script
const form = document.getElementById("contact-form");
const alertBox = document.getElementById("form-alert");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    alertBox.textContent = "Please fill out all fields.";
    alertBox.style.color = "red";
  } else {
    alertBox.textContent = "Message sent successfully! (Not really, demo only)";
    alertBox.style.color = "green";
    form.reset();
  }
});


//highlight nav links while scrolling 
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
