let playBtn=document.querySelector(".play-button");
let infoBtn=document.querySelector(".howToPlay-button");
let powers=["skip.png","delete.png","shield.png"];
let up1=0;
let first=document.querySelector(".first-upper");

setInterval(()=>{
    if(up1==0){
        up1=1;
        first.style.backgroundImage='url("delete.png")';
        first.style.transition="all 1s ease-in-out";
    }else if(up1==1){
        first.style.transition="all 1s ease-in-out";
        up1=2;
        first.style.backgroundImage='url("shield.png")';
    }else if(up1==2){
        first.style.transition="all 1s ease-in-out";
        up1=0;
        first.style.backgroundImage='url("skip.png")';
    }
},1000);
playBtn.addEventListener("mouseover",()=>{
    playBtn.style.backgroundColor="#0D1B2A";
    playBtn.style.border="8px solid #E0E1DD";
    playBtn.style.color="#E0E1DD";
});

playBtn.addEventListener("mouseout",()=>{
    playBtn.style.backgroundColor="#E0E1DD";
    playBtn.style.border="8px solid #0D1B2A";
    playBtn.style.color="#0D1B2A";
});

infoBtn.addEventListener("mouseover",()=>{
    infoBtn.style.backgroundColor="#0D1B2A";
    infoBtn.style.border="8px solid #E0E1DD";
    infoBtn.style.color="#E0E1DD";
});

infoBtn.addEventListener("mouseout",()=>{
    infoBtn.style.backgroundColor="#E0E1DD";
    infoBtn.style.border="8px solid #0D1B2A";
    infoBtn.style.color="#0D1B2A";
});