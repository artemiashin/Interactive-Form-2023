// Focus first field of the form on page load 

const firstField = document.getElementById('name');
firstField.addEventListener('onLoad', firstField.focus());

// Hide the other job field by default

const jobRole = document.getElementById('other-job-role');
jobRole.style.display = "none";

const options = document.getElementById('title');

options.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        jobRole.style.display = "block";
    } else {
        jobRole.style.display = "none";
    }
});

// Color t-shirts

const color = document.getElementById('color');
color.style.display = "none";

const design = document.getElementById('design');

design.addEventListener('change', (e) => {

    const allColors = document.querySelectorAll('#color option');

    color.style.display = "block";

    for (let color of allColors){
        
        if (color.getAttribute('data-theme') === e.target.value) {
            color.hidden = false;
        } else {
        color.hidden = true;
        color.selected = false;
        }
    }
});

// Activities

// Get the "activities" fieldset element
const activitiesFieldset = document.getElementById("activities");

// Get the "activity-cost" element
const activityCostElement = document.getElementById("activities-cost");

// Initialize the total cost
let totalCost = 0;

activities.addEventListener("change", (e) => {
    const target = e.target;

    if (target.type === "checkbox") {
        // Get the cost of the activity from the "data-cost" attribute
        const cost = parseInt(target.getAttribute("data-cost"));

        // If the checkbox is checked, add the cost; otherwise, subtract it
        if (target.checked) {
            totalCost += cost;
        } else {
            totalCost -= cost;
        }

        // Update the "activity-cost" element to display the new total cost
        activityCostElement.textContent = `Total: $${totalCost}`;
    }

    
});
