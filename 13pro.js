
//videoscrollevent


window.addEventListener("scroll",function(){

    if(document.documentElement.scrollTop > 1090 && document.documentElement.scrollTop < 1390 ){
        document.getElementById("first").style.opacity=1
    }
    else {
        document.getElementById("first").style.opacity=.25
      }
      if(document.documentElement.scrollTop > 1390 && document.documentElement.scrollTop < 1590 ){
        document.getElementById("second").style.opacity=1
    }
    else {
        document.getElementById("second").style.opacity=.25
      }
      if(document.documentElement.scrollTop > 1590 && document.documentElement.scrollTop < 1890 ){
        document.getElementById("third").style.opacity=1
    }
    else {
        document.getElementById("third").style.opacity=.25
      }
      if(document.documentElement.scrollTop > 1890 && document.documentElement.scrollTop < 2090 ){
        document.getElementById("fourt").style.opacity=1
    }
    else {
        document.getElementById("fourt").style.opacity=.25
      }

    if(document.documentElement.scrollTop > 2090 && document.documentElement.scrollTop < 2290 ){
        document.getElementById("fift").style.opacity=1
    }
    else {
        document.getElementById("fift").style.opacity=.25
      }
    
    if(document.documentElement.scrollTop > 590 && document.documentElement.scrollTop < 1290 ){
        document.getElementById("sectionthreein").style.opacity=1
    }
    else {
        document.getElementById("sectionthreein").style.opacity=.15
      }
    

})