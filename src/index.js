import './style.css';
import allTasks from './taskArray.js';
import TasksOperations from './crud.js';
import {addTaskToDisplay,displayAllTasks} from './addTaskToDisplay.js';
import removeTaskFromDisplay from './removeTaskFromDisplay.js';
//localStorage.clear();
const taskDescriptionInput = document.getElementById('input-task');

const taskCrud = new TasksOperations(allTasks);


if(allTasks.length > 0){
  displayAllTasks(allTasks);
}

taskDescriptionInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    taskCrud.addTask(e.target.value);
    console.log(allTasks[allTasks.length - 1]);
    addTaskToDisplay(allTasks[allTasks.length - 1]);
    e.target.value = "";
  }
});


