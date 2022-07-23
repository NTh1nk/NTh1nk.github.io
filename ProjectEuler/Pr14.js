function setup () {
problem14();
}
let curseq = 0;
let tempnum = 0;
let longseq = [1,1]; 
function problem14 () {


    for (let i = 2; i < 1000000; i++){

        let b = i;
        while (b > 1){
            if (b % 2 == 0){

            tempnum = b/2;
            curseq++;
            b = tempnum 

            } else {
                
                tempnum = b * 3 + 1;
                curseq++;
                b = tempnum
            }
    

        }
        if (curseq > longseq[1]){
            longseq[0] = i
            longseq[1] = curseq




        }
        curseq = 0;
    }

    console.log(longseq[1]+"  "+longseq[0]);


}
