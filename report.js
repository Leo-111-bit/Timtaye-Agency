// JavaScript code for capturing screenshot (using html2canvas library)

// Add an event listener to the form submit event
document.getElementById("issueForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Capture the screenshot of the form
    html2canvas(document.getElementById("issueForm")).then(function(canvas) {
      // Convert the screenshot to a data URL
      var screenshotDataUrl = canvas.toDataURL();
      
      // Create a hidden input field to store the screenshot data
      var screenshotInput = document.createElement("input");
      screenshotInput.type = "hidden";
      screenshotInput.name = "screenshotDataUrl";
      screenshotInput.value = screenshotDataUrl;
      
      // Append the input field to the form
      document.getElementById("issueForm").appendChild(screenshotInput);
      
      // Submit the form
      document.getElementById("issueForm").submit();
    });
  });