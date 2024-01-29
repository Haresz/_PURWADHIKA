const arr = [1, 3, 5]

const oddEventMap = (datas) => {
    return datas.map((data) => {
        return data % 2 === 0 ? "even" : "odd"
    })
}

console.log(oddEventMap(arr))