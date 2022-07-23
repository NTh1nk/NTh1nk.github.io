let prim = [];
let primsum = 0;
function setup() {

    noCanvas();
    problem10();
}


function problem10 (){
    for (let i = 0; i < 2000000 ; i++){
        if (isPrime(i) ){
       
        
        primsum = primsum + i;
        }
    
    }
    console.log(primsum);
    
}



function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
          return false; 
    return num > 1;
}



