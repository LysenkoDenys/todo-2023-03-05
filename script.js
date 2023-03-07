const button = document.querySelector(".input-container button");
const input = document.querySelector(".input-container input");
const list = document.querySelector(".todo-list");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");

  if (input.value === "") {
    alert("enter some text");
  } else {
    li.innerText = input.value;
    li.className = "todo-list-item";
    deleteBtn.innerText = "Delete";
    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = "";
  }
  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });
});
