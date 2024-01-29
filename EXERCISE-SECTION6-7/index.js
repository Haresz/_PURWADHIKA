
function mean(numbers) {
    let result = 0
    numbers.forEach(num => {
        result += num
    });
    return Math.round(result / numbers.length)
}

function median(numbers) {
    const sortNum = numbers.sort((a, b) => a - b)
    let result;
    if (numbers.length % 2 == 0) {
        result = numbers.length / 2
        result = sortNum[result - 1] + sortNum[result]
        result /= 2
        return result
    } else {
        result = numbers.length / 2
        result = Math.round(result)
        return sortNum[result]
    }

}

function mode(numbers) {
    let maxCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        let rep = numbers.filter(number => number === numbers[i]).length;
        if (rep > maxCount) {
            maxCount = numbers[i]
        } else {
            maxCount = maxCount
        }
    }
    return maxCount
}

const threeM = (numbers) => {
    const meanResult = mean(numbers)
    const medianResult = median(numbers)
    const modeResult = mode(numbers)

    return console.log(`mean: ${meanResult}, median: ${medianResult}, mode: ${modeResult}`)
}

threeM([1, 2, 3, 2, 5, 2, 7, 7, 7, 7])