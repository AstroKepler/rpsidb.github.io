const form = document.getElementById("passcodeForm");

// Define the correct passcode you want to check against
const correctPasscode = "1277-316-227"; // Replace with your actual passcode

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the value entered in the passcode input field
  const passcodeInput = document.getElementById("passcode");
  const enteredPasscode = passcodeInput.value;

  // Check if the entered passcode is correct
  if (enteredPasscode === correctPasscode) {
    // Redirect to a different HTML file
    window.location.href = "$57987574573498774343/rpsidb.html"; // Replace with the URL of the HTML file you want to redirect to
  } else {
    alert("Incorrect passcode. Please try again.");
    // Clear the input field
    passcodeInput.value = "";
  }
});