

function setup() {
noCanvas();
problem3;



}


function problem3(){
    const facnum = 600851475143;
    let isprime = false;
    let lfac = 0; 
    let factors = [];
    
  for (let i = 2; i * i < facnum; i++){
      if (facnum % i == 0){
      push.factors = i; 
      push.factors = facnum / i;

        for (let a = 0; a < 2; a++){

          isprime = true; 
          for (let b = 2; b*b < factors [a]; b++){
            if (factors[a] % b == 0) {
              isprime = false;
              break;
          }
        }
      
      if(isprime && factors[b] > lfac){

        lfac = factors[b];
      
    }
    

      
      

    }
  }
}

}
