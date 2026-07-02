document.addEventListener("DOMContentLoaded", () => {
    
    // Selecting DOM target nodes for execution routing
    const contactForm = document.getElementById("portfolio-contact-form");
    const feedbackMsg = document.getElementById("form-feedback-message");

    // Intercept submit routine tasks
    contactForm.addEventListener("submit", (event) => {
        // Halt native processing steps to let asynchronous validation process run first
        event.preventDefault();

        // Capture evaluation criteria string variables from interface inputs
        const nameInput = document.getElementById("user-name").value.trim();
        const emailInput = document.getElementById("user-email").value.trim();
        const messageInput = document.getElementById("user-message").value.trim();

        // Clear ongoing historical layout classes from previous verification runs
        feedbackMsg.style.display = "none";
        feedbackMsg.className = "";
        feedbackMsg.textContent = "";

        // Interactive validation logic check: evaluate missing parameters bounds
        if (nameInput === "" || emailInput === "" || messageInput === "") {
            showFeedback("Error: Please fill out all required validation fields before submitting.", "error-state");
            return;
        }

        // Basic Regex validation format check for email syntax mapping
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput)) {
            showFeedback("Error: Please input a valid, structurally correct email format.", "error-state");
            return;
        }

        // Success state branch path routing
        showFeedback(`Thank you for reaching out, ${nameInput}! Your message has been safely transmitted.`, "success-state");
        
        // Reset raw field tracking lines upon completion
        contactForm.reset();
    });

    // Helper display routine handling layout assignments cleanly
    function showFeedback(text, stateClass) {
        feedbackMsg.textContent = text;
        feedbackMsg.style.display = "block";
        
        // Dynamic styling modifiers based on execution success/failure properties
        if (stateClass === "success-state") {
            feedbackMsg.style.backgroundColor = "#d4edda";
            feedbackMsg.style.color = "#155724";
            feedbackMsg.style.border = "1px solid #c3e6cb";
        } else {
            feedbackMsg.style.backgroundColor = "#f8d7da";
            feedbackMsg.style.color = "#721c24";
            feedbackMsg.style.border = "1px solid #f5c6cb";
        }
    }
});