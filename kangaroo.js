function kangaroo(x1, v1, x2, v2) {
    // Write your code here
   

    
      if(v1>v2 && (x2-x1) % (v1-v2) === 0)
      {
        console.log("Yes")
      }
      else{
        
        console.log("No")
      }
}
kangaroo(0,3,4,2)