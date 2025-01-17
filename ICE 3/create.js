/* Name = Gurharjot Singh
Date = 17-01-2025
Description = Animal Form-->*/


// Tab Navigation Logic
document.querySelectorAll(".nav-link").forEach(tab => {
    tab.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
  
      // Remove 'active' class from all tabs
      document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
  
      // Add 'active' class to the clicked tab
      tab.classList.add("active");
  
      // Hide all sections
      document.querySelectorAll("#home-section, #add-animal-section, #show-animals-section, #contact-section, #about-section")
        .forEach(section => section.classList.add("hidden"));
  
      // Show the corresponding section
      const sectionId = tab.id.replace("-tab", "-section");
      document.getElementById(sectionId).classList.remove("hidden");
    });
  });
  
  // Animal Form Submission Logic
  document.getElementById("animal-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Collect form data
    const name = document.getElementById("name").value.trim();
    const breed = document.getElementById("breed").value.trim();
    const legs = document.getElementById("legs").value.trim();
    const eyes = document.getElementById("eyes").value.trim();
    const sound = document.getElementById("sound").value.trim();
  
    // Validate input
    if (!name || !breed || !legs || !eyes || !sound) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Save animal to local storage
    const animals = JSON.parse(localStorage.getItem("animals")) || [];
    animals.push({ name, breed, legs, eyes, sound });
    localStorage.setItem("animals", JSON.stringify(animals));
  
    // Reset form and show "Show Animals" section
    document.getElementById("animal-form").reset();
    document.getElementById("show-animals-tab").click();
  
    // Render animals
    renderAnimals();
  });
  
  // Render Animals in the "Show Animals" Section
  function renderAnimals() {
    const animals = JSON.parse(localStorage.getItem("animals")) || [];
    const animalList = document.getElementById("animal-list");
    animalList.innerHTML = "";
  
    if (animals.length === 0) {
      animalList.innerHTML = "<li class='list-group-item'>No animals added yet.</li>";
      return;
    }
  
    animals.forEach(animal => {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.textContent = `Name: ${animal.name}, Breed: ${animal.breed}, Legs: ${animal.legs}, Eyes: ${animal.eyes}, Sound: ${animal.sound}`;
      animalList.appendChild(listItem);
    });
  }
  
  // Render animals on page load
  renderAnimals();
  
  