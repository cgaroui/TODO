
// //ajout ecouteur d'évenement sur le bouton pour appler une fonction ajout:
const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click',addTask);

// //creation de la fonction ajout :

const taskcard = document.querySelector('.todoCards');
const tasksContainer = document.querySelector("#todoCards");


function addTask(){
    const newTask = taskcard.cloneNode(true);               //on clone l'élèment newTask sachant que la card a été créé en ML
    const newTextArea =newTask.querySelector('.task');      //on définit la valeur de la zone de texte à fin qu'elle ne soit pas vide 
    newTextArea.value = "new Task"                         // ___________________________
    tasksContainer.appendChild(newTask)                     //on ajoute cette nouvelle card dans le DOM ( à la fin de la liste des enfants de l'élément tasksContainer)
    tasksContainer.appendChild(newTask);
    
}






