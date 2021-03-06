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

const paintColorModelBtn = document.querySelector("#paintColorModelBtn");
const paintColorModelHint = document.querySelector("#paintColorModelHint");
const paintExitBtn = document.querySelector("#paintExitBtn");
const paintExitHint = document.querySelector("#paintExitHint");
// const autoPaintBtn = document.querySelector("#autoPaintBtn");
const autoPaintBtnHint = document.querySelector("#autoPaintBtnHint");

paintColorModelBtn.addEventListener("mouseenter", viewColorModelHint);
paintColorModelBtn.addEventListener("mouseleave", hideColorModelHint);
paintExitBtn.addEventListener("mouseenter", viewExitHint);
paintExitBtn.addEventListener("mouseleave", hideExitHint);
autoPaintBtn.addEventListener("mouseenter", viewAutoPaintBtnHint);
autoPaintBtn.addEventListener("mouseleave", hideAutoPaintBtnHint);

function viewExitHint() {
  paintExitHint.classList.remove("hide-element");
  paintExitHint.style.top =
    paintExitBtn.getBoundingClientRect().top + 40 + "px";
  paintExitHint.style.left = paintExitBtn.getBoundingClientRect().left + "px";
}

function hideExitHint() {
  paintExitHint.classList.add("hide-element");
}

function viewColorModelHint() {
  paintColorModelHint.classList.remove("hide-element");
  paintColorModelHint.style.top =
    paintColorModelBtn.getBoundingClientRect().top - 40 + "px";
  paintColorModelHint.style.left =
    paintColorModelBtn.getBoundingClientRect().left + "px";
}

function hideColorModelHint() {
  paintColorModelHint.classList.add("hide-element");
}

function viewAutoPaintBtnHint() {
  autoPaintBtnHint.classList.remove("hide-element");
  autoPaintBtnHint.style.top =
    autoPaintBtn.getBoundingClientRect().top - 60 + "px";
  autoPaintBtnHint.style.left =
    autoPaintBtn.getBoundingClientRect().left + "px";
}

function hideAutoPaintBtnHint() {
  autoPaintBtnHint.classList.add("hide-element");
}
