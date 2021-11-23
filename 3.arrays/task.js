function compareArrays(arr1, arr2) {
    let result = arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);

    return result;
}

function advancedFilter(arr) {
    let resultArr = arr.filter(function(i) { return i > 0 && i % 3 == 0 }).map(function(i) { return i * 10 });

    return resultArr;
}