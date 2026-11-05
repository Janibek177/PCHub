document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const modal = document.getElementById("notification-modal");
    const overlay = document.getElementById("notification-overlay");
    const notificationTitle = document.getElementById("notification-title");
    const notificationText = document.getElementById("notification-text");
    const closeBtn = document.getElementById("notification-close");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            showNotification("ERROR: INCOMPLETE DATA", "Please fill in all required fields before transmitting.", true);
            return;
        }

        showNotification("SUCCESS: TRANSMISSION SENT", "Your message has been successfully encrypted and dispatched to the core.", false);
        form.reset();
    });

    function showNotification(title, text, isError) {
        notificationTitle.innerText = title;
        notificationText.innerText = text;
        
        if (isError) {
            notificationTitle.style.color = "#ff5f56";
        } else {
            notificationTitle.style.color = "var(--neon-cyan)";
        }

        modal.classList.add("active");
        overlay.classList.add("active");
    }

    function closeModal() {
        modal.classList.remove("active");
        overlay.classList.remove("active");
    }

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
});