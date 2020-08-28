var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;

    li.setAttribute("data-index", i);

    todoList.appendChild(li);
    var button = document.createElement("button");
    button.textContent = "Complete";
    li.appendChild(button);
  }
}

// When form is submitted...
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Re-render the list
  renderTodos();
});

todoList.addEventListener("click", function (event) {
  var button = event.target;
  if (button.matches("button") === true) {
    var element = event.target.parentElement; //parentNode worked too
    var index = element.getAttribute("data-index");
    todos.splice(index, 1);
    renderTodos();
  }
});
// ## Instructions

// * Modify your `renderTodos()` function:

//   * When a new todo is created, add a `data-index` for each `li`.

//   * Generate a button that says "Complete" and append it to your `li`.

// * Add an event listener so that when a user clicks the Complete button, it accesses the `data-index` value and removes that todo element from the list.

// ## Hint

// * You can use `setAttribute` for `data-index` and `splice` to remove your todo from the list.