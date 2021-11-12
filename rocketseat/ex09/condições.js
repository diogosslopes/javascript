function MeuNome(name = ''){
    if(name === ''){
        throw 'Nome é obirgatorio' //codigo que será enviado caso condição seja satisfeita.
    }
    console.log(`O nome é ${name}`)
}

try{
    MeuNome('') //diz para tentar executar a função
} catch(d){
    console.log(d) //retorna o valor enviado pelo throw
}