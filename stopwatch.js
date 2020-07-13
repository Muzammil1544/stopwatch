var min = 0;
var sec = 0;
var msec = 0;

var minheading =document.getElementById("min")
var secheading =document.getElementById("sec")
var msecheading =document.getElementById("msec")


var interval;
var clrinterval;
function timer(){
  msec++
  document.getElementById("msec").innerHTML = msec;
  if (msec >=100) {
    sec++
    document.getElementById("sec").innerHTML=sec 
   
    msec=0
  }
  else if (sec>=60){
    min++
    sec =0
    document.getElementById("min").innerHTML=min 
  }
  
}
function start(){
interval =setInterval(timer,10)
  
}
function stop(){

  clearInterval(interval);
  
}

function reset(){
min = 0;
sec = 0;
msec = 0;

document.getElementById("min").innerHTML= min
document.getElementById("sec").innerHTML= sec
document.getElementById("msec").innerHTML= msec 
 stop()
}
      function thide(){
        document.getElementById("btn1").style.display='none'
      }
      function tres(){
        document.getElementById("btn1").style.display ='inline-block'
      }
      console.log(sec)
      
      
