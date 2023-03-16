// Elements

const addTodoButton = document.querySelector("#add-todo-button");
const template = document.querySelector("#list-item-template");
const todoList = document.querySelector("#list");
const todoTextInput = document.querySelector("#todo-input");



// Events

addTodoButton.addEventListener("click", e => {
    e.preventDefault();
    const cloneTemplate = template.content.cloneNode(true);
    const textElement = cloneTemplate.querySelector("[data-list-item-text");
    textElement.innerText = todoTextInput.value;
    todoList.appendChild(textElement);
    todoTextInput.value = "";
})