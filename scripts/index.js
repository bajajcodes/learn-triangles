const angleA = document.getElementById("angle-a");
const angleC = document.getElementById("angle-c");
const angleB = document.getElementById("angle-b");
const isTriangleBtn = document.getElementById("is-triangle");
const message = document.getElementById("istrop");


function checkAngle(angle){
       updateMessage("");
       let value = Number(angle.value);
       console.log({value},angle.name);
        if(value === 0){
            updateMessage(`Angle ${angle.name} cannot be zero`);
            return false;
        }else if(isNaN(value)){
            updateMessage(`Angle ${angle.name} cannot be words`);
            return false;
        }
        return true;
}

function updateMessage(msg){
    message.innerText = msg;
}

function solveAngle(a,b,c){
    let sumOfAngles = a+b+c;
    if(!(sumOfAngles <= 180)){
        return false;
    }
    return true;
}

function isTriangle(){
    
    updateMessage("");

    if(checkAngle(angleA) && checkAngle(angleB) && checkAngle(angleC)){
            let a = Number(angleA.value);
            let b = Number(angleB.value);
            let c = Number(angleC.value);
            if(solveAngle(a,b,c)){
                updateMessage("It's a traingle.");
            }else{
                updateMessage("Not a triangle.");
            }   
    }
}

isTriangleBtn.addEventListener("click",isTriangle);
