const today = new Date();
const thisYear = new Date().getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = "Yanina " + thisYear + " &#169";
footer.appendChild(copyright);

const skills = ["HTML", "JavaScript", "Adobe Photoshop"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
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
    if (messageList.childElementCount === 0) {
        messageSection.style.display = "none";
    }

});
messageSection.style.display = "block";

newMessage.appendChild(removeButton);

messageList.appendChild(newMessage);

messageForm.reset();

});

fetch("https://api.github.com/users/yaninacruz/repos")
.then(response => response.json())
.then(data => {
    const projectSection = document.getElementById("projects");
    data.forEach(repo => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = repo.html_url;
        a.textContent = repo.name;
        li.appendChild(a);
        projectSection.appendChild(li);

    });
});