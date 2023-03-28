const items = ["ss", "sss", "kkk"];

let list = document.querySelector("#list");
let addBtn = document.querySelector("#btn");

let removeBtn = document.querySelector(".remove");

function renderList() {
  document.querySelector("#list").innerHTML = "";

  items.forEach((el) => {
    list.innerHTML += `<li class="item"> ${el} <span class="remove"></span> </li>`;
  });
}

renderList();

addBtn.addEventListener("click", () => {
  const newItem = document.querySelector("input").value;
  items.push(newItem);
  renderList();
  e.preventDefault();
});


