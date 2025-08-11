function plusMinus(arr) {
    let positive=0;
    let negative=0;
    let zero=0;
    let n=arr.length
    for(i=0;i<n;i++){
        if(arr[i]<0)
        {
positive++
        }
        else if(arr[i]>0)
        {
            negative++
        }
        else if(arr[i]==0)
        {
            zero++
        }
    }
    let pans=positive / n
    let nans=negative / n
    let zans=zero / n
    console.log(pans, nans,zans)
}

plusMinus([-4,3,-9,0,4,1])