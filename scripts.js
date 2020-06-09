const container = document.getElementById("container");
const textBox = document.querySelector("#textOutput");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;    //3 secs
const holdTime = totalTime / 5;             //1.5 secs

breatheAnimation();

function breatheAnimation(){
    //set text and grow animation class
    textBox.innerText = "Breathe In";
    container.classList.remove("shrink");
    container.classList.add("grow");

    //wait 3 secs then run shrink class
    setTimeout(()=>{
        textBox.innerText="Hold";

        setTimeout(()=>{
            textBox.innerText="Breathe Out";
            container.className="container shrink";
        },holdTime);
    },breatheTime);
}

setInterval(breatheAnimation, totalTime);