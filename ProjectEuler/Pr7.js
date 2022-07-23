
let num = 0;
let prim = [];
function setup () {
noCanvas();
problem7();
}


function problem7 () {

  for (let i = 0; prim.length <= 10000; i++){
        if (isPrime(i) ){
       
        prim.push(i);
        }
    
    }
    console.log(prim[10000]);
}


function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
          return false; 
    return num > 1;
}
    
         
    




//function isPrime(num) {
 //   for (let i = 2; i * i <= num; i++)
   //     if (num % i === 0)
     //     return false; 
    //return num > 1;
//}

//for (let i = 2; i * i < facnum; i++){
  //  if (facnum % i == 0){
    //push.factors = i; 
    //push.factors = facnum / i; }}

    //for (let a = 0; a < 2; a++){
    
      //  isprime = true; 
        //for (let b = 2; b*b < factors [a]; b++){
          //if (factors[a] % b == 0) {
            //isprime = false;
           //break;
        //}
      //}
        // }
 //}