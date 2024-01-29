const things = ['Alex', "Elena", "Chaplin", "Bernard", "Dany"]

things.sort((a, b) => {
    if (a < b) { return 1 }
    else if (a > b) { return -1 }
    else { return 0 }
})

console.log(things)