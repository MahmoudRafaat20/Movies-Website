toggle = document.getElementById("toggle");
list = document.getElementById("list");
header = document.getElementById("header");



toggle.addEventListener('click', function () {
    if (list.style.display === 'none') {
        list.style.display = 'flex';
        
    } else {
        list.style.display = 'none';
    }
})

window.addEventListener('scroll',function(){
if(window.scrollY==0){
    header.classList.add('top');
}else{
    header.classList.remove('top');
}
})
