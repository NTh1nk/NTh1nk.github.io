


for (let i = 1; i <= 1670; i++){       
        ListNum = Array.from(String(i), Number);
        if (Add(ListNum,i) == true) {
         console.log(ListNum[i]);
        }
}


let Total = 0;
function Add (ListNum,i ) {
    


    for (let j = 0; j <= 5; j++){
       Total += parseInt(ListNum[j]) ** 4;
      
    }
    console.log(Total);z
    if ( Total == i){
        return true;
    }
}   