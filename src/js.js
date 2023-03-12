const list = ["ss", "sssss"];

function renderList() {
  document.querySelector(".list").innerHTML = "";
  document.querySelector("input").innerHTML = "";

  list.forEach((el) => {
    let div = document.createElement("div");

    document.querySelector(".list").append(div);
    div.classList.add("item");
    div.innerHTML = `${el} <span class="remove"></span>`;


    let removeItem = document.querySelector(".remove");
    let item = document.querySelector(".item")
removeItem.addEventListener("click", () => {
  //  removeItem.parentElement.removeChild(removeItem)

  renderList();
  event.preventDefault();
});
  });
}

renderList();

const button = document.querySelector(".add_btn");

button.addEventListener("click", () => {
  const todo = document.querySelector("input").value;
  list.push(`${todo}`);
  renderList();
  event.preventDefault();
});


