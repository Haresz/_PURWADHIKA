const findRectangle = (length, width, formula) => {
    let result;
    formula = formula.toLowerCase()
    if (formula == 'area') {
        result = `${length} x ${width} = ${length * width}`
    }
    else if (formula == 'perimeter') {
        result = `2 (${length} + ${width}) = ${2 * (length + width)}`
    }
    return console.log(result)
}

findRectangle(5, 3, 'area')
findRectangle(5, 3, 'perimeter')

const findCircle = (radius) => {
    const diameter = 2 * radius
    const circumference = Math.PI * diameter
    const area = 1 / 4 * Math.PI * (diameter ** 2)
    const result = `Diameter : ${diameter}\nCircumference : ${circumference}\nArea : ${area}`
    return console.log(result)
}

findCircle(5)

const findAngleOfTriangle = (a, b) => {
    const result = (a + b) - 180
    return console.log(`angle : ${Math.abs(result)}`)
}

findAngleOfTriangle(80, 65)

const getDifrentDates = (a, b) => {
    const year = a.split('-')[0] - b.split('-')[0]
    const month = a.split('-')[1] - b.split('-')[1]
    const day = a.split('-')[2] - b.split('-')[2]
    const result = (year * 360) + (month * 30) + day
    return console.log(`day difrent ${Math.abs(result)}`)
}

getDifrentDates('2023-01-20', '2022-01-22')

const convertDay = (num) => {
    const year = Math.floor(num / 365)
    num %= 365;
    const month = Math.floor(num / 30)
    num %= 30;
    const day = Math.floor(num / 1)
    num %= 1;
    return console.log(`year : ${year}\nmonth : ${month}\nday : ${day}`)
}

convertDay(400)





