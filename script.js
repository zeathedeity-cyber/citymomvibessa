const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

async function submitForm(form, endpoint, messageElement, successText) {
  const button = form.querySelector("button[type='submit']");
  button.disabled = true;
  button.style.opacity = "0.65";
  messageElement.textContent = "Sending...";

  const payload = Object.fromEntries(new FormData(form).entries());

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) throw new Error(data.message || "Something went wrong.");

    messageElement.textContent = successText;
    form.reset();
  } catch (error) {
    messageElement.textContent = error.message || "Please try again.";
  } finally {
    button.disabled = false;
    button.style.opacity = "1";
  }
}

document.getElementById("registrationForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm(
    event.currentTarget,
    "/api/registrations",
    document.getElementById("formMessage"),
    "You're on the list. We look forward to welcoming you."
  );
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm(
    event.currentTarget,
    "/api/contact",
    document.getElementById("contactMessage"),
    "Thank you. Your message has been received."
  );
});
