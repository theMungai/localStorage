

let nameContainer = JSON.parse(localStorage.getItem("container")) || {};

const memberName = document.querySelector(".full-name");
const displayName = document.querySelector(".name-result");
const printBtn = document.querySelector(".print");


if (nameContainer.name) {
    displayName.textContent = nameContainer.name;
    memberName.value = nameContainer.name; 
}

printBtn.addEventListener("click", () => {
    displayName.textContent = memberName.value;

    nameContainer.name = memberName.value;
    localStorage.setItem("container", JSON.stringify(nameContainer));
});
