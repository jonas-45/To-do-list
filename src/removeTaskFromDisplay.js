const removeTaskFromDisplay = (indexNum) => {
  const ul = document.querySelector('.todo-list');
  const li = document.querySelectorAll('.task-item');
  indexNum = indexNum - 1;
  console.log("yyyyyyyy:" + indexNum);
  li.forEach((taskItem,index) => {
    console.log('index: ' + index + ' and indexNum: ' + indexNum);
    if(parseInt(index,10) === parseInt(indexNum,10)){
      console.log("to remove");
      ul.removeChild(taskItem);
    }else{
      console.log("no remove");
    }
  });
}

export default removeTaskFromDisplay;