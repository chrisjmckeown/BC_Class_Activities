
var addBtn = document.querySelector("#add-btn");
var peopleListEl = document.querySelector("#people-list");
var nameEl = document.querySelector("#name");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");

var people = [{ name: "Bob" }];
var currentId = 0;

//add
addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var name = nameEl.value;
  var li = document.createElement("li");
  li.id = people.length;
  li.innerHTML = name + " <button>edit</button>";
  people.push({ name: name });
  peopleListEl.append(li);
});

//edit
peopleListEl.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    event.preventDefault();
    modalEl.style.display = "block";
    currentId = parseInt(event.target.parentElement.id);
    var name = people[currentId].name;
    var description = people[currentId].description;
    modalNameEl.textContent = name;
    if(description) {
      descriptionEl.value = description;
    } else {
      descriptionEl.value = "";
    }
  }
});
///////////////////////////////
//Modal form controls
saveBtn.addEventListener("click", function(event) {
  event.preventDefault();
  people[currentId].description = descriptionEl.value;
  modalEl.style.display = "none";
});

closeEl.addEventListener("click", function() {
  modalEl.style.display = "none";
});

//this is just to catch a click in the modal-container div... not 100% necessary...
document.addEventListener("click", function(event) {
  console.dir(event.target);
  if (event.target === document.querySelector("#modal-container")) {
    console.dir(event.target);
    modalEl.style.display = "none";
  }
});