const navBar = document.getElementById("nav-bar");
const navName = document.getElementById("nav-name");
const links = document.getElementsByClassName("links");
console.log(links);
window.addEventListener("scroll", function () {
  const scrollHeight = this.window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navBar.classList.add("nav-container-fixed");
    navName.style.color = "gold";
    for (i = 0, len = links.length; i < len; i++) {
      links[i].style.color = "gold";
    }
  } else {
    navBar.classList.remove("nav-container-fixed");
    navName.style.color = "white";
    for (i = 0, len = links.length; i < len; i++) {
      links[i].style.color = "white";
    }
  }
});
