const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email: email,
      password: password,
    };

    console.log(formData);

    form.reset();
  }
});

const emailInput = form.elements.email;
const passwordInput = form.elements.password;

emailInput.addEventListener("focus", () => {
  emailInput.placeholder = "Type area";
});

passwordInput.addEventListener("focus", () => {
  passwordInput.placeholder = "Type area";
});

emailInput.addEventListener("blur", () => {
  emailInput.placeholder = "";
});

passwordInput.addEventListener("blur", () => {
  passwordInput.placeholder = "";
});
