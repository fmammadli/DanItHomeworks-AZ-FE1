let images = document.querySelectorAll('.image-to-show'),
    index = 0;

let slide = (elem) => {
    document.querySelector('.active').classList.remove('active');
    elem[index].classList.add('active');
    index++;
    if (index >= elem.length) {index = 0;}
};

let interval = setInterval('slide(images)', 10000);

let buttonStop = document.createElement('button'),
    buttonContinue = document.createElement('button');

buttonStop.innerHTML = "STOP";
buttonContinue.innerHTML = "Resume";

document.body.appendChild(buttonStop);
document.body.appendChild(buttonContinue);

buttonStop.addEventListener('click', () => {
    clearInterval(interval);
});
buttonContinue.addEventListener('click', () => {
    interval = setInterval('slide(images)', 10000);
});


// Theoretical questions:
//     The setTimeout & setInterval are the 2 timers functions of JavaScript.
//     They can be used to create functions that executes 1 time or unlimited times.
//     That is, if you want a function to execute 1 time then use .setTimeout(),
//     if you want to execute a function unlimited times then use .setInterval().
//     The clearTimeout() function in javascript clears the timeout which has been set by setTimeout()function before that.
