// نام و نام خانوادگی (فقط فارسی)
const regexFullname = /^[آ-ی\s]+$/;

// شماره تماس (دقیقا ۱۱ رقم)
const regexPhone = /^\d{11}$/;

// کد پستی (۱ تا ۷ رقم)
const regexPostal = /^\d{1,7}$/;

// آدرس (باید شامل "خیابان" یا "کوچه" باشه و کاراکتر عجیب نداشته باشه)
const regexAddress = /^(?=.*(خیابان|کوچه))[آ-ی0-9\s،.-]+$/;

let usernameError = document.querySelector("#usernameError");
let phoneError = document.querySelector("#phoneError");
let postalcodeError = document.querySelector("#postalcode");
let adressError = document.querySelector("#adressError");

let form = document.querySelector("#registerForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let username = document.querySelector("#username");
  let phone = document.querySelector("#phone");
  let email = document.querySelector("#postalcode");
  let password = document.querySelector("#adress");
  let isValid = true;
  // username input
  if (!usernameRegex.test(username.value)) {
    usernameError.style.display = "block";
    isValid = false;
  } else {
    usernameError.style.display = "none";
  }
  // phone input
  if (!phoneRegex.test(phone.value)) {
    phone.style.display = "block";
    isValid = false;
  } else {
    phoneError.style.display = "none";
  }
  // postalcode input
  if (!postalcodeRegex.test(postalcode.value)) {
    postalcodeError.style.display = "block";
    isValid = false;
  } else {
    postalcode.style.display = "none";
  }
  // adress input
  if (!adressRegex.test(adress.value)) {
    passwordError.style.display = "block";
    isValid = false;
  } else {
    adress.style.display = "none";
  }

  if (isValid) {
    alert("ثبت نام شما با  موفقیت انجام شد");
    form.reset();
  }
});
