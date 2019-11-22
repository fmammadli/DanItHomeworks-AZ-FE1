//Dropdown menu

let menuBtn = document.getElementById('menuBtn');
let menuContainer = document.getElementById('menuContainer');

let menuIconClosed = "header__menu-icon closed"; //class name for closed button
let menuIconOpened = "header__menu-icon opened"; //class name for opened button
let menuContClosed = "header__menu-container closed"; //class name for closed menu
let menuContOpened = "header__menu-container opened"; //class name for opened menu

menuBtn.onclick = function() {
    if (menuBtn.className == menuIconClosed) {
        menuBtn.className = menuIconOpened;
        menuContainer.className = menuContOpened;
    } else if (menuBtn.className == menuIconOpened) {
        menuBtn.className = menuIconClosed;
        menuContainer.className = menuContClosed;
    }
};