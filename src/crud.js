import Task from "./task-class";

class TasksOperations {
  constructor(tasksArr){
    this.tasksArr = tasksArr;
  }

  addTask = (taskDesc) => {
    const newTask = new Task(this.getLastIndex() + 1,taskDesc);
    this.tasksArr.push(newTask);
    this.updateLocalStorage();
    //addTaskToDisplay(newTask);
  }

 removeTask = (taskIndex) => {
  const index = taskIndex - 1;
  console.log('task-id' + index);
  this.tasksArr.splice(index,1); //Remove task from task array by using index
  //const tasks = document.querySelectorAll('.dots');
  for(let i = index; i < this.tasksArr.length; i++){
    this.tasksArr[i].index = i + 1;
    //tasks[i].setAttribute('data-index',i);
  }
  console.log(this.tasksArr)
  this.updateLocalStorage();
 }

 editTask = (index,editedText) => {
  this.tasksArr[index-1].description = editedText;
  this.updateLocalStorage();
 }

 markAsCompleted = (index) => {
  const trueIndex = index - 1;
  this.tasksArr[trueIndex].completed = true;
  console.log(this.tasksArr);
  this.updateLocalStorage();
 }

 getLastIndex = () => {
  return this.tasksArr.length;
 }

 updateLocalStorage = () => {
  localStorage.setItem('tasks',JSON.stringify(this.tasksArr));
 }

 updateTasks = (newTasksArr) => {
  this.tasksArr = newTasksArr;
 }
}
export default TasksOperations;