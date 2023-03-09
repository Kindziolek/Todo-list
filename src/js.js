const list = ["aaa", "bbb", "ccc", "ddd", "eee"];

list.forEach((el) => {
  let div = document.createElement("div");
  document.querySelector(".list").append(div);
  div.classList.add("item");
  div.innerHTML = `${el}`;
});

const addItem = document.querySelector(".add_btn");

const todo = document.querySelector(".todo");

addItem.addEventListener("click", () => {
  list.push(`${todo}`);
  console.log(list);
  alert("eh");
});
