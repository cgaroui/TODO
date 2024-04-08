
// selection des élèment dans le DOM
const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector('.todoCard');
const taskContainer = document.querySelector('#todoCards');
const delBtn = document.querySelector('.delBtn');
const compteur = document.querySelector('.compteur');

majCompteur();  //initialisation du compteur à 0


addBtn.addEventListener('click', addTask);  //lorsqu'on clique sur addBtn , la fonction addTask est déclenché et son code exécuté 
delBtn.addEventListener('click', function () {
    delTask(taskCard);                      // lorsqu'on clique sur le bouton (corebeille), la fonction delTask est appelé et son code est exécuté
});

//fonction pour ajouter une nouvelle card
function addTask() {
    const newTask = taskCard.cloneNode(true);       //crée une copie de taskcard 
    const newTextArea = newTask.querySelector('.task'); 
    const newDelBtn = newTask.querySelector('.delBtn');
    newTextArea.value = 'New Task';         //texte dans la nvl card 
    taskContainer.appendChild(newTask);     //ajoute la nouvelle card créé avc son contenue en fin de de liste des cards stocké dans le container 

    newDelBtn.addEventListener('click', function () {
        delTask(newTask);       //lorsque le bouton (corebeille) est cliqué la fonction deltask est exéxcuté (ici pour toutes les card qu'on va ajouter )
        alert('Vous avez supprimé l\'élément !'); // ajouter un message pour informer la suppression de la card 
    })
    majCompteur(); //nb de cars mis à jour 
}

//fonctuion pour supprimer une card
function delTask(task) {
    task.remove();
    majCompteur();  //nb de cars mis à jour 
}

//fonction qui compte le nombre de card et affiche le resultat
function majCompteur() {
    compteur.innerText = taskContainer.children.length; // Affiche le nombre total de cards dans le conteneur (grace à la fonction children.lenth qui compte les enfant )
}