let todoList = document.querySelector('.todo-list');

const task = {
  id: "1",
  text: "выучить html",
  completed: true
  };

function createListItem() {
    let createListItem = `
    <li class='editing' id = '${task.id}'>
    <div>
    <input class='toggle' type='radio'>
    <label>${task.text}</label>
    <button class='todo-count'></button>
    </div>
    </li>
    `
    todoList.innerHTML = createListItem;
};

function renderTask() { 

  createListItem();
  
};

todoList.push(renderTask(task));