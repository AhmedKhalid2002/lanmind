const menue=document.getElementById('menu');
const menuIcon=document.getElementById("menuIcon")

menuIcon.addEventListener('click',()=>{
    console.log("Ahmed");
    if(menue.classList.contains('hidden')){
        menue.classList.remove('hidden')
    }else{
        menue.classList.add("hidden")
    }
})