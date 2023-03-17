// Elements

const form = document.querySelector("#new-todo-form");
const template = document.querySelector("#list-item-template");
const todoList = document.querySelector("#list");
const todoTextInput = document.querySelector("#todo-input");
const toDoArray = [];


// Functions

function addToDoItem(todoName) {
  
  const cloneTemplate = template.content.cloneNode(true);
  const textElement = cloneTemplate.querySelector("[data-list-item-text");
  textElement.innerText = todoName;
  todoList.appendChild(cloneTemplate);
  todoTextInput.value = "";
}

// Events

form.addEventListener("submit", e => {
    e.preventDefault();
    const todoName = todoTextInput.value;
    if (todoName === "") return;
    toDoArray.push(todoName);
    addToDoItem(todoName);
    saveToDoList(toDoArray);
    todoTextInput.value = "";
});

