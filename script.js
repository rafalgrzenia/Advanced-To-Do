// Elements

const addTodoButton = document.querySelector("#add-todo-button");
const template = document.querySelector("#list-item-template");
const todoList = document.querySelector("#list");
const todoTextInput = document.querySelector("#todo-input");

// Functions

function addToDoItem(item) {
  item.preventDefault();
  const todoName = todoTextInput.value;
  const cloneTemplate = template.content.cloneNode(true);
  const textElement = cloneTemplate.querySelector("[data-list-item-text");

  if (todoName === "") return;
  textElement.innerText = todoName;
  todoList.appendChild(cloneTemplate);
  todoTextInput.value = "";
}

// Events

addTodoButton.addEventListener("click", addToDoItem);
