const palindrome = (words) => {
    let arr = words.replace(/[^\w\s]|,_'/g, "");
    arr = arr.replace(/ /g, "")
    arr = arr.split('')
    let arrResult = [];
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === arr.reverse()[i].toLowerCase()) {
            arrResult.push(true);
        } else {
            arrResult.push(false);
        }
    }
    return arrResult.sort()[0] == true ? true : false;
}

console.log(palindrome("kasur rusak"))

// // Madam,I'm Adam

