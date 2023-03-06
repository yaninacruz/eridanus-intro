const today = new Date();
const thisYear = new Date().getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = "Yanina " + thisYear + " &#169";
footer.appendChild(copyright);

let skills = ["HTML", "JavaScript", "Adobe Photoshop"];
let skillsSection = document.querySelector('#skills');
let skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
let skill = document.createElement('li');
skill.innerHTML = skills[i];
skillsList.appendChild(skill);
}