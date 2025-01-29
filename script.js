document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Thank you for your message!";
        formMessage.style.color = "green";

        // Clear form fields
        document.getElementById("contact-form").reset();
    }
});
