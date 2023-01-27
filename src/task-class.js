class Task {
  constructor(index, desc, completed = false) {
    this.index = index;
    this.description = desc;
    this.completed = completed;
  }
}

export default Task;