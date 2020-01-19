// BUBBLE SORT
function bubbleSort(arr) {
    for (let m = arr.length - 1; m > 0; m--) {
        let compare = false; // Đếm số lần phải hoán đổi vị trí
        for (let i = 0; i < m; i++) {
            if (arr[i] > arr[i + 1]) {
                compare = true;
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
            // console.log(arr)
        }
        if (!compare) return arr; // Trả luôn kết quả nếu không phải thực hiện bất kì sự hoán đổi nào
    }
    return arr;
}

// bubbleSort([5,4,6,7,1,8,2,3]);