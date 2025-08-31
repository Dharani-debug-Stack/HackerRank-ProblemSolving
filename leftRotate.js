function rotateLeft(d, arr) {

    if (arr.length > d) {
        d = d % arr.length
    }

    reverse( arr,0,arr.length-1)
    reverse(arr,0,arr.length-d-1)
    reverse(arr,arr.length-d,arr.length-1)
    return arr
    
}


function reverse(arr, left, right) {

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
// for(i=0;i<d;i++)
// {
// arr.push(arr.shift())
// }
//   return arr 
// }

console.log(rotateLeft(4, [1, 2, 3, 4, 5]))
}
