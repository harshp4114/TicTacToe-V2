let playBtn=document.querySelector(".play-button");
let infoBtn=document.querySelector(".howToPlay-button");
let closeBtn=document.querySelector(".close-btn");
let closeBtnMedia=document.querySelector(".close-btn-media");
let information=document.querySelector(".information");
let allInfoTxt=document.querySelector(".all-info-text");
let powers=["skip.png","delete.png","shield.png"];
let up1=0;
let firstupSymbol=document.querySelector(".firstup-symbol");
let firstupName=document.querySelector(".firstup-name");
let firstup=document.querySelector(".first-upper");
let up2=0;
let secondupSymbol=document.querySelector(".secondup-symbol");
let secondupName=document.querySelector(".secondup-name");
let secondup=document.querySelector(".second-upper");
let up3=0;
let thirdupSymbol=document.querySelector(".thirdup-symbol");
let thirdupName=document.querySelector(".thirdup-name");
let thirdup=document.querySelector(".third-upper");
let up4=0;
let fourthupSymbol=document.querySelector(".fourthup-symbol");
let fourthupName=document.querySelector(".fourthup-name");
let fourthup=document.querySelector(".fourth-upper");
let up5=0;
let fifthupSymbol=document.querySelector(".fifthup-symbol");
let fifthupName=document.querySelector(".fifthup-name");
let fifthup=document.querySelector(".fifth-upper");
let up6=0;
let sixthupSymbol=document.querySelector(".sixthup-symbol");
let sixthupName=document.querySelector(".sixthup-name");
let sixthup=document.querySelector(".sixth-upper");
let up7=0;
let seventhupSymbol=document.querySelector(".seventhup-symbol");
let seventhupName=document.querySelector(".seventhup-name");
let seventhup=document.querySelector(".seventh-upper");
let up8=0;
let eigthupSymbol=document.querySelector(".eigthup-symbol");
let eigthupName=document.querySelector(".eigthup-name");
let eigthup=document.querySelector(".eigth-upper");
let lw1=0;
let firstlwSymbol=document.querySelector(".firstlw-symbol");
let firstlwName=document.querySelector(".firstlw-name");
let firstlw=document.querySelector(".first-lower");
let lw2=0;
let secondlwSymbol=document.querySelector(".secondlw-symbol");
let secondlwName=document.querySelector(".secondlw-name");
let secondlw=document.querySelector(".second-lower");
let lw3=0;
let thirdlwSymbol=document.querySelector(".thirdlw-symbol");
let thirdlwName=document.querySelector(".thirdlw-name");
let thirdlw=document.querySelector(".third-lower");
let lw4=0;
let fourthlwSymbol=document.querySelector(".fourthlw-symbol");
let fourthlwName=document.querySelector(".fourthlw-name");
let fourthlw=document.querySelector(".fourth-lower");
let lw5=0;
let fifthlwSymbol=document.querySelector(".fifthlw-symbol");
let fifthlwName=document.querySelector(".fifthlw-name");
let fifthlw=document.querySelector(".fifth-lower");
let lw6=0;
let sixthlwSymbol=document.querySelector(".sixthlw-symbol");
let sixthlwName=document.querySelector(".sixthlw-name");
let sixthlw=document.querySelector(".sixth-lower");
let lw7=0;
let seventhlwSymbol=document.querySelector(".seventhlw-symbol");
let seventhlwName=document.querySelector(".seventhlw-name");
let seventhlw=document.querySelector(".seventh-lower");
let lw8=0;
let eigthlwSymbol=document.querySelector(".eigthlw-symbol");
let eigthlwName=document.querySelector(".eigthlw-name");
let eigthlw=document.querySelector(".eigth-lower");

playBtn.addEventListener("mouseover",()=>{
    playBtn.style.backgroundColor="#0D1B2A";
    playBtn.style.border="6px solid #E0E1DD";
    playBtn.style.color="#E0E1DD";
});

