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
    const jsPuns = document.querySelectorAll('option[data-theme="js puns"]');
    const jsHeart = document.querySelectorAll('option[data-theme="heart js"]');

    if (e.target.value === 'js puns') {
        
        color.style.display = "block";
        for (let heart of jsHeart) {
            heart.hidden = true;
            heart.selected = true;
            for (let pun of jsPuns) {
                pun.hidden = false;
            }
        }
        
    } else if (e.target.value === 'heart js') {
        
        color.style.display = "block";
        for (let pun of jsPuns) {
            pun.hidden = true;
            pun.selected = true;
            for (let heart of jsHeart) {
                heart.hidden = false;
            }
        }
    } else {
        color.style.display = "none";
    }
});