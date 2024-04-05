
// //ajout ecouteur d'évenement sur le bouton pour appler une fonction ajout:
const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click',addTask);

//creation de la fonction ajout :

const taskcard = document.querySelector('.todoCards');
const tasksContainer = document.querySelector("#todoCards");


function addTask(){
    const newTask = taskcard.cloneNode(true);               //on clone l'élèment newTask sachant que la card a été créé en ML
    const newTextArea =newTask.querySelector('.task');      //on définit la valeur de la zone de texte à fin qu'elle ne soit pas vide 
    newTextArea.value = "new Task"                         // ___________________________
    tasksContainer.appendChild(newTask)                     //on ajoute cette nouvelle card dans le DOM ( à la fin de la liste des enfants de l'élément tasksContainer)
    tasksContainer.appendChild(newTask);
    
}

//On ajoute un écouteur d’évènement sur le bouton pour appeler une fonction suppression:
const delBtn =document.querySelector('.delBtn');
delBtn.addEventListener('click',function(){
    deleteTask(taskcard);
});

//on crée la fonctuiion supprimer 

function deleteTask(task){
    task.remove();
}







//On ajoute l’écouteur d’évènement sur l’élément cloné dans la fonction ajout, afin de faire fonctionner le bouton suppression sur les nouvelles cards
function addTask(){
    const newTask = taskcard.cloneNode(true)
    const newDelBtn = newTask.querySelector('.delBtn')
    const newTextArea = newTask.querySelector('.task')
    newTextArea.value = "new Task"
    newDelBtn.addEventListener('click',function(){
        deleteTask(newTask);
});
    tasksContainer.appendChild(newTask)
    updateCount();

}






