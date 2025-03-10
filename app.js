let forClick = (e)=>{
    let getInp =  document.getElementById('inp')
    let inputValue = [...getInp.value]

    if(inputValue.length === 1 && inputValue[0] === "0"){
        getInp.value = [e]
    }else{
        getInp.value += e
    }

    

}

let calculateAll = ()=>{
    let getInp = document.getElementById('inp')

    getInp.value = eval(getInp.value)
}

let clearAll = ()=>{
    let getInp = document.getElementById('inp')

    getInp.value = ''
}

let clearValue = ()=>{
    let getInp = document.getElementById('inp');

    getInp.value = getInp.value.slice(0, -1)
}

let isCalculator = false

let onCalculator = ()=>{
    let getInp = document.getElementById('inp')

    if(!isCalculator){
        getInp.value = 0
        isCalculator = true
    }else{
        getInp.value = ""
        isCalculator = false
    }
}


