const list = ["aaa", "bbb", "ccc", "ddd"];

list.forEach(el => {
  let div = document.createElement("div");
  document.querySelector('.box').append(div, el);
  div.classList.add("item");
});


