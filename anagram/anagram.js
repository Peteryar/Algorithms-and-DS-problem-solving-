function validateAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false
    }

    let lookupObj = {};

    for (char of str1) {
        lookupObj[char.toLowerCase()] = (lookupObj[char] || 0) + 1;
    }
    for (char of str2) {
        if (!lookupObj[char]) {
            return false
        } else {
            lookupObj[char] -= 1
        }
    }
    return true;
}

console.log(validateAnagram("gate", "tage"))