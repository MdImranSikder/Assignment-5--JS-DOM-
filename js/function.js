function get_amount_field(id){
    const text=document.getElementById(id).innerText;
    const number=parseFloat(text);
    return number;
}

function get_amount_from_input(id){
    const text=document.getElementById(id).value;
    const number=parseFloat(text);
    return number;
}