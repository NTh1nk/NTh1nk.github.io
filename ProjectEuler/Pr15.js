

function setup() {

nocanvas();

}



function make2DArray (rows, cols) {
    let arr = new Array(cols);
    for(let i  = 0; i < arr.length; i++){
        arr[i] = new Array(rows);

    }
    return arr;

}