const modal = document.querySelector(".modal");
const login = document.querySelector(".login");
const input = document.querySelector("input");
const sign_in_form = document.querySelector(".sign-in-form");
const sign_up_form = document.querySelector(".sign-up-form");
const sign_in_block_btn = document.querySelector(".sign-in-block-btn");
const modal_block = document.querySelector(".modal-block");
const sign_in = document.querySelector(".sign-in");
const sign_up = document.querySelector(".sign-up");

const sign_in_block = document.querySelector(".sign-in-block");
const sign_in_btn = document.querySelector(".sign-in-btn");

const sign_in_email = document.querySelector(".sign-in-email");
const sign_in_password = document.querySelector(".sign-in-password");

const sign_up_btn = document.querySelector(".sign-up-btn");
const sign_up_block_btn = document.querySelector(".sign-up-block-btn");

const sign_up_input = document.querySelector(".sign-up-input");
const sign_up_email = document.querySelector(".sign-up-email");
const sign_up_password = document.querySelector(".sign-up-password");

sign_in_block_btn.addEventListener("click", () => {
  sign_in_block.classList.add("active");
  modal_block.classList.add("active");
  sign_in.classList.add("active");
  sign_up.classList.add("active");
});

sign_up_block_btn.addEventListener("click", () => {
  sign_in_block.classList.remove("active");
  modal_block.classList.remove("active");
  sign_in.classList.remove("active");
  sign_up.classList.remove("active");
});

login.addEventListener("click", () => {
  modal.classList.add("active");
});

sign_in_form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    sign_in_email.value == "xusanboyevomadbek@gmail.com" &&
    sign_in_password.value == "omad0211"
  ) {
    modal.classList.remove("active");
    sign_in_email.value = "";
    sign_in_password.value = "";
  } else {
    sign_in_email.classList.toggle("active");
    sign_in_password.classList.toggle("active");
  }
});

sign_up_form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    sign_up_input.value == "Omadbek" &&
    sign_up_email.value == "xusanboyevomadbek@gmail.com" &&
    sign_up_password.value == "omad0211")
     {
    modal.classList.remove("active");
    sign_up_input.value = "";
    sign_up_email.value = "";
    sign_up_password.value = "";
  } else {
    sign_up_input.classList.toggle("active");
    sign_up_email.classList.toggle("active");
    sign_up_password.classList.toggle("active");
  }
});
