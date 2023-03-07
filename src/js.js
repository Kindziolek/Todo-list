const list = ["aaa", "bbb", "ccc", "ddd"];

list.forEach(el => {
  let div = document.createElement("div");
  document.querySelector('.box').append(div);
  div.classList.add("item");
  div.innerHTML = `${el}`;
});
