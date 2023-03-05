const button = document.querySelector(".input-container button");
const input = document.querySelector(".input-container input");
const list = document.querySelector(".todo-list");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");

  li.innerText = input.value;
  li.className = "todo-list-item";
  deleteBtn.innerText = "Delete";
  list.appendChild(li);
  li.appendChild(deleteBtn);
});
