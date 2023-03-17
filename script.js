// Elements

const form = document.querySelector("#new-todo-form");
const template = document.querySelector("#list-item-template");
const todoList = document.querySelector("#list");
const todoTextInput = document.querySelector("#todo-input");
const toDoArray = loadToDoList();
toDoArray.forEach(addToDoItem);


// Functions

function addToDoItem(todoName) {
  
  const cloneTemplate = template.content.cloneNode(true);
  const textElement = cloneTemplate.querySelector("[data-list-item-text");
  textElement.innerText = todoName;
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
    toDoArray.push(todoName);
    addToDoItem(todoName);
    saveToDoList(toDoArray);
    loadToDoList();
    todoTextInput.value = "";
});

