let todoItems = [];

function renderTodo(todo) {
  const list = document.querySelector("#list");
  const isChecked = todo.checked ? "done" : "";
  const node = document.createElement("li");

  node.setAttribute('class', `todo-item ${isChecked}`);
  node.setAttribute('data-key', todo.id);

  node.innerHTML= `
  <input id="${todo.id}" type="checkbox"/>
  <label for="${todo.id}" class="tick js-tick"></label>
  <span class="item_text">${todo.text}</span>
  <button class="remove js-delete-todo">
  <img src="./image/icon_remove.png" width="20px" height="20px">
  </button>`;

  list.append(node);
  
}

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo)

}

const form = document.querySelector("#form");
form.addEventListener("click", (event) => {
  event.preventDefault();
  const input = document.querySelector("#text");

  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

