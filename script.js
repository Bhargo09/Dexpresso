// 📨 Web3Forms Contact Integration
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "Sending message... ☕";

    try {
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
      });

      if (response.ok) {
        status.textContent = "✅ Thanks for contacting Dexpresso Café! We'll reply soon.";
        form.reset();
      } else {
        status.textContent = "❌ Oops! Something went wrong. Please try again.";
      }
    } catch (error) {
      status.textContent = "⚠️ Network error. Please check your connection.";
    }
  });
}
