function quickSort(array) {
    // base case
    if (array.length < 2) {
        return array;
    } else {
        var pivot = array[0];
        var left = [];
        var right = [];
      
        // partioned!
        for (let k = 1; k < array.length; k++){
          if (array[k] < pivot) {
            left.push(array[k]);
          } else {
            right.push(array[k]);
          }
        }

        // recursive
        var x = quickSort(left);
        x.push(pivot);
        var result = x.concat(quickSort(right));
        return result;
    }
}