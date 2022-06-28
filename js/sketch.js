const modalHandleIconArray = document.querySelectorAll(".modal-handle-icon");
const wrapModalSideMenu = document.querySelector(".wrap-modal-side-menu");
const body = document.querySelector("body");

modalHandleIconArray.forEach((modalHandleIcon) => {
  modalHandleIcon.addEventListener("click", function () {
    body.classList.toggle("disable-scroll");
    wrapModalSideMenu.classList.toggle("hide-element");
  });
});

const sketchSection = document.querySelector(".sketch-section");
const sampleSketchNonColoredArray = document.querySelectorAll(
  ".sample-sketch-non-colored"
);

sampleSketchNonColoredArray.forEach((sample) => {
  sample.addEventListener("click", async function () {
    sketchSection.innerHTML = await fetchHtmlAsText("/page/sketch.html");
    conveyClickedSketchSrc(sample);
  });
});

async function fetchHtmlAsText(url) {
  return await (await fetch(url)).text();
}

const toolDisabledArray = document.querySelectorAll(".tool-disabled");
const disabledAttributeArray = document.querySelectorAll(
  "button[disabled], input[disabled]"
);

function changeDisabledBtnToAbledBtn() {
  toolDisabledArray.forEach((element) => {
    element.classList.remove("tool-disabled");
  });
  disabledAttributeArray.forEach((element) => {
    element.removeAttribute("disabled");
  });
}
