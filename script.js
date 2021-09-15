


class calculate{
    constructor(equation){
        this.equation=equation;
    }

    solve(){
        return null;
    }

}

function add_digit(digit){
    console.log(digit);
    if(document.querySelector(".display").textContent == 0)document.querySelector(".display").textContent = digit
    else{
        document.querySelector(".display").textContent += digit;
    } 
}