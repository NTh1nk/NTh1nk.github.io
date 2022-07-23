
let FnList = [1,]
let Fn = 0
let CurFn = 1
let PasFn = 0

function setup () {
noCanvas(); 
problem25();
}


function problem25 () { 

    for (let i = 0; i <= 2000; i++){

        Fn = CurFn + PasFn 
        PasFn = CurFn
        CurFn = Fn
        console.log(Fn)
        


    }




}