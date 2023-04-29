let todoItems = [];

function renderTodo(todo) {
  const list = document.querySelector("#list");
  const isChecked = todo.checked ? "done" : "";
  const node = document.createElement("li");

  node.setAttribute("class", `todo-item ${isChecked}`);
  node.setAttribute("data-key", todo.id);

  node.innerHTML = `
  <input id="${todo.id}" type="checkbox"/>
  <label for="${todo.id}" class="tick js-tick"></label>
  <span class="item_text">${todo.text}</span>
  <button class="remove js-delete-todo">
  <img src="./image/icon_remove.png" width="20px" height="20px">
  </button>`;

  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }
}

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}

function toggleDone(key) {
  const index = todoItems.findIndex((item) => item.id === Number.key());
  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}

const form = document.querySelector("#form");
form.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.querySelector("#text");

  const text = input.value.trim();
  if (text !== "") {
    addTodo(text);
    input.value = "";
    input.focus();
  }
});

const list = document.querySelector("#list");

list.addEventListener("click", (event) => {
  if (event.target.classlist.containds("js-tick")) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
});
