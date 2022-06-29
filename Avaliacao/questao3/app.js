import faturamento from "./questão 3.js";


function app(){
    const calcfaturamento = faturamento()

    async function start(){
        console.log(await calcfaturamento.minValue())
        console.log(await calcfaturamento.maxValue())
        console.log(await calcfaturamento.aboveAverageDays())
    }

    return {start}
}


export default app;