var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    
    if(currentNumber >= 10){
        document.getElementsByName('adicionar').disabled = true;
    }
    else{
        if((currentNumber + 1) < 0){
            document.getElementById('currentNumber').style.cssText = 'color:red';
            currentNumber = currentNumber + 1;
        }
        else{
            document.getElementById('currentNumber').style.cssText = 'color: black';
            currentNumber = currentNumber + 1;
        }
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement(){
    
    if(currentNumber <= -10){
        document.getElementsByName('subtrair').disabled = true;
    }
    else{
        if((currentNumber - 1) < 0){
            document.getElementById('currentNumber').style.cssText = "color: red";
            currentNumber = currentNumber - 1;
        }
        else{
            document.getElementById('currentNumber').style.cssText = 'color: black';
            currentNumber = currentNumber - 1;
        }
        currentNumberWrapper.innerHTML = currentNumber;
    }
}