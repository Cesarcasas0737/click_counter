var clicks = 0;

const counter = document.querySelector('#counter');
const add = document. querySelector('#add');
const subtract = document.querySelector('#subtract');
const reset = document.querySelector('#reset');


function onAdd(){
    clicks += 1;
    counter.innerHTML = clicks;
    console.log(clicks);
}

function onSub(){
    clicks -= 1;
    counter.innerHTML = clicks;
    console.log(clicks);
}

function onReset(){
    clicks = 0;
    counter.innerHTML = clicks;
    console.log(clicks);
}

counter.innerHTML = clicks;
add.addEventListener('click',() => {
    onAdd();
});

subtract.addEventListener('click',() => {
    onSub();
});

reset.addEventListener('click',() => {
    onReset();
});

