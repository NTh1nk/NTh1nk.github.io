

function setup() {
noCanvas();
prb3();



}

function prb3(){

}
function createprime(){

}

function isPrime(num) {
  for (let i = 2; i * i <= num; i++)
      if (num % i === 0)
        return false; 
  return num > 1;
}


