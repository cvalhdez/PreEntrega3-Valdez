const menuToggle = document.querySelector(".menuToggle")
const navMenu = document.querySelector(".navMenu")
const gridContainer = document.querySelector(".gridContainer")
menuToggle.addEventListener("click", () =>{
  navMenu.classList.toggle("navMenu_visible")
  gridContainer.classList.toggle("noScrollBody")
})