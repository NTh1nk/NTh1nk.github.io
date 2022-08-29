var ONum = 600851475143; 
var factors = [];
for(let i  = 0; i*i < ONum; i++){

  if (isPrime(i) == true){
    if (ONum % i == 0){
      factors.push(i);
      console.log(factors);
    }
  }
  
}

function isPrime(num) {
  for (let i = 2; i * i <= num; i++)
      if (num % i === 0)
        return false; 
  return num > 1;
}


