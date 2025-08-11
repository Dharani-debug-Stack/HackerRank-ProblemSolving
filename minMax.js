function miniMaxSum(arr) {
    // Write your code here
    let sum= []
    let tot=[]
   
   for(let i=0;i<arr.length;i++)
   {
   var ans= arr.filter(( _,index)=>index!==i)
  var single=ans.reduce((a,b) => a+b,0)
  sum.push(single)
   tot=sum.sort((a,b)=>b-a)
   
   }
   console.log(tot[tot.length-1],tot[0])
}