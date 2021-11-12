let temperatura = '50f'

function convert(num){
    let celcio = num.toUpperCase().includes('C')
    let far = num.toUpperCase().includes('F')
    if(!celcio && !far){
        console.log('Temperatura inválida')
    }else if(celcio) {
        console.log(Number(num.toUpperCase().replace("C","")) * 9/5 + 32 + 'F')
        
    }else{
        console.log((Number(num.toUpperCase().replace("F","")) - 32) * 5/9 + 'C')
    }
}

convert(temperatura)


