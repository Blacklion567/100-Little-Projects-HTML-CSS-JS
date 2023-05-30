const panels = document.querySelectorAll(".panel");
panels.forEach((bandev) => {
  bandev.addEventListener("click", () => {
    removeActiveClasses();
    bandev.classList.add("active");
  });
});
const removeActiveClasses = () => {
  panels.forEach((bandev) => {
    bandev.classList.remove("active");
  });
};
