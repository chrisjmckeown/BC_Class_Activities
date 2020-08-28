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
    todoList.appendChild(li);
  }
}

todoInput.addEventListener("keypress", function (event){
  event.preventDefault();
  //if enter is clicked

  var todoText = todoInput.value.trim();

  if (event.keyCode === 13){
    if(todoInput.value.trim() !== ""){
      todos.push(todoInput.value.trim());
      renderTodos() ;
    }
  }
});


// ## Instructions

// * Add an event listener so that when a user hits enter, the value from the todo input field is pushed to our todo array.

// * Make sure that empty values are not pushed to the array.

// * Once the value has been added to the array, clear the input field and re-render the todo list.
