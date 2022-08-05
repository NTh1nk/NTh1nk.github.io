
function setup() {

    noCanvas();
    calcpath2();
    }
    

    function calcpath2(){
        let a = 40;
        let b = 0; 
        let amount = 0; 
        for (let a = 40; a > -1; a--){
            

            b+1;    
            amount += 1; 


        }


    }
    
    function calcpath(){
        let amount = 6 
        for (let i = 2; i < 21; i++){
            amount = (amount * 2) + i+1
            console.log(amount," of path in a ", i, "x", i, "square");
        }
    }