"use strict";
const prompt = require("prompt-sync")({sigint:true});


function findValue(X,P)
{   let Y =com();
    let odd_even =check_odd();
    
    if ((X+Y)%2 ==0){
        if(P%2 ==0){
           console.log ("You wins :)");

        }
        else if (odd_even%2==0){
            console.log("computer wins...you loose! :(");
        }
        else{
            console.log("tie");

        }
            
        
    }
    
    else{
        if(P%2 !=0){
           console.log ("You wins:)");

        }
        else if (odd_even%2!=0){
            console.log("computer wins...you loose! :(");
        }
        else{
            console.log("tie");
        }
    }
        
    
    function com(){
    var Y = Math.floor(Math.random()*10+1)+0;
   
    return Y;

         
    }
    function check_odd(){
        var odd_even = Math.floor(Math.random()*2)+1;
        return odd_even;

    }
}
while(true){
let  u = prompt("Do you want to play the game odd or even y/n?")
if(u=='y'){
let X=prompt("enterplayer1 number PLAYER 1(0-10): ");
let P=prompt("enterplayer1 number ODD(1) OR EVEN(2): ");
findValue(X,P);

}
else if(u=='n'){
    console.log("thanks");
    break;
}

else{

    continue;
}
}

 


