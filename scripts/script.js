const password = document.querySelector('#password');
const passConf = document.querySelector('#passConf');

password.addEventListener('focusout', passConfirm);
passConf.addEventListener('focusout', passConfirm);

function passConfirm() {
  console.log("PASSCONFIRM EVENT");
  if (password.value !== "" || passConf.value !== "") {
    if (password.value === passConf.value) {
      password.setCustomValidity("");
      passConf.setCustomValidity("");
    } else {
      password.setCustomValidity("Passwords do not match");
      passConf.setCustomValidity("Passwords do not match");
    }
  }
};