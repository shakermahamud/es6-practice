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
    damo(){
        super.myFunThree()
        super.myFunFour()
    }
}

let objOne = new classOne;

objOne.myFun()

objOne.damo()
