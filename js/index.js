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
const messageForm = document.forms.leave_message;
messageForm.addEventListener("submit", (event) => {
event.preventDefault();

const usersName = event.target.usersName.value;
const usersEmail = event.target.usersEmail.value;
let usersMessage = event.target.usersMessage.value;

const messageSection = document.getElementById("messages");

const messageList = messageSection.querySelector('ul');

let newMessage = document.createElement('li');

newMessage.innerHTML = `
<a href = "mailto:${usersEmail}">${usersName}</a>
<span>says: ${usersMessage}</span>
`;

const removeButton = document.createElement('button');

removeButton.classList.add('remove-button');
removeButton.innerText = 'remove';
removeButton.type = 'button';

removeButton.addEventListener('click', (event) => {
    const entry = event.target.parentNode;

    entry.remove();

});

newMessage.appendChild(removeButton);

messageList.appendChild(newMessage);

messageForm.reset();

});
const githubRequest = new XMLHttpRequest ();
githubRequest.open("GET", "https://api.github.com/users/yaninacruz/repos");
githubRequest.send();
githubRequest.addEventListener("load", () =>{
    const repositories = JSON.parse(githubRequest.responseText);
    console.log(repositories);

const projectSection = document.getElementById("projects");
//query projectSection to find the <ul> element
const projectList = projectSection.querySelector("ul");

//loop to iterate over repositories array
for (let i = 0; i < repositories.length; i++) {
    const project = document.createElement('li');
    project.innerText = repositories[i].name;
    projectList.appendChild(project);
    }
    
});