playBtn.addEventListener("click",()=>{
    window.location.href="index.html";
});

playBtn.addEventListener("mouseout",()=>{
    playBtn.style.backgroundColor="#E0E1DD";
    playBtn.style.border="6px solid #0D1B2A";
    playBtn.style.color="#0D1B2A";
});

closeBtn.addEventListener("mouseover",()=>{
    closeBtn.style.backgroundColor="#0D1B2A";
    closeBtn.style.border="5px solid #E0E1DD";
    closeBtn.style.color="#E0E1DD";
});

closeBtn.addEventListener("mouseout",()=>{
    closeBtn.style.backgroundColor="#E0E1DD";
    closeBtn.style.border="5px solid #0D1B2A";
    closeBtn.style.color="#0D1B2A";
});

closeBtnMedia.addEventListener("mouseover",()=>{
    closeBtnMedia.style.backgroundColor="#0D1B2A";
    closeBtnMedia.style.border="5px solid #E0E1DD";
    closeBtnMedia.style.color="#E0E1DD";
});

closeBtnMedia.addEventListener("mouseout",()=>{
    closeBtnMedia.style.backgroundColor="#E0E1DD";
    closeBtnMedia.style.border="5px solid #0D1B2A";
    closeBtnMedia.style.color="#0D1B2A";
});

infoBtn.addEventListener("mouseover",()=>{
    infoBtn.style.backgroundColor="#0D1B2A";
    infoBtn.style.border="6px solid #E0E1DD";
    infoBtn.style.color="#E0E1DD";
});

infoBtn.addEventListener("mouseout",()=>{
    infoBtn.style.backgroundColor="#E0E1DD";
    infoBtn.style.border="6px solid #0D1B2A";
    infoBtn.style.color="#0D1B2A";
});

infoBtn.addEventListener("click",()=>{
    information.style.visibility="visible";
    allInfoTxt.style.visibility="visible";
    information.style.opacity="0.9";
    allInfoTxt.style.opacity="1";
});

closeBtn.addEventListener("click",()=>{
    information.style.visibility="hidden";
    allInfoTxt.style.visibility="hidden";
    information.style.opacity="0";
    allInfoTxt.style.opacity="0";
});

closeBtnMedia.addEventListener("click",()=>{
    information.style.visibility="hidden";
    allInfoTxt.style.visibility="hidden";
    information.style.opacity="0";
    allInfoTxt.style.opacity="0";
});

//changing image of first upper
setInterval(()=>{
    if(up1==0){
        firstupSymbol.innerHTML='<i class="fa-solid fa-circle-minus"></i>';
        firstupName.innerText="DELETE";
        firstup.style.backgroundColor="rgb(251, 255, 0)";
        up1=1;
    }else if(up1==1){
        firstupSymbol.innerHTML='<i class="fa-solid fa-shield-halved"></i>';
        firstupName.innerText="SHIELD";
        firstup.style.backgroundColor="#00eeff";
        up1=2;
    }else if(up1==2){
        firstupSymbol.innerHTML='<i class="fa-solid fa-ban"></i>';
        firstupName.innerText="SKIP";
        firstup.style.backgroundColor="rgb(255, 57, 57)";
        up1=0;
    }
},800);

//changing image of second upper
setInterval(()=>{
    if(up2==0){
        secondupSymbol.innerHTML='<i class="fa-solid fa-shield-halved"></i>';
        secondupName.innerText="SHIELD";
        secondup.style.backgroundColor="#00eeff";
        up2=1;
    }else if(up2==1){
        secondupSymbol.innerHTML='<i class="fa-solid fa-ban"></i>';
        secondupName.innerText="SKIP";
        secondup.style.backgroundColor="rgb(255, 57, 57)";
        up2=2;
    }else if(up2==2){
        secondupSymbol.innerHTML='<i class="fa-solid fa-circle-minus"></i>';
        secondupName.innerText="DELETE";
        secondup.style.backgroundColor="rgb(251, 255, 0)";
        up2=0;
    }
},800);

