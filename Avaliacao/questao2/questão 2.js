function main(){    let data1 = prompt("Digite um numero para saber se está na sequencia de fibonacci: ")
    if(data1 == 0 || data1 == 1){
        alert("Numero pertence à sequencia de fibonacci")
    }else{
        let num = 0
        let result = 0
        while (result  < data1){

            const numfibonacci = n => {
                if(n <= 0){
                    return 1
                }   
                return numfibonacci(n-1) + numfibonacci(n-2)
            }
            num++
            result = numfibonacci(num)
        }
        (data1 == result) ? alert("Numero pertence à sequencia de fibonacci") : alert("Numero não pertence à sequencia de fibonacci")
    }
}

main()


    
    
    

