const contents = document.querySelectorAll(".content")
const listItems = document.querySelectorAll('nav ul li');


const hideColor = () => {
  contents.forEach((content) => content.classList.remove("show"))
}

const hideAllColor = () => {
  listItems.forEach((item) => item.classList.remove("active"))
}

listItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    hideColor();
    hideAllColor();
    item.classList.add("active");
    contents[index].classList.add("show")
  })
})
