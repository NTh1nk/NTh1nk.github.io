

function setup( ){
noCanvas(); 
problem2();
}


function draw() {}
function problem2
() {
    finalres = 0;
    finalnum = []; 
    let n = 1; 
    let n2 = 2;
    let result = [1,2];
    while (n2 < 4000000){
        let curnum = n + n2; 
        result.push(curnum);
        n = n2 
        n2 = curnum
    }
      
    for (let i = 0; i < result.length; i++) {
        if(result[i] % 2 == 0){
            finalnum.push(result[i]);
        }
    }
    for (let i = 0; i < finalnum.length; i++)
    {
        finalres += finalnum[i];
    }
    console.log(finalres);

}

