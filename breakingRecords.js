function breakingRecords(scores) {
    const game= scores.length
    let min=scores[0];
    let max=scores[0];
    let minCount=0
    let maxCount=0
    for(i=0;i<game;i++)
    {
        if(scores[i]>min)
        {
            min=scores[i]
            minCount++
        }
        else if(scores[i]<max)
        {
            max=scores[i]
            maxCount++
        }
    }
console.log(minCount,maxCount)

}
breakingRecords([10, 5 ,20 ,20 ,4 ,5 ,2 ,25, 1])