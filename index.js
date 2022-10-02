let homeScore=document.getElementById("Home-Score")


let result1=0;

function hOne(){
    result1+=1;
    homeScore.textContent=result1;
}

function hTwo(){
    result1+=2;
    homeScore.textContent=result1;
}

function hThree(){
    result1+=3;
    homeScore.textContent=result1;
}

let guestScore=document.getElementById("guest-score")
let result2=0;
function gOne(){
    result2+=1;
    guestScore.textContent=result2;
}

function gTwo(){
    result2+=2;
    guestScore.textContent=result2;
}

function gThree(){
    result2+=3;
    guestScore.textContent=result2;
}


