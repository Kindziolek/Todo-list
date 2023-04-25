let todoItems = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
}

const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#text");
  const text = input.value.trim();
  if (text !== "") {
    addTodo(text);
    input.value = "";
    input.focus();
  }
});

function renderTodo(todo) {
  const list = document.querySelector("#list");
  const isCheked = todo.checked ? "done" : "";
  const node = document.createElement("li");

  node.setAttribute('class', `todo-item ${isChecked}`);
  node.setAttribute('data-key', todo.id);

  node.innerHTML= `
  <input id="${todo.id}" type="checkbox"/>
  <label for="${todo.id}" class="tick js-tick"></label>
  <span>${todo.text}</span>
  <button class="delete-todo js-delete-todo">
  <svg><use href="#delete-icon"></use></svg>
  </button>`;

  list.append(node);
}
