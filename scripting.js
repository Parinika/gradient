var gradient = document.querySelector('#gradient');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var text = document.querySelector('#codee');
var type = document.getElementById('gradtype');
function setGradient()
{
    gradient.style.background = "linear-gradient(" + type.value + "," + color1.value + "," + color2.value + ")";
    if(type.value == "radial"){
        gradient.style.background = "radial-gradient(" + color1.value + "," + color2.value + ")";
    }
    text.innerText = gradient.style.background;
    
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
type.addEventListener("input", setGradient);
