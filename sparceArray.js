function matchingStrings(stringList, queries) {
    // Write your code here
   
    let count = 0
    let arr = []
   for(let j= 0 ; j< queries.length;j++){
     for(let i = 0 ; i < stringList.length;i++)
    {
        if(queries[j]==stringList[i])
            {
               count++
              
            } 
         
    }
 arr.push(count)
 count = 0
   }

return arr
}
console.log(matchingStrings(['ab','ab','abc'],['ab','abc','bc']))