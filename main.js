document.addEventListener("DOMContentLoaded", function () {
    //To delete something from the website, function:

    function removeResource(event) {
        const resource = event.target.closest(".resource");
        if (resource) {
            resource.remove();
        }
    }

    // clicking a button to remove some information or item from the webpage, function:

    const removeButtons = document.querySelectorAll(".remove-button");
    removeButtons.forEach(button => {
        button.addEventListener("click", removeResource);
    });

    // To determine cat's availability, function:

    function toggleAvailabilityStatus(event) {
        const availabilityLabel = event.target;
        if (availabilityLabel.textContent === "Available for Adoption") {
            availabilityLabel.textContent = "Not Available for Adoption";
        } else {
            availabilityLabel.textContent = "Available for Adoption";
        }
    }

    // This function enables the webpage to respond to user actions (like clicks) on elemens that indicate the availaity status of certain items (in this case, cats for adoption).

    const availabilityLabels = document.querySelectorAll(".stock-label");
    availabilityLabels.forEach(label => {
        label.addEventListener("click", toggleAvailabilityStatus);
    });

    // This function listens for when the id "cat-form" is submittd. When that happens, it stops the form from doing its usual thing like sending data or drerefreshing the page.

    const form = document.getElementById("cat-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        //  This function will help me collect what the user typed into differnt parts of the form and gets rid of extra spaces.

        const name = document.getElementById("name").value.trim();
        const breed = document.getElementById("breed").value.trim();
        const age = document.getElementById("age").value.trim();
        const gender = document.getElementById("gender").value.trim();
        const description = document.getElementById("description").value.trim();
        
        // This code will help check if any of te required forms are empty (name, breed, age, gender, or description). if empty, it will show alert message of "Please fill out all required fields" and stops further execution of the code using the return statement. This helps prefvent the form from being submitted if some fields are empty.  

        //Ask Youssef if there is a better code.

        if (name === "" || breed === "" || age === "" || gender === "" || description === "") {
            alert("Please fill out all required fields.");
            return;
        }
        
        // This will clear the form.

        form.reset();

        // Thius function should help generate a new element in teh index.html document through my javascript.

        const catList = document.querySelector(".cat-list");
        const newResource = document.createElement("div");
        newResource.classList.add("resource");
        newResource.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Breed:</strong> ${breed}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Description:</strong> ${description}</p>
            <button class="remove-button">Remove</button>
            <label class="stock-label">Available for Adoption</label>
        `;
        catList.prepend(newResource);

        // The function will help listen for when a "Remove" button is clicked on the new cats' in fo. So, when I click the :"remove" button, next to the cat dertails, the3 function will do something, like remove the cat;s info from teh webpage.

        const newRemoveButton = newResource.querySelector(".remove-button");
        newRemoveButton.addEventListener("click", removeResource);

        // "When this label associated with the availability status of the new cat "resource" is clicked, the event listener will trigger a function. This function should handle toggling the availability status of the cat. wSo this should allow users to change it from "Available for Adoption" to "Not Available for Adoption" and vice versa.
        const newAvailabilityLabel = newResource.querySelector(".stock-label");
        newAvailabilityLabel.addEventListener("click", toggleAvailabilityStatus);
    });

    //  Clears the fomrs. 
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", function () {
        form.reset();
    });
});
