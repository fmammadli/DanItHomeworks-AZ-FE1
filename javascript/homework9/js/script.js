let tabs;
let content;
function ready () {
    tabs = document.querySelectorAll('.tabs-title');
    content = document.querySelectorAll('.tabs-cont');
    hideTabsContent(1);
};

function hideTabsContent(a) {
    for (let i = a; i < content.length; i++){
        content[i].classList.remove('show');
        content[i].classList.add('hide');
        tabs[i].classList.remove('active')
    }
}

document.getElementById('btns').onclick = function (event) {
    let target = event.target;
    for (let i = 0; i < tabs.length; i ++) {
        if (target === tabs[i]) {
            showTabsContent (i);
            break;
        }
    }
};
function showTabsContent (b) {
    if (content[b].classList.contains('hide')) {
        hideTabsContent(0);
        tabs[b].classList.add('active');
        content[b].classList.remove('hide');
        content[b].classList.add('show');
    }
}


document.addEventListener("DOMContentLoaded", ready);
