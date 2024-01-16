document.addEventListener("DOMContentLoaded", function () {
    let num = document.getElementById("in");
    let result = document.getElementById("res");
    let submit = document.getElementById("mySubmit");
    let you = document.getElementById("you");

    submit.onclick = function(){
        let inputValue = parseFloat(num.value);

        if(inputValue >= 1 && inputValue <= 10){
            let initvalue = inputValue;
            inputValue = Math.floor(Math.random() * 10) + 1;
            you.textContent = `You Entered: ${initvalue}`;
            result.textContent = `You Got: ${inputValue}`;

            if(inputValue === initvalue){
                alert('You WON!, You are lucky');
            }
        } else {
            alert("Enter correct input only 1-10 are allowed");
        }
    }
});
