

function setup (){ 

    noCanvas();
    iteration();
    
}






function iteration () { 

let curnum = 0
let totalcases = 0 
let truecases =  0
let val1 = 0
let val2 = 0 
let val3 = 0

    for (let i = 0; i < 100 ; i++){

     val1 = random(1, 10)
     val2 = random(1, 10)
     val3 = random(1, 10)


        switch (val1){
        case 1: 
        curnum += 1 
        break; 
    
        case 2,3,4,5,6,7,8,9,10:
        break; 
        
         }

        switch (val2){
        case 1: 
        curnum += 1 
        break; 
    
        case 2,3,4,5,6,7,8,9,10:
        break; 
        }

        switch (val3){
        case 1: 
        curnum += 1 
        break; 
    
        case 2,3,4,5,6,7,8,9,10:
        break; 
        }

       if (curnum > 1) { 
       
        truecases += 1 
        }

       
        console.log(totalcases + "total"); 
        console.log(truecases + "true");

        totalcases += 1
        curnum = 0
        val1 = 0
        val2 = 0
        val3 = 0
  
    }
    
    
    
    
        console.log(totalcases + " amount of cases"); 
        console.log(truecases + " amount of true cases");
}