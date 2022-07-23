function setup() {
    noCanvas();
    
    Decrypt();
    
    
    }
    

function Decrypt(){


    let g = 3;  //nvalue
    let n = 17; //modvalue
    let va = 11; //sentnuma
    let vb = 3; //sentnumb
    let a = [];
    let b = [];
    let keya = 0; 
    let keyb = 0; 
    let pkeya = [];
    for(let i = 1; i < 50; i++){
       
        if ((g ** i) % n == va  ){
            

            a.push(i);

            console.log(i + ' Is va');
            
    

        }   


    }
    for(let f = 1; f < 50; f++){
       
        if ((g ** f) % n == vb  ){
           

            b.push(f);
            console.log(f + ' Is vb');
           // keya = ((va) ** a) % n;
           // keyb = ((vb) ** b) % n;
            console.log(keya + ' and ' + keyb + ' is the a and b key');
                     
            
         }   // switch(expression) {} switch(a[x]){


    }
    for(let x = 1; x < 50; x++){
    
        
        pkeya.push(((va) ** a[x]) % n);
        pkeya.push(((vb) ** b[x]) % n);

        if (a[x] == b[x]) {

            console.log(a[x] + ' '+ b[x] + ' is the Final key')


        }
    






    }    





}



// 