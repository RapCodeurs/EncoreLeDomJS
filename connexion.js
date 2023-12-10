let date = new Date();

date.setHours(date.getHours() + 1)

let user = window.prompt("Quel est votre identifiant ?");
let mdp = window.prompt("Quel est votre mot de passe ?");

document.cookie = `username=${user}; expires=${date.toUTCString()}`
document.cookie = `username=${mdp}; expires=${date.toUTCString()}`

let button = document.createElement('button');
button.innerHTML = "button";
document.body.appendChild(button)

button.addEventListener('click', () => {
    window.location.assign('traitement.html')
});

