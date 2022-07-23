

function setup () {
    noCanvas();
    Problem1();
}
let sum = 0;

function Problem1 () {
    
    for (let i = 0; i < 1000; i++){
    

        if (i % 3 == 0) {

            sum = sum + i;
        }
        else if (i % 5 == 0)
        {

            sum = sum + i;

        }
    
    

    }

    console.log(sum);

}