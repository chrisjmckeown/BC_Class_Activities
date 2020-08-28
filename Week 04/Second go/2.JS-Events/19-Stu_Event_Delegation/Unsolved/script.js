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

var log = console.log;
function addPersonToList(event) {
  event.preventDefault();
  var name = nameEl.value;
  var li = document.createElement("li");
  li.id = people.length;
  li.innerHTML = name + " <button>edit</button>";
  people.push({ name: name });
  peopleListEl.append(li);
}

function close() {
  modalEl.style.display = "none";
}

function handleClick(event) {
  // Use event delegation to handle when the user clicks "edit"
  event.preventDefault();
  if(event.target.matches("button")) {
    modalEl.style.display = "block";
    console.dir(event.target);
    var person = event.target.parentNode.firstChild.textContent;
    currentId = event.target.parentNode.id;
    log(people);
    var selectedPerson = people[currentId];
    log(selectedPerson);
    var name = people[currentId].name;
    var description = people[currentId].description;
    modalNameEl.textContent = name;
    if(description) {
      descriptionEl.value = description;
    } else {
      descriptionEl.value = "";
    }
  }
}

saveBtn.addEventListener("click", function(event){
  var selectedPerson = people[currentId];
  selectedPerson.description = descriptionEl.value
  close();
});

closeEl.addEventListener("click", close);
addBtn.addEventListener("click", addPersonToList);
peopleListEl.addEventListener("click", handleClick);
document.addEventListener("click", function(event){
  //log(event.target);
  if (event.target === modalEl) {
    log(event.target);
    close();
  }
});

// * In this activity, we are going to create a friends list that allows us to edit information about that friend in a modal.

// * Take a moment to study the code in `index.html`. You will not need to add any additional code to this file. Additionally, all of the CSS has been provided.

// * In `script.js`, add support the following features: 

//   1. When the `Add Person` button is clicked, the person should be added to both the people array and the list elements.

//   2. If `edit` is clicked, event delegation should be used to handle the click event.

//   3. When the user clicks on edit, the modal should appear with the modal header property already populated with the person's name. If a description exists, the textarea should be populated with the person's description. If not, the description should be left blank.

//   4. When the `save` button is clicked, the description of the current person should be updated in the people array.

// * **Bonus**: Use event delegation to make the modal close if the user clicks away from the modal.
