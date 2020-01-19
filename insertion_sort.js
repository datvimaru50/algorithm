// INSERTION SORT
function insertionSort(arr) {
    let result = [];
    if (arr.length == 0){
        alert('Mảng truyền vào cần có ít nhất một phần tử');
        return false;
    } else if (arr.length == 1) {
        return arr;
    } else {
        result.push(arr[0]);

        for (let i = 1; i < arr.length; i++){
            if (arr[i] <= result[0]) {
                result.unshift(arr[i]);
            } else if (arr[i] >= result[result.length - 1]){
                result.push(arr[i]);
            } else {
                for (let k = 0; k < result.length; k++){
                    if (arr[i] <= result[k]){
                        result.splice(k, 0, arr[i]);
                        break; // phải nhảy ra khỏi vòng lặp khi đã chèn vào vị trí thích hợp
                    }
                }
            }
        }
    }
    return result;
}

// insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);