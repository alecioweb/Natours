let navCheckbox = document.getElementById("navi-toggle");
const navLinks = document.querySelectorAll(".navigation__link");
const naviNav = document.querySelector(".navigation__nav");
const naviBack = document.querySelector(".navigation__background");
const navibtn = document.querySelector(".navigation__button");
// const naviBack = document.querySelector(".navigation__background");
navLinks.forEach((link) => {
  link.onclick = function () {
    navCheckbox.checked = false;
  };
});

const allLinks = document.querySelectorAll("a:not(.portab)");
allLinks.forEach(function (anchor) {
  //specifying that all elements inside allLinks is a link
  //function(link) above. link is function name
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const href = anchor.getAttribute("href");

    //scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (anchor.classList.contains("navigation__link"))
      naviNav.classList.add("transition-none");
    naviBack.classList.add("transition-none");

    //close mobile nav
  });
});

navibtn.addEventListener("click", function () {
  naviNav.classList.remove("transition-none");
  naviBack.classList.remove("transition-none");
});
