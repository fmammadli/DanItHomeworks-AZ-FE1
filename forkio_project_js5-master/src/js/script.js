let burgerMenu = document.getElementsByClassName('burger__menu')[0];
let burgerMenuClosed = document.getElementsByClassName('burger__menu-closed')[0]
let nav = document.getElementsByClassName('navbar__nav')[0];

    burgerMenu.onclick = () => {
        burgerMenu.classList.toggle('active');
        burgerMenuClosed.classList.toggle('active');
        nav.classList.toggle('active');
}

burgerMenuClosed.onclick = () => {
    burgerMenu.classList.toggle('active');
    burgerMenuClosed.classList.toggle('active');
    nav.classList.toggle('active');
}