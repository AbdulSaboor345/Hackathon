// Importing the toggle button 
let toggle_button = document.getElementById("toggle-skills") as HTMLButtonElement

// Importing Skill section
let skill_section = document.getElementById("skills") as HTMLElement

// Adding the if-else loop
toggle_button.addEventListener("click", () => {
    if (skill_section.style.display === "none") {
        skill_section.style.display = "block"
    }

    else {
        skill_section.style.display = "none"
    }
})