//changing image of third upper
setInterval(()=>{
    if(up3==0){
        thirdupSymbol.innerHTML='<i class="fa-solid fa-ban"></i>';
        thirdupName.innerText="SKIP";
        thirdup.style.backgroundColor="rgb(255, 57, 57)";
        up3=1;
    }else if(up3==1){
        thirdupSymbol.innerHTML='<i class="fa-solid fa-circle-minus"></i>';
        thirdupName.innerText="DELETE";
        thirdup.style.backgroundColor="rgb(251, 255, 0)";
        up3=2;
    }else if(up3==2){
        thirdupSymbol.innerHTML='<i class="fa-solid fa-shield-halved"></i>';
        thirdupName.innerText="SHIELD";
        thirdup.style.backgroundColor="#00eeff";
        up3=0;
    }
},800);

//changing image of fourth upper
setInterval(()=>{
    if(up4==0){
        fourthupSymbol.innerHTML='<i class="fa-solid fa-circle-minus"></i>';
        fourthupName.innerText="DELETE";
        fourthup.style.backgroundColor="rgb(251, 255, 0)";
        up4=1;
    }else if(up4==1){
        fourthupSymbol.innerHTML='<i class="fa-solid fa-shield-halved"></i>';
        fourthupName.innerText="SHIELD";
        fourthup.style.backgroundColor="#00eeff";
        up4=2;
    }else if(up4==2){
        fourthupSymbol.innerHTML='<i class="fa-solid fa-ban"></i>';
        fourthupName.innerText="SKIP";
        fourthup.style.backgroundColor="rgb(255, 57, 57)";
        up4=0;
    }
},800);

//changing image of fifth upper
setInterval(()=>{
    if(up5==0){
        fifthupSymbol.innerHTML='<i class="fa-solid fa-shield-halved"></i>';
        fifthupName.innerText="SHIELD";
        fifthup.style.backgroundColor="#00eeff";
        up5=1;
    }else if(up5==1){
        fifthupSymbol.innerHTML='<i class="fa-solid fa-ban"></i>';
        fifthupName.innerText="SKIP";
        fifthup.style.backgroundColor="rgb(255, 57, 57)";
        up5=2;
    }else if(up5==2){
        fifthupSymbol.innerHTML='<i class="fa-solid fa-circle-minus"></i>';
        fifthupName.innerText="DELETE";
        fifthup.style.backgroundColor="rgb(251, 255, 0)";
        up5=0;
    }
},800);

//changing sixth upper image
setInterval(()=>{
    if(up6==0){
        sixthupSymbol.innerHTML='<i class="fa-solid fa-ban"></i>';
        sixthupName.innerText="SKIP";
        sixthup.style.backgroundColor="rgb(255, 57, 57)";
        up6=1;
    }else if(up6==1){
        sixthupSymbol.innerHTML='<i class="fa-solid fa-circle-minus"></i>';
        sixthupName.innerText="DELETE";
        sixthup.style.backgroundColor="rgb(251, 255, 0)";
        up6=2;
    }else if(up6==2){
        sixthupSymbol.innerHTML='<i class="fa-solid fa-shield-halved"></i>';
        sixthupName.innerText="SHIELD";
        sixthup.style.backgroundColor="#00eeff";
        up6=0;
    }
},800);

//changing image of seventh upper
setInterval(()=>{
    if(up7==0){
        seventhupSymbol.innerHTML='<i class="fa-solid fa-circle-minus"></i>';
        seventhupName.innerText="DELETE";
        seventhup.style.backgroundColor="rgb(251, 255, 0)";
        up7=1;
    }else if(up7==1){
        seventhupSymbol.innerHTML='<i class="fa-solid fa-shield-halved"></i>';
        seventhupName.innerText="SHIELD";
        seventhup.style.backgroundColor="#00eeff";
        up7=2;
    }else if(up7==2){
        seventhupSymbol.innerHTML='<i class="fa-solid fa-ban"></i>';
        seventhupName.innerText="SKIP";
        seventhup.style.backgroundColor="rgb(255, 57, 57)";
        up7=0;
    }
},800);

