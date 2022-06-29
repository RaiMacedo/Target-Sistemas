import MonthlyInvoicing from "./percentualMonthy.js";

function App(){
    function start(){
        let invoicing = MonthlyInvoicing()

        const invoice = {
            "SP": 67836.43,
            "RJ": 36678.66,
            "MG": 29229.88,
            "ES": 27165.48,
            "Outros": 19849.53
        }

        let percentageStates = invoicing.invoicingPercentage(invoice)
        console.log(percentageStates)
    }
 
    return {start}
    
}

export default App