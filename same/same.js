function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    let result;
    let counter1 = {};
    let counter2 = {};

    for (num of arr1) {
        counter1[num] = (counter1[num] || 0) + 1;
    }
    for (num of arr2) {
        counter2[num] = (counter2[num] || 0) + 1;
    }

    for (key in counter1) {
        result = counter1[key] === counter2[key ** 2];
        if (!result) {
           return false
        }
    }
    return  result
}

console.log(same([7, 2, 1, 5], [4, 1, 25, 49]))