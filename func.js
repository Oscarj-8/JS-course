const myform = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

const msg2 = document.querySelector(".err2");

myform.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.innerHTML = "Please enter all fields";
    msg.classList.add("err");
    setTimeout(() => {
      msg.remove();
    }, 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";
  }
}