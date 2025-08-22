function birthday(s, d, m) {
    // Write your code here
    let ans = []
    let total = 0
    let count=0
    if(s.length == 1 && m==1)
    {
       
       count=1
    }
    for (let i = 0; i <s.length-1; i++) {
ans = s.slice(i,m+i)
  total = ans.reduce((a,b)=>a+b,0)
  
console.log(ans)
  if(total == d)
  {
     count++
  }
    }
    console.log(count)
}
birthday([4], 4, 2)