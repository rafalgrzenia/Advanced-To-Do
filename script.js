// Elements

const form = document.querySelector("#new-todo-form");
const template = document.querySelector("#list-item-template");
const todoList = document.querySelector("#list");
const todoTextInput = document.querySelector("#todo-input");
const toDoArray = loadToDoList();
toDoArray.forEach(addToDoItem);


// Functions

function addToDoItem(todoItem) {
  
  const cloneTemplate = template.content.cloneNode(true);
  const textElement = cloneTemplate.querySelector("[data-list-item-text");
  textElement.innerText = todoItem.name;
  todoList.appendChild(cloneTemplate);
  
}

function saveToDoList(todoarray) {
    const convertToString = JSON.stringify(todoarray);
    localStorage.setItem("TO-DO List", convertToString);
}

function loadToDoList() {
    const todosString = localStorage.getItem("TO-DO List");
    return JSON.parse(todosString) || [];   
}




// Events

form.addEventListener("submit", e => {
    e.preventDefault();
    const todoName = todoTextInput.value;
    if (todoName === "") return;
    const toDoItem = {
      id: new Date().valueOf().toString(),
      name: todoName,
      checked: false,
    }
    toDoArray.push(toDoItem);
    addToDoItem(toDoItem);
    saveToDoList(toDoArray);
    todoTextInput.value = "";
});

// Mark as clicked ToDO

// Delete ToDo