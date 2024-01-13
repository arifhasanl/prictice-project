const opneMenu = document.getElementById("open-menu");
const menuItems = document.getElementById("re-menu");
const closeMenu = document.getElementById("close-menu");
opneMenu.addEventListener("click", () => {
  if (menuItems.style.display === "block") {
    menuItems.style.display = "none";
    closeMenu.style.display = "block";
  } else {
    menuItems.style.display = "block";
    opneMenu.style.display = "none";
    closeMenu.style.display = "block";
  }
});
closeMenu.addEventListener("click", () => {
  if (closeMenu.style.display === "block") {
    menuItems.style.display = "none";
    closeMenu.style.display = "none";
    opneMenu.style.display = "block";
  } else {
    menuItems.style.display = "block";
  }
});
