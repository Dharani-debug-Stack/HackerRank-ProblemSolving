function getMoneySpent(keyboards, drives, b) {
    let cost = 0
    let ans = -1
    for(i=0;i<keyboards.length;i++)
    {
        for(j=0;j<drives.length;j++)
        {
           cost = keyboards[i]+drives[j]
           if(cost <= b && cost > ans) {
            ans = cost
            
           }
        }
    }
console.log(ans)
}
getMoneySpent([5,1,1],[4],5)