let todoItems = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  console.log(todoItems)
  
}

let form = document.querySelector("#form")
form.addEventListener('submit', event => {
  event.preventDefault();
  let input = document.querySelector("#text");
  let text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
})
