var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

var log = console.log;
function renderLastRegistered() {
  // Fill in code here to retrieve the last email and password.
  // If they are null, return early from this function
  // Else set the text of the userEmailSpan and userPasswordSpan 
  // to the corresponding values form local storgage

  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");

  if (!email || !password) {
    userEmailSpan.textContent = "Not set";
    userPasswordSpan.textContent = "Not set";
    return;
  }

  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;
}

var user = localStorage.getItem("email");
var user = localStorage.getItem("password");

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();

  var email = emailInput.value;
  var password = passwordInput.value;

  localStorage.setItem("email", "");
  localStorage.setItem("password", "");
  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    // Save email and password to localStorage and render the last registered.
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    renderLastRegistered();
  }
});
// ## Instructions

// * In your `signUpButton` event listener you will need to:

//   * Save the user to localStorage.

// * In the `renderLastRegistered()` function you will need to:

//   * Fill in code here to retrieve the last registered credentials from local storage.

//   * If the last registered is null, return early from this function.

//   * Else set the text of the `userEmailSpan`, `userPasswordSpan` to their corresponding values from local storage.

// ## Hints

// * Make sure you call `renderLastRegistered()` after you set your `localStorage`.
