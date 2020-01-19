// MERGE SORT

// Function split: split the provided array into an array with single-item sub arrays
// array: [1,5,3,2,3,6,9]
// return: [[1],[5],[3],[2],[3],[6],[9]]

function split(array) {
    var temp = [];

    if (array.length < 2){
        temp.push(array);
        return temp;
    } else {
        var arr1 = array.splice(0, Math.round(array.length / 2));
        var arr2 = array;
        // console.log(`${arr1}  |  ${arr2}`);
        var x = temp.concat(split(arr1));
        var y = x.concat(split(arr2));
        return y;
    }
}

// Function pushSlot: push the element in Arr2 into the sorted Arr1 in right order (least to greast)
// arr1 [1,5,6,9]
// arr2 [4]
// return [1,4,5,6,9]
function pushSlot(arr1, arr2) {
    if (arr2[0] <= arr1[0]) {
        arr1.unshift(arr2[0]);
    } else if (arr2[0] >= arr1[arr1.length - 1]){
        arr1.push(arr2[0]);
    } else {
        for (let k = 0; k < arr1.length; k++){
            if (arr2[0] <= arr1[k]){
                arr1.splice(k, 0, arr2[0]);
                break; 
            }
        }
        
    }
    return arr1;
}

// Function merge: merge single-item sub arrays of provided array(x) into a single array that sorted
// x: [[1],[5],[3],[2],[3],[6],[9]]
// return [1,2,3,3,5,6,9]

function merge(x){
    if (x.length < 2) {
        return x[0];
    } else {
        return pushSlot(merge(x.splice(0, x.length -1)), x[x.length -1])
    }
}