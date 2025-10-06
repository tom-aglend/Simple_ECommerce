// Product catalog functionality
document.addEventListener("DOMContentLoaded", function () {
  // Add to cart functionality
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productName =
        this.parentElement.querySelector(".product-name").textContent;
      alert(`Added ${productName} to cart!`);

      // Visual feedback
      this.textContent = "Added!";
      this.style.backgroundColor = "#4CAF50";

      setTimeout(() => {
        this.textContent = "Add to Cart";
        this.style.backgroundColor = "";
      }, 1500);
    });
  });

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form");

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = this.querySelector(".email-input");
    const email = emailInput.value;

    if (email && email.includes("@")) {
      alert(`Thank you for subscribing with ${email}!`);
      emailInput.value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  });

  // Navigation highlighting
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
