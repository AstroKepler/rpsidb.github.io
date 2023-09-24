// script.js
window.addEventListener("load", function() {
  const loadingBar = document.querySelector(".loading-bar");
  const progressBar = document.querySelector(".progress");
  const content = document.querySelector(".content");

  // Calculate the total number of resources to load (you can adjust this)
  const totalResourcesToLoad = 15412; // Example: 10 resources

  let resourcesLoaded = 0;

  // Function to update the progress bar
  function updateProgressBar() {
    const percentComplete = (resourcesLoaded / totalResourcesToLoad) * 100;
    progressBar.style.width = percentComplete + "%";

    if (resourcesLoaded === totalResourcesToLoad) {
      // All resources are loaded
      setTimeout(() => {
        // Hide the loading bar
        loadingBar.style.display = "none";

        // Show the content
        content.classList.remove("hidden");
      }, 1500); // Add a small delay for smooth transition
    }
  }

  // Simulate loading of resources (replace with your actual loading logic)
  for (let i = 0; i < totalResourcesToLoad; i++) {
    // Simulate loading each resource (e.g., images, scripts, etc.)
    // Replace this with actual resource loading logic
    setTimeout(() => {
      resourcesLoaded++;
      updateProgressBar();
    }, 1200); // Adjust the time for each resource as needed
  }
});