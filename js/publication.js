//publication


function filterFunction() {
    // Get the user input for name title and year
    let nameInput = document.getElementById("name").value.toLowerCase();
    let titleInput = document.getElementById("titre").value.toLowerCase();
    let yearInput = document.getElementById("annee").value.toLowerCase();
  
    // Get all <p> tags
    const paragraphs = document.getElementsByTagName("p");
  
    // Loop through each paragraph
    for (let i = 0; i < paragraphs.length; i++) {
        const paragraphText = paragraphs[i].textContent.toLowerCase();
  
        // Check if the paragraph contains any of the user inputs
        let nameMatch = nameInput.length > 0 && paragraphText.includes(nameInput);
        let titleMatch = titleInput.length > 0 && paragraphText.includes(titleInput);
        let yearMatch =yearInput.length > 0 &&  paragraphText.includes(yearInput);
  
        // Show the paragraph if any of the inputs match
        if (nameMatch || titleMatch || yearMatch) {
            paragraphs[i].style.display = "block"; // Show the matching paragraph
            
        } else {
            paragraphs[i].style.display = "none"; // Hide non-matching paragraphs
            
        }
    }
}
  
  // Attach the filterFunction to the form's submit event
  document.querySelector(".filter").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    filterFunction(); // Call the filter function
  });























