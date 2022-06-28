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

const zoomMinus = document.querySelector("#zoomMinus");
const zoomPlus = document.querySelector("#zoomPlus");
const zoomCurrentValue = document.querySelector("#zoomCurrentValue");

zoomMinus.addEventListener("click", function () {
  if (zoomCurrentValue.innerText > 100) {
    zoomCurrentValue.innerText = Number(zoomCurrentValue.innerText) - 10;
  }
});

zoomPlus.addEventListener("click", function () {
  zoomCurrentValue.innerText = Number(zoomCurrentValue.innerText) + 10;
});

