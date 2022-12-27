let myMap = new Map()

myMap.set('item_one','Book')
myMap.set('item_two','Table')
myMap.set('item_three','Chair')
myMap.set('item_four','Computer')
myMap.set('item_five','Mobile')
myMap.set('item_six','Light')

console.log(myMap.keys())
console.log(myMap.values())

for( mykeys of myMap.keys()){
    console.log(mykeys)
}
// for( myValues of myMap.values()){
//     console.log(myValues)
// }

console.log(myMap.get('item_one'))

myMap.delete('item_three')
myMap.delete('item_four')
console.log(myMap)

myMap.clear()
console.log(myMap)

if(myMap.has('item_five')){
    console.log('Yes')
}else{
    console.log('No')
}

