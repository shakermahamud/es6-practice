let allNumbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
}
// console.log(allNumbers['a'])
allNumbers.f = 60
allNumbers.g = 70
allNumbers.h = 80
// console.log(allNumbers)

for(a in allNumbers){
    var iden = allNumbers[a]
    console.log(a+' : '+iden)
}