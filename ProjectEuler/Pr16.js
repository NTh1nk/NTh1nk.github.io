    var num = 2**1000
    var ListNum = Array.from(String(num), Number);
    var Total  = 0;
    console.log(ListNum);
    Total = parseInt(ListNum[3]) + parseInt(ListNum[4]);
    console.log(Total);
  
    for (let i = 0; i > 5 ; i++){
    Total += parseInt(ListNum[i]);
    console.log(Total+"Is the total");
    }
  
//  console.log(parseInt(ListNum[3]));
 