

const input = document.querySelector("#add-input");
const inputMessage = document.querySelector("#input-message");
const btn = document.querySelector("#add-btn");
const list = document.querySelector("#list");


btn.addEventListener("click", function () {
  if (input.value == "") {
    inputMessage.textContent = "Please enter product!";
    setTimeout(() => {
      inputMessage.textContent = "";
    }, 4000);
    return;
  }

  console.log("dskldkjshdk");
});

