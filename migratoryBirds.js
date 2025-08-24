function migratoryBirds(arr) {
    // Write your code here
    let type = {}
    for (num of arr) {
        if (type[num]) {
            type[num]++
        }
        else {
            type[num] = 1
        }
    }
    let maxCount = 0
    let result = Infinity
    for (num in type) {
        if (type[num] > maxCount) {
            maxCount = type[num]
            result = num
        }
        else if(type[num]==maxCount && num <result){
result=bird
        }

         }
    console.log(result)
}


migratoryBirds([3,3,3,2,2,1,2,2])