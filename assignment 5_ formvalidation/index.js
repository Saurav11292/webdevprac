const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_confirm = document.getElementById("password_confirm");



form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const input = element.parentElement;
  const errorDisplay = input.querySelector(".error");

  errorDisplay.innerText = message;
  input.classList.add("error");
  input.classList.remove("success");
};

const setSuccess = (element) => {
  const input = element.parentElement;
  const errorDisplay = input.querySelector("error");

  errorDisplay.innerText = '';
  input.classList.add("success");
  input.classList.remove("error");
};
const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password_confirmValue = password_confirm.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else {
    setSuccess(email);
  }
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length) {
    setError(password, "Password must be atleast 8 character");
  } else {
    setSuccess(password);
  }
  if (password_confirmValue === "") {
    setError(password_confirm, "password_confirm is required");
  } else if (password_confirmValue !== passwordValue) {
    setError(password_confirm, "Password does't match");
  } else {
    setSuccess(password_confirm);
  }
};
