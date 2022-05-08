"use strict";

$(document).ready(function(){
    
    let timer = 0
    
    $("#startEvent").click(function(){
  
         timer = setInterval("countUp()",100);
         
         $(this).attr('disabled','true')
         $("#stopEvent").removeAttr('disabled')
         $("#resetEvent").attr('disabled','true')
        
    });
        
    $("#stopEvent").click(function(){
     /* global timer*/    
        clearInterval(timer);
        
        $(this).attr('disabled','true')
        $("#startEvent").removeAttr('disabled')
        $("#resetEvent").removeAttr('disabled')
        
    });
    
    $("#resetEvent").click(function() {
       
       msec = 0
       sec = 0
       min = 0
       hour = 0
       
        $(".time").text("0:0:0:0");
        
        $(this).attr('disabled','true')
    })
    
});

let msec = 0;
let sec  = 0;
let min  = 0;
let hour = 0;
 /* global $*/
function countUp(){
    
    msec += 1;
   
    if(msec > 9){
        msec = 0;
        sec += 1;
    }
    
    if(sec > 59){
        sec = 0;
        min += 1;
    }
    
    if(min > 59){
        min = 0;
        hour += 1;
    }
    
    $(".time").text(hour+":"+min+":"+sec+":"+msec);
}
