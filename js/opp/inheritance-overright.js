
// inheritance over-right -------------

class classTwo{
    myFun(){
        console.log('this is myFun Function One')
    }
    myFunTwo(){
        console.log('this is myFun Function Two')
    }
    myFunThree(){
        console.log('this is myFun Function Three')
    }
    myFunFour(){
        console.log('this is myFun Function Four')
    }
}
class classOne extends classTwo{
    myFunThree(){
        console.log('this is myFun Function Three Pro . All time support if your need')
    }
}

let objOne = new classOne;
let objTwo = new classTwo;
objOne.myFunThree()
objTwo.myFunThree()