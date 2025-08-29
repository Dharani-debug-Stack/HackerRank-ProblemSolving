function sockMerchant(n, ar) {
    // Write your code here
    let ans = {}
    let pairs = 0
   
    for(let sock of ar){
        ans[sock] = (ans[sock] || 0)+1
    }
    
    for(let key in ans)
    {
        pairs +=Math.floor(ans[key]/2)
    }
    
    console.log(pairs)
}
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])