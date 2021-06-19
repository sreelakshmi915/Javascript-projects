
"use strict";
const prompt = require("prompt-sync")({sigint:true});

function rock_game(x){
    var Y = user_update(x);
    var C= com_output();
    if ((Y==0 && C==0 )||(Y==1 && C ==1)||(Y==2 && C==2)){
        console.log("TIE");
    }
    else if((Y ==0 && C==2)||(Y==1 && C==0)||(Y==2&&C==1)){
        console.log("YOU WINS:)");
    } 
    else if ((C ==0 && Y==2)||(C==1 && Y==0)||(C==2&&Y==1)){
        console.log("you lose computer wins :(");
    }

    function com_output(){
         var com_out = Math.floor(Math.random()*2+1)+0;
         return com_out;
    }
    
    
    function user_update(x){
        if(x=="Rock"){
            return 0;
        }
        if(x=="Paper"){
            return 1;
        }
        if(x=="Scissor"){
            return 2;
        }
    } 
}




while(true){
 var u = prompt("You want to play Rock paper and scissors say y/n?");

if (u=="y"){
    var j = prompt("enter Rock or Paper or Scissor");

    rock_game(j);

}
else if (u=="n"){
    console.log("thanks for playing");
    break;
}
else{
    continue;
}

}
