const  arr = [1,2,3,4,5,6,7,8,9]

function binarySearch(arr, findNumber) {
 let left = -1;
 let right = arr.length;
 let countIterations = 0;


 while (right - left > 1) {
    let middle = Math.floor((left + right )/ 2);
    countIterations++
    if (findNumber === arr[middle]) {        
        return {
            countIterations,
            id: middle
        };
    }

    if (findNumber < arr[middle]) {
        right = middle;
    } else {
        left = middle;
    }
 }

 return { 
    countIterations,
    id: false
};

}

console.log(binarySearch(arr, 7));
