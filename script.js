var inputField= document.getElementById('inputField');
var Btn= document.querySelectorAll('.btn');

function onClick(Val){
    inputField.value += Val;
}

function result(){
    let output = eval(inputField.value);
    inputField.value = output;
}

function Delete(){
    inputField.value=' '
}

