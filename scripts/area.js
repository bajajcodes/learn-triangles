const base = document.getElementById("base");
const height = document.getElementById("height");
const calculateAreaBtn = document.getElementById("calculateArea");
const message = document.getElementById("message");


function sendUpdate(msg){
    message.innerText = msg;
}

function checkSide(side){
    let val = Number(side.value);
    sendUpdate("");
    if(val === 0){
        sendUpdate(`${side.name} cannot be zero.`);
        return false;
    }else if(isNaN(val)){
        sendUpdate(`${side.name} cannot be word, only number type.`);
        return false;
    }
    return true;
}

function calculateArea(){
    sendUpdate("");
    if(checkSide(base) && checkSide(height)){
        let a = Number(base.value);
        let b = Number(height.value);
        console.log({a},{b});
        let c = (a*b)/2;
        sendUpdate(`Area of a triangle is:${c}`);
    }
}

calculateAreaBtn.addEventListener("click",calculateArea);