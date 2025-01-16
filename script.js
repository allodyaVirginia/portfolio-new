document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for menu links
  const menuLinks = document.querySelectorAll(".navbar ul li a");

  menuLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const sectionId = link.getAttribute("href").substring(1);
      const section = document.getElementById(sectionId);

      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Contact form handling
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault(); // Stop the default form submission

      const userName = document.getElementById("name").value.trim();
      const userEmail = document.getElementById("email").value.trim();
      const userMessage = document.getElementById("message").value.trim();

      if (!userName || !userEmail || !userMessage) {
        alert("Please complete all fields before submitting.");
        return;
      }

      // Example feedback on submission
      alert("Thank you, " + userName + ", for your message! We will respond shortly.");

      // Optional: Reset form fields
      form.reset();
    });
  }

  // Highlight active menu item based on scroll position
  const allSections = document.querySelectorAll("section");
  const options = {
    threshold: 0.6,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const correspondingLink = document.querySelector(`.navbar ul li a[href="#${entry.target.id}"]`);
      if (entry.isIntersecting) {
        menuLinks.forEach(link => link.classList.remove("active"));
        if (correspondingLink) correspondingLink.classList.add("active");
      }
    });
  }, options);

  allSections.forEach(section => {
    observer.observe(section);
  });
});
