let inputPass = document.getElementById("Password");
let refreshPass = document.querySelector("#refresh");
let copyPass = document.querySelector("#copy");
var passwordSize = document.querySelector("#Password-Size");

passwordSize.addEventListener("click", function () {
  function randomPassword() {
    let num =
      "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()+=";
    let randomPassword = "";
    let passwordLength = parseInt(passwordSize.value);
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * num.length);
      randomPassword += num[randomIndex];
    }

    return randomPassword;
  }
  refreshPass.addEventListener("click", generatePassword);

  function generatePassword() {
    //showing password in text field
    let randomP = randomPassword();
    inputPass.value = randomP;
    //clearing previous password div
    document.getElementById("Password").innerHTML = "";
    //adding new password to previous passwords div
    document.getElementById(
      "Password"
    ).innerHTML += `<p>${inputPass.value}</p>`;
  }

  copyPass.addEventListener("click", function () {
    navigator.clipboard.writeText(inputPass.value);
    let copied = document.createElement("copied");
    copied.style.position = "fixed";
    copied.style.top = "50%";
    copied.style.left = "50%";
    copied.textContent = "Copied!";
    copied.style.backgroundColor = "white";
    copied.style.color = "black";
    copied.style.borderRadius = "5px";
    copied.style.padding = "10px";
    copied.style.zIndex = "1000";
    copied.style.transition = "opacity 0.3s";
    copied.style.opacity = "1";
    copied.style.fontSize = "20px";
    copied.style.display = "block";
    copied.style.border = "1px solid black";
    copied.style.transform = "translate(-50%, -50%)";
    copied.style.pointerEvents = "none";
    document.body.appendChild(copied);
    setTimeout(() => {
      copied.style.opacity = "0";
      setTimeout(() => {
        copied.parentNode.removeChild(copied);
      }, 3000);
    }, 2000);
  });
});
