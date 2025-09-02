function arrayManipulation(n, queries) {
    // Write your code here
    let arr = new Array(n+1).fill(0)
    for(let [a,b,k] of queries)
    {
        arr[a]+=k
        arr[b+1]-=k
    }
   
let max=0 
let sum=0
    for(let i = 1 ;i<=n;i++)
    {
        sum= sum +arr[i]
       if(max<sum)
       {
        max=sum
       }
      
    }
return max
}
console.log(arrayManipulation(10,[[2,6,8],[3,6,7],[1,8,1],[5,9,15]]))