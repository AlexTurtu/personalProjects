const newTask = document.getElementById("new-task-text");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskList = document.querySelector(".task-list");
let allTasks = [];
if (JSON.parse(localStorage.getItem("tasks")))
  allTasks = JSON.parse(localStorage.getItem("tasks"));
let id = allTasks.length + 1;
let newTaskToDisplay;

class ListItem {
  constructor(task, id) {
    this.task = task;
    this.id = id;
  }
}

document.addEventListener("DOMContentLoaded", start);

document.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("ph-info")) infoFunction();
  else if (target.classList.contains("add-task-btn")) addTaskFunction();
  else if (target.classList.contains("clear-all")) clearAll();
  else if (target.classList.contains("delete")) {
    e.target.parentNode.remove();
    let idHere = parseInt(e.target.previousElementSibling.id);
    let newAllTasks = allTasks.filter((task) => task.id != idHere);
    allTasks = newAllTasks;
    localStorage.setItem("tasks", JSON.stringify(allTasks));
  }
});
console.log(allTasks);
function addTaskFunction() {
  newTasktoAdd = new ListItem(newTask.value, id);
  allTasks.push(newTasktoAdd);
  localStorage.setItem("tasks", JSON.stringify(allTasks));
  start();
  id++;
  newTask.value = "";
}

function clearAll() {
  while (allTasks.length > 0) allTasks.pop();
  taskList.innerHTML = "";
  localStorage.clear();
}
function start() {
  taskList.innerHTML = "";
  let x = [];
  x = JSON.parse(localStorage.getItem("tasks"));
  x.forEach((element) => {
    let newTaskToDisplay = document.createElement("div");
    newTaskToDisplay.classList.add("list-item");
    newTaskToDisplay.innerHTML = `
  <p id =${element.id} class="task-in-the-list">${element.task}</p>
  <i class="delete ph-x-circle"></i>
`;
    taskList.appendChild(newTaskToDisplay);
  });
}