//changing eight upper image
setInterval(()=>{
    if(up8==0){
        eigthupSymbol.innerHTML='<i class="fa-solid fa-shield-halved"></i>';
        eigthupName.innerText="SHIELD";
        eigthup.style.backgroundColor="#00eeff";
        up8=1;
    }else if(up8==1){
        eigthupSymbol.innerHTML='<i class="fa-solid fa-ban"></i>';
        eigthupName.innerText="SKIP";
        eigthup.style.backgroundColor="rgb(255, 57, 57)";
        up8=2;
    }else if(up8==2){
        eigthupSymbol.innerHTML='<i class="fa-solid fa-circle-minus"></i>';
        eigthupName.innerText="DELETE";
        eigthup.style.backgroundColor="rgb(251, 255, 0)";
        up8=0;
    }
},800);

//changing first lower image
setInterval(()=>{
    if(lw1==0){
        firstlwSymbol.innerHTML='<i class="fa-solid fa-shield-halved"></i>';
        firstlwName.innerText="SHIELD";
        firstlw.style.backgroundColor="#00eeff";
        lw1=1;
    }else if(lw1==1){
        firstlwSymbol.innerHTML='<i class="fa-solid fa-ban"></i>';
        firstlwName.innerText="SKIP";
        firstlw.style.backgroundColor="rgb(255, 57, 57)";
        lw1=2;
    }else if(lw1==2){
        firstlwSymbol.innerHTML='<i class="fa-solid fa-circle-minus"></i>';
        firstlwName.innerText="DELETE";
        firstlw.style.backgroundColor="rgb(251, 255, 0)";
        lw1=0;
    }
},800);

//changing second lower image
setInterval(()=>{
    if(lw2==0){
        secondlwSymbol.innerHTML='<i class="fa-solid fa-ban"></i>';
        secondlwName.innerText="SKIP";
        secondlw.style.backgroundColor="rgb(255, 57, 57)";
        lw2=1;
    }else if(lw2==1){
        secondlwSymbol.innerHTML='<i class="fa-solid fa-circle-minus"></i>';
        secondlwName.innerText="DELETE";
        secondlw.style.backgroundColor="rgb(251, 255, 0)";
        lw2=2;
    }else if(lw2==2){
        secondlwSymbol.innerHTML='<i class="fa-solid fa-shield-halved"></i>';
        secondlwName.innerText="SHIELD";
        secondlw.style.backgroundColor="#00eeff";
        lw2=0;
    }
},800);

//changing third lower image
setInterval(()=>{
    if(lw3==0){
        thirdlwSymbol.innerHTML='<i class="fa-solid fa-circle-minus"></i>';
        thirdlwName.innerText="DELETE";
        thirdlw.style.backgroundColor="rgb(251, 255, 0)";
        lw3=1;
    }else if(lw3==1){
        thirdlwSymbol.innerHTML='<i class="fa-solid fa-shield-halved"></i>';
        thirdlwName.innerText="SHIELD";
        thirdlw.style.backgroundColor="#00eeff";
        lw3=2;
    }else if(lw3==2){
        thirdlwSymbol.innerHTML='<i class="fa-solid fa-ban"></i>';
        thirdlwName.innerText="SKIP";
        thirdlw.style.backgroundColor="rgb(255, 57, 57)";
        lw3=0;
    }
},800);

