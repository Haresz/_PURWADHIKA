const reverseWord = (words) => {
    let arr = words.split(' ')
    const arrMap = arr.map((a) => {
        let result = a.split('')
        result = result.reverse()
        result = result.join('')
        return result
    })
    return arrMap.join(' ')
}

console.log(
    reverseWord("RRQ Lemon")
)