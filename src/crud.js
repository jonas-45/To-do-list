import Task from './task-class.js';

class TasksOperations {
  constructor(tasksArr) {
    this.tasksArr = tasksArr;
  }

  addTask = (taskDesc) => {
    const newTask = new Task(this.getLastIndex() + 1, taskDesc);
    this.tasksArr.push(newTask);
    this.updateLocalStorage();
  }

 removeTask = (taskIndex) => {
   const index = taskIndex - 1;
   this.tasksArr.splice(index, 1); // Remove task from task array by using index
   for (let i = index; i < this.tasksArr.length; i += 1) {
     this.tasksArr[i].index = i + 1;
   }
   this.updateLocalStorage();
 }

 editTask = (index, editedText) => {
   this.tasksArr[index - 1].description = editedText;
   this.updateLocalStorage();
 }

 markAsCompleted = (index) => {
   const trueIndex = index - 1;
   this.tasksArr[trueIndex].completed = true;
   this.updateLocalStorage();
 }

 getLastIndex = () => this.tasksArr.length

 updateLocalStorage = () => {
   localStorage.setItem('tasks', JSON.stringify(this.tasksArr));
 }

 updateTasks = (newTasksArr) => {
   this.tasksArr = newTasksArr;
 }
}
export default TasksOperations;