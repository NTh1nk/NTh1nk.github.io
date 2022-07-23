

function setup(){
  problem5();
  noCanvas;
  }

function problem(num1, num2){
  let result = 0;
  for(let i = 0; i < 1000; i++){
    let n = i
    let doOut = false;
    if(n % num1 == 0) {doOut = true} 
    if(n % num2 == 0) {doOut = true} 
    if(doOut) {
      result += n;
    }
  }
  console.log(result)
}











let num = 0; 
let numlenght = 0; 
let potpal = 0;

function problem4 () {

  for (let i = 3; i < 999; i++){

    num = i*b;
    str(num);
    numlenght = num.lenght();

    if (numlenght % 2 == 0) {
      
      potpal = numlenght / 2; 
      

  }  






  }



}
  