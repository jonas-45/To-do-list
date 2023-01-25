import './style.css';
import Task from './task-class.js';
import Dots from './images/dots.png';

const task1 = new Task(0,'Attend morning session meeting',false);
const task2 = new Task(1,'Meet coding partners',false);
const task3 = new Task(2,'Attend morning session meeting',false);
let tasks = [
  {
    index: task1.index,
    description: task1.desc,
    completed: task1.completed
  },
  {
    index: task2.index,
    description: task2.desc,
    completed: task2.completed
  },
  {
    index: task3.index,
    description: task3.desc,
    completed: task3.completed
  }
];

const populateTasks = (tasksArr) => {
  const ul = document.querySelector('.todo-list');
  tasksArr.forEach(task => {
    let listId = "list" + task.index;
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.setAttribute('type','checkbox');
    
    //add image to list item
    const dotImage = new Image();
    dotImage.src = Dots;
    dotImage.classList.add('dots');
    dotImage.style.width = '15px';
    dotImage.style.height = '15px';
    dotImage.style.cursor = 'pointer';

    li.classList.add('task-item');
    input.classList.add('checkbox');
    
    li.appendChild(input);
    li.appendChild(document.createTextNode(task.description));
    li.appendChild(dotImage);
    dotImage.style.marginLeft = 'auto';
    ul.appendChild(li);
  });
}

populateTasks(tasks);