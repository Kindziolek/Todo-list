const list = ["aaa", "bbb", "ccc", "ddd"];

// list.forEach(el => {
//   let div = document.createElement("div");
//   document.querySelector('.box').append(div, el);
//   div.classList.add("item");
// });

// Dodaje do pierwszeo tylko:
// list.forEach(el => {
//   let div = document.createElement("div");
//   document.querySelector('.box').append(div);
//   div.classList.add("item");
//   document.querySelector(".item").append(el)
// });


list.forEach(el => {
  let div = document.createElement("div");
  document.querySelector('.box').append(div);
  div.classList.add("item");
  div.innerHTML = `${el}`;
});
