const Matrix = require("matrix-js");

let A = Matrix([
    [0,1,1,1],
    [1,0,1,0],
    [1,1,0,0],
    [1,0,0,0]
]);

function power(mtrx,p){
    //mtrx is the matrix you input
    //p is the power of the matrix you want
    let result = mtrx;
    for(var i=2;i<p;i++){
      result=Matrix(result.prod(mtrx));
    }
    result=result.prod(mtrx);
    return result
}


//testing code
console.log(power(A,10));
