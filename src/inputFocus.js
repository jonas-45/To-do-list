import Dots from './images/dots.png';
import remove from './images/remove.png';
import TasksOperations from './crud.js';
import {allTasks} from './index.js'

const handleInputFocus = () => {
  const taskInputs = document.querySelectorAll('.task-desc');
  const checkBoxes = document.querySelectorAll('.checkbox');
  const removeBtns = document.querySelectorAll('.dots');

  const taskObj = new TasksOperations(allTasks);

  taskInputs.forEach(taskInput => {
    taskInput.removeEventListener('focus',focusEvent(e));
    taskInput.removeEventListener('blur',blurEvent(e));
  });
  checkBoxes.forEach(box => {
    box.removeEventListener('change',changeEvent);
  });
  removeBtns.forEach((btn,removeIndex) => {
    btn.removeEventListener('mousedown',(e) => {
      e.preventDefault();
      if(e.target.previousElementSibling.classList.contains('focused')){
        const taskObj = new TasksOperations(allTasks);
        taskObj.removeTask(removeIndex);
        
      }
    });
  });


  taskInputs.forEach(taskInput => {
    taskInput.addEventListener('focus', (e) => {
      focusEvent(e);
    });
  
    taskInput.addEventListener('blur', (e) => {
      blurEvent(e);
    })
  });

  checkBoxes.forEach((box,boxIndex) => {
    box.addEventListener('change', (e) => {
      if(e.target.checked) {
        e.target.nextElementSibling.style.textDecoration = 'line-through';
        taskObj.markAsCompleted(boxIndex);
      }else{
        //console.log("its not checked");
        e.target.nextElementSibling.style.textDecoration = 'none';
      }
    });
  });

  removeBtns.forEach((btn,removeIndex) => {
    btn.addEventListener('mousedown',(e) => {
      e.preventDefault();
      if(e.target.previousElementSibling.classList.contains('focused')){
        taskObj.removeTask(removeIndex);
        
      }
    })
  })
}

const focusEvent =(e) => {
  console.log('focus event called');
  e.target.parentNode.style.backgroundColor = '#f1efb4';
  e.target.style.backgroundColor = '#f1efb4';
  e.target.nextElementSibling.setAttribute('src',remove);
  e.target.classList.add('focused');
  e.target.style.textDecoration = 'none';
}
const blurEvent =(e) => {
  e.target.parentNode.style.backgroundColor = '';
  e.target.style.backgroundColor = '';
  e.target.nextElementSibling.setAttribute('src',Dots);
  e.target.classList.remove('focused');
  if(e.target.previousElementSibling.checked){
    e.target.style.textDecoration = 'line-through';
  }
}
const changeEvent =(e) => {
  if(e.target.checked) {
    e.target.nextElementSibling.style.textDecoration = 'line-through';
    taskObj.markAsCompleted()
  }else{
    //console.log("its not checked");
    e.target.nextElementSibling.style.textDecoration = 'none';
  }
}
const mouseDownEvent =(e) => {
  e.preventDefault();
      if(e.target.previousElementSibling.classList.contains('focused')){
        const taskObj = new TasksOperations(allTasks);
        taskObj.removeTask(removeIndex);
        
      }
}

export default handleInputFocus;