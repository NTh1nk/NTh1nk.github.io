function setup () {

noCanvas();
SunPerYear(); 
}

let numofdays = 0
let tempsun = 
lyear = 0
let sun = 0
let months = [31, lyear, 31, 30 , 31, 30, 31, 31, 30, 31, 30, 31 ]
let NumOf1Sun = 0 
let curweekday = 2
let totalsum = 0
function SunPerYear() {

    for (let i = 1901; i <= 2000; i++){

        if (i % 4 == 0) {
            if (i % 100 == 0 ) {
                
                if (i % 400 == 0) {
                 lyear = 29
                 totalsum = totalsum + (CheckForSun())
                }
                else {
                    lyear = 28
                    totalsum = totalsum + (CheckForSun())
                }
            }
            
            else {
                lyear = 29 
                totalsum = totalsum + (CheckForSun())
            }
             
        }
        else {
            lyear = 28
            totalsum = totalsum + (CheckForSun())
        }

    }
     console.log(totalsum);



    //switch (tempsun) {

     //   case 1,2,3,4,5,7: 
          //  sun = numofdays / 7 
            //console.log(sun);   
            //console.log(numofdays % 7);
            
      //  break;

    //    case 6: 
      //      sun = numofdays / 7 + 1
        //    console.log(sun);   
          //  console.log(numofdays % 7);
                
       // break; 

        //case 0: 

          //  console.log(numofdays / 7)

        //break;

        

   // }
    
//  

}





function CheckForSun (){ 


        

    for (let i = 0; i < 12; i++) 
    
    {

        if (curweekday + 1 == 7 ){
            NumOf1Sun = 0
            NumOf1Sun = NumOf1Sun + 1
        }

        curweekday = (curweekday + months[i]) % 7

        return NumOf1Sun;
        
        NumOf1Sun = 0

    }



}