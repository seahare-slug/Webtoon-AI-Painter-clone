const autoPaintBtnCheckBox = document.querySelector("#autoPaintBtnCheckBox");
const autoPaintBtn = document.querySelector("#autoPaintBtn");

autoPaintBtnCheckBox.addEventListener("click", handleAutoPaint);

function handleAutoPaint() {
  if (autoPaintBtnCheckBox.checked) {
    autoPaintBtn.classList.remove("wrap-auto-and-paint-btn-abled");
    autoPaintBtn.classList.add("wrap-auto-and-paint-btn-disabled");
  } else {
    autoPaintBtn.classList.remove("wrap-auto-and-paint-btn-disabled");
    autoPaintBtn.classList.add("wrap-auto-and-paint-btn-abled");
  }
}
