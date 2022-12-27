// class myClass{
//     constructor(){
//         console.log('hello world!')
//     }
// }
// new myClass;

class myNewClass{
    constructor(a,b){
        this.text = 'lorem ipsum'
        this.firstNum = a
        this.lastNum = b
    }
    addNum(){
       let result = this.firstNum + this.lastNum
       console.log(result)
    }
    someText(){
        console.log(this.text)
    }
}
let obj = new myNewClass(10,20)

obj.addNum()
obj.someText()

