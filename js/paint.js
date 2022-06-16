const modalHandleIconArray = document.querySelectorAll(".modal-handle-icon");
const wrapModalSideMenu = document.querySelector(".wrap-modal-side-menu");
const body = document.querySelector("body");

modalHandleIconArray.forEach((modalHandleIcon) => {
  modalHandleIcon.addEventListener("click", function () {
    body.classList.toggle("disable-scroll");
    wrapModalSideMenu.classList.toggle("hide-element");
  });
});
