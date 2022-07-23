function setup() {
    noCanvas();
    
    Decrypt();
    
    
    }
    

function Decrypt(){


    let g = 2;  //nvalue
    let n = 53; //modvalue
    let va = 6; //sentnuma
    let vb = 31; //sentnumb
    let pa = [];
    let pb = [];
    let keya = 0; 
    let keyb = 0; 
    let final = 0;
    let fkeya = 0;
    let fkeyb = 0;

    for(let i = 0; i < 100; i++){
       
        if ((g ** i) % n == va  ){

            keya = ((va) ** va) % n;

            console.log(i + ' Is va' + ' ' + keya + ' A key ' );
            CheckKey(va,vb,n)
           
              
        }   


    }
    for(let f = 0; f < 100; f++){
       
        if ((g ** f) % n == vb  ){     

          keyb = ((vb) ** vb) % n;
            console.log(f + ' Is vb'+' '+ keyb +  ' b key');
            
            CheckKey(va,vb,n);
                     
            
         }   


    }

    for(let o = 0; o < 100; o++){
        
        if ((va ** o) % n == (vb ** o) % n ){

          //  console.log(o + ' Is the Absloute key')

      // CheckKey(va,vb,n);

    }

      Decrypt();

    



    }


  function CheckKey(){

    keya = ((va) ** va) % n;
    console.log(keya +' ' + keyb + ' Is maybe the a and b key')
     
  }

}



