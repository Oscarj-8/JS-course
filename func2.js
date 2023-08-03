const h2 = document.querySelector("h2");
const nameLabel = document.querySelector(".namel");
const emailLabel = document.querySelector(".emaill");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const form = document.querySelector(".myform");
const btn = document.querySelector(".btn");
const msg = document.querySelector(".msg");
const users = document.querySelector(".users");

nameLabel.style.fontWeight = "bold";
emailLabel.style.fontWeight = "bold";
emailLabel.innerHTML = "Email:";

form.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("err");
    msg.innerHTML = "Please fill all the required fields";

    setTimeout(() => {
      msg.remove();
    }, 2000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    users.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";
  }
}
