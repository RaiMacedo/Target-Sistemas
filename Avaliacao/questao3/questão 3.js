function faturamento(){
    async function jsonDados(){
        const res = await fetch("http://127.0.0.1:5500/testess/questao3/dados.json")
        const data = await res.json()
        return await data
    }

    async function minValue(){
        let data = await jsonDados()
        let minDailyValue = data[0].valor
        let minDailyValueDay = 1
        await data.forEach((element) => {
            if(element.valor == 0){
                return
            }else if(minDailyValue >= element.valor){
                minDailyValue = element.valor
                minDailyValueDay = element.dia
            }
        })
        return {
            "dia":minDailyValueDay,
            "valor":minDailyValue
        }
        
    }

    async function maxValue(){
        let data = await jsonDados()
        let maxDailyValue = 0
        let maxDailyValueDay = 1
        await data.forEach((element) => {
            if(element.valor == 0){
                return
            }else if(maxDailyValue < element.valor){
                maxDailyValue = element.valor
                maxDailyValueDay = element.dia
            }
        })
        return {
            "dia":maxDailyValueDay,
            "valor":maxDailyValue
        }
    }

    async function aboveAverageDays(){
        let data = await jsonDados()
        let monthTotal = 0
        let dontCountDays = 0
        let daysAboveAverage = []
        await data.forEach((element) => {
            if(element.valor == 0){
                dontCountDays++
            }else{
                monthTotal += element.valor
            }
        })
        let average = monthTotal/(30-dontCountDays)
        await data.forEach((element) =>{
            if(element.valor == 0){
                return
            }else if(element.valor > average){
                daysAboveAverage.push(element.dia)
            }
        })
        return {
            "dias": daysAboveAverage
        }
    }

    return {
        minValue,
        maxValue,
        aboveAverageDays
    }
}
export default faturamento