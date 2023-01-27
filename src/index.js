import './style.css';
import allTasks from './taskArray.js';
import TasksOperations from './crud.js';
import {addTaskToDisplay,displayAllTasks} from './addTaskToDisplay.js';
import removeTaskFromDisplay from './removeTaskFromDisplay.js';
import refresh from './images/refresh.png';

const taskDescriptionInput = document.getElementById('input-task');
const clearAll = document.querySelector('.clear-all');
const refreshImg = document.querySelector('.refresh-img');
refreshImg.setAttribute('src',refresh);
const taskObj = new TasksOperations(allTasks);


if(allTasks.length > 0){
  displayAllTasks(allTasks);
}

taskDescriptionInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    taskObj.addTask(e.target.value);
    addTaskToDisplay(allTasks[allTasks.length - 1]);
    e.target.value = "";
  }
});

clearAll.addEventListener('click', () => {
  let uncompleted = [];
  allTasks.forEach((task,index) => {
    if(!task.completed){
      uncompleted.push(task);
      removeTaskFromDisplay(index+1);
    }
  });

  uncompleted.forEach((task,index) => {
    task.index = index + 1;
  });
  taskObj.tasksArr = uncompleted;
  taskObj.updateLocalStorage();
  window.location.reload();
});

