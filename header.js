var header = document.getElementById("header");

window.addEventListener("scroll", ()=> {

    var scroll = window.scrollY

    if (scroll>10) {
        header.style.backgroundColor = "rgba(0, 0, 0)"
        header.style.transition = "0.5s"
    } else {
        header.style.backgroundColor = "transparent"
    }

})