const items = [
    "ss",
    "sss",
    "kkk"
];
let list = document.querySelector("#list");
let addBtn = document.querySelector("#btn");
function renderList() {
    document.querySelector("#list").innerHTML = "";
    items.forEach((el)=>{
        list.innerHTML += `<li class="item"> ${el} <span id="remove" class="remove"></span> </li>`;
        let removeBtn = div.querySelector("#remove");
        removeBtn.addEventListener("click", (e)=>{
            e.preventDefault();
        });
    });
}
renderList();
addBtn.addEventListener("click", (e)=>{
    const newItem = document.querySelector("input").value;
    items.push(newItem);
    renderList();
    e.preventDefault();
}); // const list = ["ss", "sssss"];
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

//# sourceMappingURL=index.1e532f96.js.map
