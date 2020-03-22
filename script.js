function btn_click(id){
    first_input= document.getElementById("first_input");
    second_input= document.getElementById("second_input");
    third_input= document.getElementById("third_input");

    first_input_val = Number(first_input.value);
    second_input_val = second_input.value;
    third_input_val = Number(third_input.value);

    button_val = document.getElementById(id).value;

    if(validNum(button_val) == false){

    }else if(button_val == "C"){
        third_input.value = "";
        second_input.value = "";
        first_input.value = "";
    }
    else if(button_val == "<-"){
        first_input.value = first_input.value.slice(0,-1);
    }
    else if(button_val == "CE"){
        first_input.value = "";
    }
    else if(op(button_val)== true){
        third_input.value = first_input_val;
        second_input.value = button_val;
        first_input.value = "";
    }
    else if((second_input_val=="+" && id == "=") && 
    (first_input_val != "" && third_input_val != "")){
        third_input.value = "";
        second_input.value = "";
        first_input.value = add(first_input_val, third_input_val);
    }
    else if((second_input_val == "-" && id == "=") &&
    (first_input_val != "" && third_input_val !="")){
        third_input.value="";
        second_input.value=""; 
        first_input.value = subtract(first_input_val, third_input_val);
    }
    else if((second_input_val == "*" && id == "=") &&
    (first_input_val != "" && third_input_val !="")){
        third_input.value="";
        second_input.value=""; 
        first_input.value = multiply(first_input_val, third_input_val);
    }
    else if((second_input_val == "/" && id == "=") &&
    (first_input_val != "" && third_input_val !="")){
        third_input.value="";
        second_input.value=""; 
        first_input.value = divide(first_input_val, third_input_val);
    }
    else{
        first_input.value += button_val;
    }
}

function op(id){
    if(id=='+' || id=='-' || id=='/' || id=='*' || id=='%' || 
    id=='sqrt' || id=='1/X'){
        return true;
    }else{
        return false;
    }
}



function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num2-num1;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num2/num1;
}

function percent(num1, num2){
    return (num2*num1) * 100;
}

function sqrt(num1){
    return Math.sqrt(num1);
}

function validNum(num){
    try{
        return eval(num)
    }catch(err){

    }
}
    