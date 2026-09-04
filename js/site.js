document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm && formStatus && window.emailjs) {
  emailjs.init({
    publicKey: "AWYKDspDuNLvKDYdK",
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    formStatus.textContent = "Invio in corso...";

    try {
      await emailjs.sendForm(
        "service_4uhopzt",
        "template_oucw0do",
        contactForm
      );

      formStatus.textContent ="Messaggio inviato correttamente.";
      contactForm.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      formStatus.textContent ="Non è stato possibile inviare il messaggio. Riprova.";
    } finally {
      submitButton.disabled = false;
    }
  });
}