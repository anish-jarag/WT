<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width ,initial-scale=1.0">
	<title>Mattrix Addition</title>
</head>
<body>
<script>
function addmatrices(matA,matB)
{
let result=[];
for(let i=0;i<matA.length;i++){
result[i]=[];
for(let j=0;j<matA[i].length;j++){
result[i][j]=matA[i][j]+matB[i][j];
}
}
return result;
}

let matA=[[1,2,3],
          [9,5,4]];
let matB=[[4,5,6],
	    [8,6,9]];
let resultmatrix=addmatrices(matA,matB);

function displaymatrix(matrix){
for(let i=0;i<matrix.length;i++){
	console.log(matrix[i].join(' '));
}
}

console.log("matrix A");
displaymatrix(matA);

console.log("matrix B");
displaymatrix(matB);

console.log("result matrix");
displaymatrix(resultmatrix);

</script>
</body>
</html>
