function trocaModo(){
    trocaClasses();
    trocaTextos();
}

function trocaClasses(){
    BUTTON.classList.toggle("dark-mode");
    H1.classList.toggle("dark-mode");
    BODY.classList.toggle("dark-mode");
    FOOTER.classList.toggle("dark-mode");
}

function trocaTextos(){
    if(BODY.classList.contains('dark-mode')){
        BUTTON.innerHTML = "Light Mode";
        H1.innerHTML = "Dark Mode: On";
        
    }
    else{
        BUTTON.innerHTML = "Dark Mode";
        H1.innerHTML = "Light Mode: On";
    }
}

const BUTTON = document.getElementById('btn');
const H1 = document.getElementById('mode');
const BODY = document.getElementsByTagName('body')[0];
const FOOTER = document.getElementsByTagName('footer')[0];



BUTTON.addEventListener("click", trocaModo);