const wrapper = document.querySelector(".wrapper");
const wrapper2 = document.querySelector(".wrapper--2");
const signupLink = document.querySelector(".signup");
const signinLink = document.querySelector(".signin");

const showPassword = document.querySelector(".field__eye");
const loginEmail = document.querySelector(".login--email");
const loginPassword = document.querySelector(".login__password");
const signupPassword = document.querySelector(".signup__password");
const confPassword = document.querySelector(".conf__password");
const signupBtn = document.querySelector(".signup__btn");
const errorMsg = document.querySelector(".field__error-msg");
const errorLoginMsg = document.querySelector(".field__login-error-msg");
const passwordLabel = document.querySelectorAll(".password__label");

const loginBtn = document.querySelector(".btn--login");
const labelLoginEmail = document.querySelector(".login-email-label");
const labelLoginpass = document.querySelector(".login-pass-label");

signupLink.addEventListener("click", () => {
  wrapper.classList.add("wrapper--click");
  wrapper2.classList.add("wrapper--2-click");
});

signinLink.addEventListener("click", () => {
  wrapper.classList.remove("wrapper--click");
  wrapper2.classList.remove("wrapper--2-click");
});

showPassword.addEventListener("click", () => {
  if (loginPassword.type === "password") loginPassword.type = "text";
  else {
    loginPassword.type = "password";
  }
});

signupBtn.addEventListener("click", () => {
  if (signupPassword.value !== confPassword.value) {
    errorMsg.classList.add("field__show-error-msg");
    signupPassword.style.border = "solid 1px rgb(255, 128, 0)";
    confPassword.style.border = "solid 1px rgb(255, 128, 0)";
    passwordLabel.forEach((label) => (label.style.color = "rgb(255, 128, 0)"));
  } else {
    errorMsg.classList.remove("field__show-error-msg");
    signupPassword.style.border = "solid 1px #55c57a";
    confPassword.style.border = "solid 1px #55c57a";
    passwordLabel.forEach((label) => (label.style.color = "#55c57a"));
  }
});


// login Check --------------------------------------------------



const loginState = "login success";
loginBtn.addEventListener("click", () => {
  if (loginState !== "login success") {
      loginEmail.style.border = "solid 1px rgb(255, 128, 0)";
      loginPassword.style.border = "solid 1px rgb(255, 128, 0)";
      labelLoginEmail.style.color = "rgb(255, 128, 0)";
      labelLoginpass.style.color = "rgb(255, 128, 0)";
      errorLoginMsg.classList.add("field__show-error-msg");
  } else {
      errorLoginMsg.classList.remove("field__show-error-msg");
      loginEmail.style.border = "solid 1px #55c57a";
      loginPassword.style.border = "solid 1px #55c57a";
      labelLoginEmail.style.color = "#55c57a"
      labelLoginpass.style.color = "#55c57a"
  }
});
