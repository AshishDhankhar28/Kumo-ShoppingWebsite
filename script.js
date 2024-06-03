const header= document.querySelector("header");
const heart=document.querySelectorAll(".star>img");
const cross=document.querySelector(".cross");
const threecross=document.querySelector(".threecross");
const athreecross=document.querySelectorAll(".threecross a");


for(let i=0;i<4;i++){
    athreecross[i].addEventListener("click",function(){
        threecross.style.display="none"; 
        cross.src="./image/cart.png";
    })
}

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>0);
})

cross.addEventListener("click",function(){
    if (cross.src.includes("close")){
        cross.src="./image/cart.png";
        threecross.style.display="none"; 
    }
    else{
        cross.src="./image/close.png";
        threecross.style.display="block";
    }
})

for(let i=0;i<7;i++){
    heart[i].addEventListener("click",function(){
        if(heart[i].src.includes("redheart")){
            heart[i].src="./image/heart.png";
        }
        else{
            heart[i].src="./image/redheart.png";
        }
        
    })
}

