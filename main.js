
function display(val){

    document.getElementById('f-num').value+= val;
    return val;

}
function solve(){

    let x = document.getElementById('f-num').value

    let y = eval(x);

    document.getElementById('f-num').value = y

    return y

}
function clearScreen(){

    document.getElementById('result').value = ''

}

