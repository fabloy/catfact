const randomNumber= ()=>{
    let randomValue = Math.round(Math.random() * 10)
    randomValue===10 ?  randomValue -= 1 : randomValue=randomValue
    randomValue = randomValue.toString()
    return `4${randomValue}`
    }

    export default randomNumber