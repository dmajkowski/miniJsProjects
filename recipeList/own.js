const addingForm = document.getElementById("item-add");
const itemToBeAdded = document.getElementById("input-item");
const itemList = document.getElementById("items-list");
const searchField = document.getElementById("search-field");
const constItemsCounter = document.querySelector(".items-counter");
let itemsArray = [];

const renderList = () => {
  itemList.innerText = "";
  itemsArray.forEach((item, key) => {
    item.dataset.key = key;
    itemList.appendChild(item);
  });
  constItemsCounter.innerText = `${itemsArray.length}`;
};

const handleItemDelete = e => {
  itemsArray.splice(e.target.parentNode.dataset.key, 1);
  renderList();
};

const handleItemAdd = e => {
  e.preventDefault();
  if (!itemToBeAdded.value) return;
  const newListItem = document.createElement("li");
  newListItem.innerHTML = `<span class="task-text">${itemToBeAdded.value}</span> <button class="delete-btn"> X </button>`;
  newListItem.className = "task";
  itemsArray.push(newListItem);
  renderList();
  itemList.appendChild(newListItem);
  newListItem
    .querySelector("button.delete-btn")
    .addEventListener("click", handleItemDelete);
  itemToBeAdded.value = "";
};

addingForm.addEventListener("submit", handleItemAdd);

const handleItemSearch = e => {
  let searchItems = [...itemsArray];
  searchItems = searchItems.filter(task => {
    return task.innerText
      .replace("X", "")
      .toLowerCase()
      .includes(searchField.value.toLowerCase());
  });
  itemList.innerText = "";
  searchItems.forEach(item => {
    itemList.appendChild(item);
  });
};

searchField.addEventListener("input", handleItemSearch);
