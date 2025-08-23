function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let sum = 0
    let j = 0
    let count = 0
    for (let i = 0; i < n; i++) {
        for(j=i+1;j<n;j++){

             sum = ar[i] + ar[j]
        if (sum % k == 0) {
            count = count + 1

        }
        }
    }

    console.log(count)

}
divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])