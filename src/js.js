const items = ["ss", "sss", "kkk"]

let list = document.querySelector("#list");
let itemAdd = document.querySelector("input");
let addBtn = document.querySelector("#btn");

let li = document.createElement("li");

function renderList() {
  for(let item of items) {
    list.innerHTML+=`<li class="item"> ${item} </li>`
  }
}
renderList()






















// const list = ["ss", "sssss"];

// function renderList() {
//   document.querySelector(".list").innerHTML = "";
//   document.querySelector("input").innerHTML = "";

//   list.forEach((el) => {
//     let div = document.createElement("div");

//     document.querySelector(".list").append(div);
//     div.classList.add("item");
//     div.innerHTML = `${el} <span class="remove"></span>`;

//     let removeItem = div.querySelector(".remove");
    
//     removeItem.addEventListener("click", (event) => {
//      list = list.filter(k => k !== el);
      

//       renderList();
//       event.preventDefault();
//     });
//   });
// }

// renderList();

// const button = document.querySelector(".add_btn");

// button.addEventListener("click", () => {
//   const todo = document.querySelector("input").value;
//   list.push(`${todo}`);
//   renderList();
//   event.preventDefault();
// });







