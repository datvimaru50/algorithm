// SELECTION SORT
function selectionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        var restArr = arr.slice(i);
        var min = Math.min(...restArr);
        // swap
        arr[arr.indexOf(min,i)] = arr[i]; // thêm biến i vào hàm indexOf để giới hạn, xác định đúng vùng để tìm ra phần tử cần thay thế
        arr[i] = min;

        console.log(`Kết quả lần thứ ${i} là: min=${min}, arr[i]=${arr[i]}`)
    }
    return arr;
}