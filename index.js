$(document).ready(function(){
  setInterval(function(){
  $("#one").animate({
    left:"75%"},1000)

    $("#one").animate({
      left:"25%"
     
    },1000)
    $("#three").animate({
      left:"75%"
     
    },1000)

    $("#three").delay(500).animate({
      left:"25%"
     
    },1000)

    $("#two").delay(500).animate({
      top:"75%"
     
    },1000)
    $("#two").delay(500).animate({
     
    },1000)
    

},1000);
 
});