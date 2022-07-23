function setup ( ) {


        noCanvas();
        problem6();
}


let sumsq = 0;
let sqsum = 0;

function problem6 ( ){


    for (let i = 0; i <= 100; i++){
    

    sumsq = sumsq + (i **2) ;
    sqsum = sqsum + i;
    
    
    }

    
        sqsum = sqsum **2;
        
        console.log(sumsq - sqsum );

}