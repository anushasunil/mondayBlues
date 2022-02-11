// const pageContents = document.querySelector(".page-contents");
const hamburgerNav = document.querySelector(".hamburger-nav");
const asideFilm = document.querySelector(".aside-film");
const asideNavigation = document.querySelector("aside");

hamburgerNav.addEventListener("click",()=>{
    asideNavigation.style.transform = "translateX(0rem)";
    asideFilm.style.display = "block";

})

asideFilm.addEventListener("click", ()=>{
    if(asideFilm.style.display === "block") {
        asideNavigation.style.transform = "translateX(-22rem)";
        asideFilm.style.display = "none";
    }
})