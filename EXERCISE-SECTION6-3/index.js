const slarys = [9100000, 9800000, 9500000, 10300000, 9300000]

const filterSalary = (arr) => {
    let result = [];
    arr.map((a) => {
        var percen = 5 / 100 * a
        percen = a - percen > 9000000
        percen ? result.push(a) : null
    })
    return result
}

console.log(filterSalary(slarys));