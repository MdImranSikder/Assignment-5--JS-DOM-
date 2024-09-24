//Nowakhali donate
document.getElementById('nowakhali_donate_btn').addEventListener('click',function(e){
  e.preventDefault();

  const available_amount=get_amount_field('available_account');
  const nowakhali_account=get_amount_field('nowkhali_account');
  const nowalhali_input= get_amount_from_input('noakhali_account_input');

  

  if(nowalhali_input>0 && available_amount>=nowalhali_input){
    const new_blance_nowakhali= nowakhali_account+nowalhali_input;
    const new_available_blance=available_amount-nowalhali_input;

    document.getElementById('available_account').innerText=new_available_blance;
    document.getElementById('nowkhali_account').innerText=new_blance_nowakhali;
  }

  else{
    alert("Value is not Valid");
  }

});

//feni 
document.getElementById('feni_donate_btn').addEventListener('click', function(e){
  e.preventDefault();

  const available_amount=get_amount_field('available_account');
  const feni_account=get_amount_field('feni_account');
  const feni_input_account=get_amount_from_input('feni_input_amount');

  if(feni_input_account>0 && available_amount >= feni_input_account ){
    const new_blance_feni=feni_account+feni_input_account;
    const new_available_blance=available_amount - feni_input_account;

    document.getElementById('available_account').innerText = new_available_blance;
    document.getElementById('feni_account').innerText = new_blance_feni;
  }

  else 
  {
    alert('Value is not valid');
  }
});

// student Protest

document.getElementById('student_Protest_Donate').addEventListener('click', function(e){
  e.preventDefault();

  const available_amount=get_amount_field('available_account');
  const student_account=get_amount_field('student_protest_account');
  const student_protest_input =get_amount_from_input('student_protest_input');

  if(student_protest_input>0 && available_amount>=student_protest_input){

    const new_blance_student_protest = student_account + student_protest_input;
    const new_available_blance = available_amount - student_protest_input;

    document.getElementById('available_account').innerText = new_available_blance;
    document.getElementById('student_protest_account').innerText = new_blance_student_protest;
  }

  else 
  {
    alert('Value is not valid');
  }
})