function myFunction() {
    let numRandom = Math.random()
    numRandom = Math.round(numRandom * 100)
    numRandom += 1
    document.getElementById('num').innerHTML = numRandom
}