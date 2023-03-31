// Elements

const form = document.querySelector("#new-todo-form");
const template = document.querySelector("#list-item-template");
const todoList = document.querySelector("#list");
const todoTextInput = document.querySelector("#todo-input");
let toDoArray = loadToDoList();
toDoArray.forEach(addToDoItem);

// Functions

function addToDoItem(todoItem) {
  const cloneTemplate = template.content.cloneNode(true);
  const liItem = cloneTemplate.querySelector(".list-item");
  liItem.dataset.todoId = todoItem.id;
  const textElement = cloneTemplate.querySelector("[data-list-item-text");
  textElement.innerText = todoItem.name;
  const checkbox = cloneTemplate.querySelector("[data-list-item-checkbox]");
  checkbox.checked = todoItem.complete;
  todoList.append(cloneTemplate);
}

function saveToDoList() {
  const convertToString = JSON.stringify(toDoArray);
  localStorage.setItem("TO-DO List", convertToString);
}

function loadToDoList() {
  const todosString = localStorage.getItem("TO-DO List");
  return JSON.parse(todosString) || [];
}

// Events

todoList.addEventListener("change", (e) => {
  if (!e.target.matches("[data-list-item-checkbox]")) return;
  const parent = e.target.closest(".list-item");
  const todoId = parent.dataset.todoId;
  const todo = toDoArray.find((t) => t.id === todoId);
  todo.complete = e.target.checked;
  saveToDoList();
});

todoList.addEventListener("click", (e) => {
  if (!e.target.matches("[data-button-delete]")) return;
  const parent = e.target.closest(".list-item");
  const todoId = parent.dataset.todoId;
  parent.remove();
  toDoArray = toDoArray.filter(todoItem => todoItem.id !== todoId)
  saveToDoList();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoName = todoTextInput.value;
  if (todoName === "") return;
  const toDoItem = {
    id: new Date().valueOf().toString(),
    name: todoName,
    complete: false,
  };
  toDoArray.push(toDoItem);
  addToDoItem(toDoItem);
  saveToDoList();
  todoTextInput.value = "";
});

// Mark as clicked ToDO

// Delete ToDo
