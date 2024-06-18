// Function to show the popup verification message with a delay and animation
function showVerificationPopup() {
    setTimeout(function() {
        document.getElementById("verificationPopup").style.top = "50%";
        document.getElementById("verificationPopup").style.opacity = "1";
        document.getElementById("spinner").style.display = "none"; // Hide spinner
    }, 5000); // 5-second delay before showing the popup
}

// Function to close the popup verification message
function closePopup() {
    document.getElementById("verificationPopup").style.top = "-50%";
    document.getElementById("verificationPopup").style.opacity = "0";
}

// Event listener for form submission
document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    document.getElementById("spinner").style.display = "inline-block"; // Show spinner
    showVerificationPopup(); // Show the verification popup after a delay
});
