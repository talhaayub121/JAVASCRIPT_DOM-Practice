const statuss = document.querySelector("#card h5");
const add_button = document.querySelector("#bt1");
const remove = document.querySelector("#bt2");

add_button.addEventListener("click", function () {
  statuss.innerHTML = "ADDED";
  statuss.style.color = "green";
  add_button.style.backgroundColor = "green";
  remove.style.backgroundColor = "red";
});
remove.addEventListener("click", function () {
  statuss.innerHTML = "Removed";
  statuss.style.color = "green";
  add_button.style.backgroundColor = "red";
  remove.style.backgroundColor = "green";
});
console.log(statuss);
console.log(add_button);
console.log(remove);
