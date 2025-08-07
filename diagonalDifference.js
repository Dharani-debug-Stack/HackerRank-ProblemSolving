function diagonalDifference(arr) {
    let j=0
    let k=2
   let first=0
   let second=0
     for(i=0;i<arr.length;i++){
        let a=arr[i][j]
        j++
        first= first + a
        }
         for(i=0;i<arr.length;i++){
        let b=arr[i][k]
        k--
        second= second + b
        }
        const result=Math.abs(first-second)
        console.log(result)
       
    

}
diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]])
