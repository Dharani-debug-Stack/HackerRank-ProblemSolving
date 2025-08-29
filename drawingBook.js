function pageCount(n, p) {
    // Write your code here
    let ans = Math.min(Math.floor(p/2) , (Math.floor(n/2)-Math.floor(p/2)))
    console.log(ans)

}
pageCount(5, 4)