document.getElementById('btn-donate').addEventListener('click', function(){

    const donate_bg=document.getElementById('btn-donate');
    donate_bg.classList.add('bg-green-500');

    const history_bg = document.getElementById('btn-history');
    history_bg.classList.remove('bg-green-500');

    // const hideDonateSection= document.getElementById('donate-section');
    // hideDonateSection.classList.add('hidden');
    // document.getElementById('container').classList.remove('hidden');

    document.getElementById('donate_section').classList.remove('hidden');
    document.getElementById('history_container').classList.add('hidden');
    
    document.getElementById('blog_section').classList.add('hidden');
});

document.getElementById('btn-history').addEventListener('click', function(){
    const history_bg =document.getElementById('btn-history');
    history_bg.classList.add('bg-green-500');

    const donate_bg=document.getElementById('btn-donate');
    donate_bg.classList.remove('bg-green-500');

    document.getElementById('donate_section').classList.add('hidden');
    document.getElementById('history_container').classList.remove('hidden');

    document.getElementById('blog_section').classList.add('hidden');

})

document.getElementById('btn-blog').addEventListener('click',function(){

    document.getElementById('donate_section').classList.add('hidden');
    document.getElementById('history_container').classList.add('hidden');

    document.getElementById('blog_section').classList.remove('hidden');
})