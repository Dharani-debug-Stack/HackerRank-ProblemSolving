function compareTriplets(a, b) {
     let alice =0;
     let bob=0;
      
if(a.length == b.length){
    for(let i=0;i<a.length;i++)
    {
       if(a[i]>b[i] ){
       
       alice++;
       }
       else if (a[i]<b[i]) {
        bob++;
        
       } 
    }
   
     console.log([alice,bob]);
}
}
compareTriplets([17,28,30],[99,16,8])