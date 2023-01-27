const removeTaskFromDisplay = (indexNum) => {
  const ul = document.querySelector('.todo-list');
  const li = document.querySelectorAll('.task-item');
  indexNum -= 1;
  li.forEach((taskItem, index) => {
    if (parseInt(index, 10) === parseInt(indexNum, 10)) {
      ul.removeChild(taskItem);
    }
  });
};

export default removeTaskFromDisplay;