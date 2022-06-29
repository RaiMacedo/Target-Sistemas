function MonthlyInvoicing(){
    function invoicingTotal(obj){
        let total = 0
        Object.values(obj).forEach(element => {
            total += element
        });
        return total
    };

    function invoicingPercentage(obj){
        let invoicing = MonthlyInvoicing()
        let total = invoicing.invoicingTotal(obj)
        let percentagePerState = 0
        let states = {}
        Object.keys(obj).forEach(element => {
            percentagePerState = obj[element] / total
            states[element] = `${(percentagePerState*100).toFixed(2)}%`
        });
        return states
    }; 

    return {
        invoicingTotal,
        invoicingPercentage
    };
}

export default MonthlyInvoicing;