const searchInput = document.querySelector("#search");
const list = document.querySelector("ul");

const taskCounter = document.querySelector("h1 span");
const addItemForm = document.querySelector("#item-add");
const addItemInput = document.querySelector("#input-item");
const toDoList = [];

//Usuwanie zadań
const removeTask = e => {
  const index = e.target.parentNode.dataset.key;
  toDoList.splice(index, 1);
  renderList();
};

//Wyszukiwarka

const handleSearch = e => {
  console.log(listElements);
  const searchText = e.target.value.toLowerCase();
  let tasks = [...listElements];
  console.log(tasks);
  tasks = tasks.filter(task => {
    return task.textContent.toLowerCase().includes(searchText);
  });
  console.log(tasks);
  list.textContent = "";
  tasks.forEach(task => {
    list.appendChild(task);
  });
};

searchInput.addEventListener("input", handleSearch);

//dodawanie zadań
const addTask = e => {
  e.preventDefault();
  const taskName = addItemInput.value;
  if (!taskName) return;
  const newTask = document.createElement("li");
  newTask.className = "task";
  newTask.innerHTML = taskName + `<button class="btn-delete">Usuń</button>`;
  toDoList.push(newTask);
  renderList();

  list.appendChild(newTask);
  addItemInput.value = "";
  newTask.querySelector(".btn-delete").addEventListener("click", removeTask);
};

const renderList = () => {
  list.textContent = "";
  toDoList.forEach((element, key) => {
    element.dataset.key = key;
    list.appendChild(element);
  });
};

addItemForm.addEventListener("submit", addTask);
