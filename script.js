
class PrevOperation{
    constructor(){
        this.prevOperation=undefined;
        this.clr = false;
        this.operation = "";
    }

    set prev(prev){
        this.prevOperation = prev;
    }
    get prevop(){
        return this.prevOperation;
    }
}

function update(){
        display.textContent = num.currNum;
    }

function add_digit(number){
        console.log(display.textContent,number);
        if(number == "." && display.textContent.includes('.'))return
        if((display.textContent == "0" && number !=".") || prevOperation.clr){
            prevOperation.prev = display.textContent;
            console.log("save before clear",prevOperation.prevop);
            display.textContent = number.toString();}
        else display.textContent = display.textContent.toString() + number.toString();
        prevOperation.clr=false;
    }

function _clear() {
        display.textContent = "0";
    }

function _save(operation){
    prevOperation.prev = display.textContent;
    console.log("saved ",prevOperation.prevOperation);
}

function calculate(operation,fNum,sNum){

    if(operation == "+"){
        console.log("before display",fNum , operation ,parseFloat(sNum))
        display.textContent = (parseFloat(fNum) + parseFloat(sNum)).toString();

    }
    else if(operation == "-"){
        console.log("before display",fNum , operation ,parseFloat(sNum))
        display.textContent = (parseFloat(fNum) - parseFloat(sNum)).toString();
    }
    else if(operation == "*"){
        console.log("before display",fNum , operation ,parseFloat(sNum))
        display.textContent = (parseFloat(fNum) * parseFloat(sNum)).toString();
    }
    else if(operation == "/"){
        console.log("before display",fNum , operation ,parseFloat(sNum))
        if(sNum == "0"){
            alert("can't divide by 0");
            return;
        }
        display.textContent = (parseFloat(fNum) / parseFloat(sNum)).toString();
    }

    prevOperation.operation=undefined;
    console.log("operation ",prevOperation.operation);
}

const prevOperation = new PrevOperation();
console.log(prevOperation.prevOperation);

const num_btns = document.querySelectorAll('.num_btn');
const display = document.querySelector('.display')
const operation_btns = document.querySelectorAll('.operation');
const eval = document.querySelectorAll(".eval");


eval.forEach(button => {
    button.addEventListener('click', () =>{
        console.log(prevOperation.operation,prevOperation.prevOperation,display.textContent)
        calculate(prevOperation.operation,prevOperation.prevOperation,display.textContent);
        prevOperation.prev = display.textContent;
        // _save(display.textContent);
    })
})

num_btns.forEach(button => {
    console.log("btn")
    button.addEventListener('click', function() {
        console.log(button.innerText)
        add_digit(button.innerText);
    })
})

operation_btns.forEach(button => {
    button.addEventListener('click', () =>{
        prevOperation.clr=true;
        if(prevOperation.prevOperation == undefined || prevOperation.operation == undefined){
            prevOperation.prev = display.textContent;
            // _save(display.textContent);
            prevOperation.operation = button.innerText;
        }
        else{
            console.log(prevOperation.operation,prevOperation.prevop,display.textContent)
            calculate(prevOperation.operation,prevOperation.prevop,display.textContent);
            prevOperation.operation = button.innerText;
        }
    })
})
