function main(){
    function ivertedString(string){
        const arrTest = [];
        for (let i = 0; i < string.length; i++) {  
            arrTest.unshift(string[i])
                    
        }
        let invertedWord = ""
        let newWord = ""
        invertedWord = arrTest.forEach(element => {
            newWord += element
        })
        return newWord
    }


    const word = prompt("Digite uma palavra para inverte-la:")
    const newWord = ivertedString(word)
    alert(`Sua palavra invertida fica assim: ${newWord}`)
}

main()