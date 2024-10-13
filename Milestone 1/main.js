// Importing the toggle button 
var toggle_button = document.getElementById("toggle-skills");
// Importing Skill section
var skill_section = document.getElementById("skills");
// Adding the if-else loop
toggle_button.addEventListener("click", function () {
    if (skill_section.style.display === "block") {
        skill_section.style.display = "none";
    }
    else {
        skill_section.style.display = "block";
    }
});