//changing lower fourth image
setInterval(()=>{
    if(lw4==0){
        fourthlwSymbol.innerHTML='<i class="fa-solid fa-shield-halved"></i>';
        fourthlwName.innerText="SHIELD";
        fourthlw.style.backgroundColor="#00eeff";
        lw4=1;
    }else if(lw4==1){
        fourthlwSymbol.innerHTML='<i class="fa-solid fa-ban"></i>';
        fourthlwName.innerText="SKIP";
        fourthlw.style.backgroundColor="rgb(255, 57, 57)";
        lw4=2;
    }else if(lw4==2){
        fourthlwSymbol.innerHTML='<i class="fa-solid fa-circle-minus"></i>';
        fourthlwName.innerText="DELETE";
        fourthlw.style.backgroundColor="rgb(251, 255, 0)";
        lw4=0;
    }
},800);

//changing fifth lower image
setInterval(()=>{
    if(lw5==0){
        fifthlwSymbol.innerHTML='<i class="fa-solid fa-ban"></i>';
        fifthlwName.innerText="SKIP";
        fifthlw.style.backgroundColor="rgb(255, 57, 57)";
        lw5=1;
    }else if(lw5==1){
        fifthlwSymbol.innerHTML='<i class="fa-solid fa-circle-minus"></i>';
        fifthlwName.innerText="DELETE";
        fifthlw.style.backgroundColor="rgb(251, 255, 0)";
        lw5=2;
    }else if(lw5==2){
        fifthlwSymbol.innerHTML='<i class="fa-solid fa-shield-halved"></i>';
        fifthlwName.innerText="SHIELD";
        fifthlw.style.backgroundColor="#00eeff";
        lw5=0;
    }
},800);

//changing sixth lower image
setInterval(()=>{
    if(lw6==0){
        sixthlwSymbol.innerHTML='<i class="fa-solid fa-circle-minus"></i>';
        sixthlwName.innerText="DELETE";
        sixthlw.style.backgroundColor="rgb(251, 255, 0)";
        lw6=1;
    }else if(lw6==1){
        sixthlwSymbol.innerHTML='<i class="fa-solid fa-shield-halved"></i>';
        sixthlwName.innerText="SHIELD";
        sixthlw.style.backgroundColor="#00eeff";
        lw6=2;
    }else if(lw6==2){
        sixthlwSymbol.innerHTML='<i class="fa-solid fa-ban"></i>';
        sixthlwName.innerText="SKIP";
        sixthlw.style.backgroundColor="rgb(255, 57, 57)";
        lw6=0;
    }
},800);

//changing lower seventh image
setInterval(()=>{
    if(lw7==0){
        seventhlwSymbol.innerHTML='<i class="fa-solid fa-shield-halved"></i>';
        seventhlwName.innerText="SHIELD";
        seventhlw.style.backgroundColor="#00eeff";
        lw7=1;
    }else if(lw7==1){
        seventhlwSymbol.innerHTML='<i class="fa-solid fa-ban"></i>';
        seventhlwName.innerText="SKIP";
        seventhlw.style.backgroundColor="rgb(255, 57, 57)";
        lw7=2;
    }else if(lw7==2){
        seventhlwSymbol.innerHTML='<i class="fa-solid fa-circle-minus"></i>';
        seventhlwName.innerText="DELETE";
        seventhlw.style.backgroundColor="rgb(251, 255, 0)";
        lw7=0;
    }
},800);

//changing eight lower image
setInterval(()=>{
    if(lw8==0){
        eigthlwSymbol.innerHTML='<i class="fa-solid fa-ban"></i>';
        eigthlwName.innerText="SKIP";
        eigthlw.style.backgroundColor="rgb(255, 57, 57)";
        lw8=1;
    }else if(lw8==1){
        eigthlwSymbol.innerHTML='<i class="fa-solid fa-circle-minus"></i>';
        eigthlwName.innerText="DELETE";
        eigthlw.style.backgroundColor="rgb(251, 255, 0)";
        lw8=2;
    }else if(lw8==2){
        eigthlwSymbol.innerHTML='<i class="fa-solid fa-shield-halved"></i>';
        eigthlwName.innerText="SHIELD";
        eigthlw.style.backgroundColor="#00eeff";
        lw8=0;
    }
},800);
