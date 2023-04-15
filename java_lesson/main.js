const li = document.querySelectorAll("aside ul li");

li.forEach(li=>{
    li.addEventListener("click" , function(){
        document.querySelector("li.active").classList.remove('active');
        document.querySelector("section.active").classList.remove('active');
        document.getElementById(`${li.className}`).classList.add('active');
        li.classList.add('active');
    })
})
document.querySelector(".nav-icon").addEventListener("click" , function(){
    const aside =document.querySelector("aside");
    const expand = aside.getAttribute("expand");
    if(expand == "true"){
        aside.setAttribute("expand" , "false");
    }else{
        aside.setAttribute("expand" , "true");
    }
})