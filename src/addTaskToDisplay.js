import Dots from './images/dots.png';
import remove from './images/remove.png';
import TasksOperations from './crud.js';
import allTasks from './taskArray.js';
import removeTaskFromDisplay from './removeTaskFromDisplay.js';

const taskObj = new TasksOperations(allTasks);
const ul = document.querySelector('.todo-list');

const addListDescriptionListener = (taskinput) => {
  taskinput.addEventListener('focus', (e) => {
    e.target.parentNode.style.backgroundColor = '#f1efb4';
    e.target.style.backgroundColor = '#f1efb4';
    e.target.nextElementSibling.setAttribute('src', remove);
    e.target.classList.add('focused');
    e.target.style.textDecoration = 'none';
  });

  taskinput.addEventListener('blur', (e) => {
    e.target.parentNode.style.backgroundColor = '';
    e.target.style.backgroundColor = '';
    e.target.nextElementSibling.setAttribute('src', Dots);
    e.target.classList.remove('focused');
    if (e.target.previousElementSibling.checked) {
      e.target.style.textDecoration = 'line-through';
    }
  });

  taskinput.addEventListener('keyup', (e) => {
    const editedText = e.target.value;
    const index = e.target.getAttribute('data-index');
    taskObj.editTask(index, editedText);
  });

  taskinput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (e.target.classList.contains('focused')) {
        e.target.parentNode.style.backgroundColor = '';
        e.target.style.backgroundColor = '';
        e.target.nextElementSibling.setAttribute('src', Dots);
        e.target.classList.remove('focused');
        if (e.target.previousElementSibling.checked) {
          e.target.style.textDecoration = 'line-through';
        }
        document.getElementById('input-task').focus();
      }
    }
  });
};

const addCheckboxListener = (checkbox) => {
  checkbox.addEventListener('change', (e) => {
    if (e.target.checked) {
      const boxIndex = e.target.getAttribute('data-index');
      e.target.nextElementSibling.style.textDecoration = 'line-through';
      taskObj.markAsCompleted(boxIndex);
    } else {
      // console.log("its not checked");
      e.target.nextElementSibling.style.textDecoration = 'none';
    }
  });
};

const addRemoveButtonListener = (removebtn) => {
  removebtn.addEventListener('mousedown', (e) => {
    e.preventDefault();
    const dataIndex = e.target.getAttribute('data-index');
    if (e.target.previousElementSibling.classList.contains('focused')) {
      taskObj.removeTask(dataIndex);
      removeTaskFromDisplay(dataIndex);
      const tasks = document.querySelectorAll('.dots');
      const chkboxes = document.querySelectorAll('.checkbox');
      const taskInputs = document.querySelectorAll('.task-desc');
      const index = dataIndex - 1;
      for (let i = index; i < taskObj.tasksArr.length; i + 1) {
        tasks[i].setAttribute('data-index', i + 1);
        chkboxes[i].setAttribute('data-index', i + 1);
        taskInputs[i].setAttribute('data-index', i + 1);
      }
    }
  });
};

const addTaskToDisplay = (task) => {
  const li = document.createElement('li');
  const checkBoxInput = document.createElement('input');
  const descInput = document.createElement('input');
  checkBoxInput.setAttribute('type', 'checkbox');
  checkBoxInput.setAttribute('data-index', task.index);
  descInput.setAttribute('type', 'text');
  descInput.setAttribute('data-index', task.index);

  // add image to list item
  const dotImage = new Image();
  dotImage.src = Dots;
  dotImage.classList.add('dots');
  dotImage.setAttribute('data-index', task.index);
  li.classList.add('task-item');
  checkBoxInput.classList.add('checkbox');
  descInput.classList.add('task-desc');
  descInput.setAttribute('value', task.description);

  li.appendChild(checkBoxInput);
  li.appendChild(descInput);
  li.appendChild(dotImage);
  ul.appendChild(li);

  if (task.completed) {
    checkBoxInput.checked = 'checked';
    descInput.style.textDecoration = 'line-through';
  }

  addListDescriptionListener(descInput);
  addCheckboxListener(checkBoxInput);
  addRemoveButtonListener(dotImage);
};

const displayAllTasks = (tasksArr) => {
  tasksArr.forEach((task) => {
    addTaskToDisplay(task);
  });
};

export { addTaskToDisplay, displayAllTasks };