let button = document.createElement('button');
document.body.appendChild(button);
button.innerText = 'change thema';
button.style.cssText =
    `position: absolute;
top: 60px;
font-size: 30px;
border-radius: 5px;
left: 500px;
color: green;
background: #defdde;`;

let body = document.getElementsByTagName('body')[0];

let navigation = document.getElementsByClassName('all-slot')[0];
console.log('navigation', navigation)

function newColors() {
    body.style.backgroundColor = '#bafacc';
    navigation.style.backgroundColor = '#ba7a6c';
    button.className = 'yes'
}

function oldColors() {
    body.style.backgroundColor = '';
    navigation.style.backgroundColor = '';
    button.className = ''
}

button.onclick = (() => {
    if (!button.className) {
        localStorage.setItem('newThema', 'yes')
        newColors()
    } else {
        oldColors()
        localStorage.setItem('newThema', 'no')
    }
})

if(localStorage.getItem('newThema') === 'yes'){
    newColors()
}
