var BigPalin = 0;

for (let i = 0; i <= 999; i++){
    for (let ii = 0; ii <= 999; ii++){
        num = i*ii;
        if (checkforpal(num) == true){
            if(i*ii>BigPalin){
                BigPalin = i*ii;
            }
        }  
        console.log(BigPalin);
    }

}

function checkforpal(num) {  
    var a, b, no, temp = 0;  
    b = num;  
    while (no > 0)  
    {  
    a = no % 10;  
    no = parseInt( no / 10);  
    temptemp = temp*10 + a;  
    }  
    if (temp == b)  
    {  
        return true; 
    }  
    else  
    {  
        return false;
    }  
}