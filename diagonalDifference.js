function diagonalDifference(arr) {
   
   let first=0
   let second=0
     for(i=0;i<arr.length;i++){
      first =first + arr[i][i]
      second = second + arr[i][arr.length-i-1]
        }
        const result=Math.abs(first-second)
        console.log(result)
       
    

}
diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]])
