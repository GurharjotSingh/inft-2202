// Function to validate the form
function validateAnimalForm(form) {
    let isValid = true;
  
    // Loop through each field in the form
    for (let field of form.elements) {
      if (field.tagName !== "INPUT") continue; // Skip non-input fields
  
      const errorElement = field.nextElementSibling;
      if (!field.value.trim()) {
        // Field is invalid
        isValid = false;
        errorElement.textContent = `The ${field.name} field is required.`;
        errorElement.classList.remove("d-none");
        field.classList.add("is-invalid");
        field.classList.remove("is-valid");
      } else {
        // Field is valid
        errorElement.textContent = "";
        errorElement.classList.add("d-none");
        field.classList.remove("is-invalid");
        field.classList.add("is-valid");
      }
    }
  
    return isValid;
  }
  
  // Function to handle form submission
  function submitAnimalForm(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const form = event.target;
  
    // Validate the form
    if (validateAnimalForm(form)) {
      // Form is valid, print the form values to the console
      const formData = {};
      for (let field of form.elements) {
        if (field.tagName === "INPUT") {
          formData[field.name] = field.value;
        }
      }
      console.log("Form Submitted:", formData);
  
      // Reset the form
      form.reset();
  
      // Clear validation styles
      for (let field of form.elements) {
        if (field.tagName === "INPUT") {
          field.classList.remove("is-valid");
          field.classList.remove("is-invalid");
        }
      }
    } else {
      // Form is invalid, show a general error message
      const messageBox = document.getElementById("message-box");
      messageBox.textContent = "Please fix the errors in the form before submitting.";
      messageBox.classList.remove("d-none");
    }
  }
  
  // Attach the submit event handler to the form
  document.getElementById("animal-form").addEventListener("submit", submitAnimalForm);
  