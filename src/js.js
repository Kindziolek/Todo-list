const list = [];

function renderList() {
  document.querySelector(".list").innerHTML = ""
  list.forEach((el) => {
    let div = document.createElement("div");
    document.querySelector(".list").append(div);
    div.classList.add("item");
    div.innerHTML = `${el}`;
  });
}

renderList();

const addItem = document.querySelector(".add_btn");



addItem.addEventListener("click", () => {
  const todo = document.querySelector('input').value;
  list.push(`${todo}`);

  renderList();
  event.preventDefault();
});
