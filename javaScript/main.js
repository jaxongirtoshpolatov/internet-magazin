let passInput = document.getElementById("frist-password");
let hideIcon = document.getElementById("hideIcon");

function showHide() {
  if (passInput.value == "" || passInput.value === " ") {
    console.log("Qiymat yo'q");
  } else if (passInput.type === "password") {
    passInput.setAttribute("type", "text");

    let hideIcon = document.getElementById("hideIcon");
    let iconPath = "./images/icon/eyebrow.png";
    hideIcon.src = iconPath;
  } else {
    passInput.setAttribute("type", "password");
    hideIcon.src = "./images/icon/view.png";
  }
}

let secondInput = document.getElementById("second-password");
console.log(secondInput);
let secondHideIcon = document.getElementById("secondHideIcon");
console.log(secondHideIcon);

function secondSHowHide() {
  if (secondInput.value == " " || secondInput.value === "") {
    console.log("Qiymat yo\'q");
  }else if(secondInput.type === 'password'){
    secondInput.setAttribute("type", "text");
    secondHideIcon.src = './images/icon/view.png';
  }else {
    secondInput.setAttribute("type", "password");
    secondHideIcon.src = './images/icon/eyebrow.png';
  }
}

let signUpBtn = document.getElementById('signUpBtn');
let modal = document.getElementById('signUpModal');
signUpBtn.addEventListener('click', ()=>{
    signUpBtn.style.display = 'inline-block';
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
    signUpBtn
})



