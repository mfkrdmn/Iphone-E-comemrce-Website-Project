

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

let night = document.getElementById("night");
let moon = document.getElementById("moon");
let textsec = document.getElementById("textsec");

window.addEventListener("scroll",function(){

  var value = window.scrollY;


  moon.style.left= value * 0.09 +"px";
  moon.style.top= value * 0.01 +"px";
  textsec.style.top= -value * 0.24 +"px";



})