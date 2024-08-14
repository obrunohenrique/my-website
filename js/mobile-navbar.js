function show_navbar() {
    let mobilemenu = document.querySelector("ul.nav-list");

    if (mobilemenu.classList.contains("active")) {
        mobilemenu.classList.remove('active')
    } else {
        mobilemenu.classList.add("active")
    }
}