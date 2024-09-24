// const container= document.getElementById('container');

// function historyMaker(amount,name){
//    const li= document.createElement('p');
//    li.classList.add('shadow', 'lg:h-20', 'lg:w-1/2','mx-auto','mt-10','p-4','text-lg','font-semibold','bg-gray-300');
//       li.innerHTML=`<li class=" list-none"> <span>${amount} is donated  ${name} </span></li>
//       <p> ${new Date() }</p>


//     `
//     container.appendChild(li);
// }



const history_container= document.getElementById('history_container');
function transection_system(value, title){
    const add_transection=document.createElement('p');
    add_transection.classList.add('shadow', 'lg:h-20', 'lg:w-1/2','mx-auto','mt-10','p-4','text-lg','font-semibold','bg-blue-300','rounded-s-md');
    add_transection.innerHTML =`<p>${value} is ${title}
    <p class='from-neutral-400'> ${new Date() }</p>`;
    
   // document.appendChild(history_container);
   //add_transection.appendChild(history_container);
   history_container.appendChild(add_transection);
}