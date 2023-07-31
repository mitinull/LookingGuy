const switchButton = document.querySelector("#switch-button");

const lookingGuy = document.querySelector(".LOOKING_GUY");

switchButton.addEventListener("click", () => {
  if (lookingGuy.classList.contains("LOOKING_GUY--NORMAL")) {
    lookingGuy.classList.replace(
      "LOOKING_GUY--NORMAL",
      "LOOKING_GUY--VERTICAL"
    );
    lookingGuy.style.width = "70px";
  } else {
    lookingGuy.classList.replace(
      "LOOKING_GUY--VERTICAL",
      "LOOKING_GUY--NORMAL"
    );
    lookingGuy.style.width = "100px";
  }
});
