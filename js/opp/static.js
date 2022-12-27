class myNew{
    static ourFun(){
        console.log('lorem ipsum dolor stie mait.')
    }
    hello(){
        console.log('hello world')
    }
}
// with static 
myNew.ourFun()
// with out static 
let obj = new myNew;
obj.hello()
