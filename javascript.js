var clicks = 0;

const counter = document.querySelector('#counter');

//Operators
const add = document. querySelector('#add');
const subtract = document.querySelector('#subtract');
const reset = document.querySelector('#reset');

//Functions
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

function checkValue(){
    if (clicks >0){
        document.body.style.backgroundColor = "lightgreen";
    }else if(clicks == 0 ){
        document.body.style.backgroundColor = "white";
    }else{
        document.body.style.backgroundColor = "maroon";
    }
}

counter.innerHTML = clicks;

add.addEventListener('click',() => {
    onAdd();
    checkValue();
});

subtract.addEventListener('click',() => {
    onSub();
    checkValue();
});

reset.addEventListener('click',() => {
    onReset();
    checkValue();
});

