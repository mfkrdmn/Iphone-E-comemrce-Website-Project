

//Top Announcement
var texts = new Array();
texts.push("Free Shipping Domestic Orders");
texts.push("New Here? Get 50$ off With Code 'GET50'");
texts.push("All Iphone Models 10% OFF This Week!");

var point = 0;

function changeText(){

    document.getElementById("toplinecontainer").innerText=texts[point]; /*daha once push edilmiş textleri var point=0
    ile sayı şeklinde dondurup saydırma işlemi yapmamızı saglıyor*/

  if(point < ( texts.length - 1 ) ){
    point++;
  }else{
    point = 0;
  }
  
}
 
setInterval(changeText, 2000); 
changeText();

//sectionone background

let whitebtn = document.getElementById("whitebtn");
let greenbtn = document.getElementById("greenbtn");
let greybtn = document.getElementById("greybtn");
let redbtn = document.getElementById("redbtn");
let blackbtn = document.getElementById("blackbtn");
var sectiononeh2s = document.querySelectorAll(".sectiononeh2s");

whitebtn.addEventListener("click",function(){
  document.querySelector(".sectionone").style.backgroundColor="rgba(248,242,236,255)";
  document.querySelector(".sectionone").style.backgroundImage="url('photos/white.png')";
  document.querySelector(".sectionone").style.transition="0.5s";
  document.querySelector(".sectionone").style.backgroundPosition = "200px 20px";
  document.querySelector(".sectionone").style.backgroundRepeat="no-repeat";
  document.querySelector(".sectionone").style.backgroundSize = "90%";
      for (let i = 0; i < sectiononeh2s.length; i++) {
        sectiononeh2s[i].style.color = " rgb(179, 179, 179)";
      }
      
})


greenbtn.addEventListener("click",function(){
  document.querySelector(".sectionone").style.backgroundColor="rgba(203,227,198,255)";
  document.querySelector(".sectionone").style.backgroundImage="url('photos/green.png')";
  document.querySelector(".sectionone").style.transition="0.5s";
  document.querySelector(".sectionone").style.backgroundPosition = "300px 40px";
  document.querySelector(".sectionone").style.backgroundRepeat="no-repeat";
    document.querySelector(".sectionone").style.backgroundSize = "90%";

      for (let i = 0; i < sectiononeh2s.length; i++) {
        sectiononeh2s[i].style.color = "white";
      }
      
      
})

redbtn.addEventListener("click",function(){
  document.querySelector(".sectionone").style.backgroundColor=" rgb(221, 0, 0)";
  document.querySelector(".sectionone").style.transition="0.5s";
  document.querySelector(".sectionone").style.backgroundRepeat="no-repeat";
  document.querySelector(".sectionone").style.backgroundImage="url('photos/bgmain.png')";
  document.querySelector(".sectionone").style.backgroundPosition = "400px -180px";
  document.querySelector(".sectionone").style.backgroundSize = "90%";

  for (let i = 0; i < sectiononeh2s.length; i++) {
    sectiononeh2s[i].style.color = "white";
  }
  
})

blackbtn.addEventListener("click",function(){
  document.querySelector(".sectionone").style.backgroundColor="black";
  document.querySelector(".sectionone").style.transition="0.5s";
  document.querySelector(".sectionone").style.backgroundRepeat="no-repeat";
  document.querySelector(".sectionone").style.backgroundImage="url('photos/bgblack.jpg')";
  document.querySelector(".sectionone").style.backgroundPosition = "700px -180px";
  document.querySelector(".sectionone").style.backgroundSize = "40%";

  for (let i = 0; i < sectiononeh2s.length; i++) {
    sectiononeh2s[i].style.color = "white";
  }
  
})

//section


let lcddisplay = document.getElementById("lcddisplay");
let OLED = document.getElementById("OLED");
let procamera = document.getElementById("procamera");
let dualcamera = document.getElementById("dualcamera");




let night = document.getElementById("night");
let moon = document.getElementById("moon");
let textsec = document.getElementById("textsec");

window.addEventListener("scroll",function(){

  var value = window.scrollY;


  moon.style.left= value * 0.10 +"px";
  moon.style.top= value * 0.01 +"px";
 


})




lcddisplay.addEventListener("click",function(){

  document.querySelector(".sectionfive").style.display="none";
  document.querySelector(".sectionseven").style.display="none";
  document.querySelector(".sectionsec").style.display="flex";
  
  document.querySelector(".sectionthree").style.display="none";
  document.querySelector(".section").style.display="none";
  document.querySelector(".sectionsix").style.display="none";

})

OLED.addEventListener("click",function(){

  document.querySelector(".sectionsix").style.display="flex";

})

dualcamera.addEventListener("click",function(){

  document.querySelector(".sectionseven").style.display="flex";

})




procamera.addEventListener("click",function(){

document.querySelector(".sectionfive").style.display="none";
document.querySelector(".sectionseven").style.display="none";
document.querySelector(".sectionpro").style.display="flex";

document.querySelector(".sectionthree").style.display="none";
document.querySelector(".section").style.display="none";
document.querySelector(".sectionsix").style.display="none";


})

let iph13 = document.getElementById("iph13");


iph13.addEventListener("click",function(){

document.querySelector(".sectionfive").style.display="none";
document.querySelector(".sectionseven").style.display="none";
document.querySelector(".sectioniph13").style.display="flex";

document.querySelector(".sectionthree").style.display="none";
document.querySelector(".section").style.display="none";
document.querySelector(".sectionsix").style.display="none";
})

let iph12 = document.getElementById("iph12");


iph12.addEventListener("click",function(){

document.querySelector(".sectionfive").style.display="none";
document.querySelector(".sectionseven").style.display="none";
document.querySelector(".sectioniph12").style.display="flex";

document.querySelector(".sectionthree").style.display="none";
document.querySelector(".section").style.display="none";
document.querySelector(".sectionsix").style.display="none";

})


var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });