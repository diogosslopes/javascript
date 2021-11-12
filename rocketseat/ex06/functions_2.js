
//function scoope

let subject ='Create video'

function createThink(subject) { //passando parametros ele não sobrescreve o de fora, sem passar parametro ele sobreescreve o subject de fora da função
    subject = 'Study'
    return subject
}

console.log(createThink(subject))
console.log(subject)

//function hoisting

sayMyName()

function sayMyName() { //neste caso o JS eleva a função acima da chamada
    console.log('Diogo')    
}

sayMyName()

var myName = function sayMyName() { //neste caso o JS não eleva a função acima da chamada
    console.log('Diogo')    
}

sayMyName = (name) => { //Arrow function
    console.log(name)
}

sayMyName('Diogo')

function sayMyName(name){
    console.log('Antes da função')
    name()
    console.log('Depois da função')
}

sayMyName(
    () =>{
        console.log('Estou em uma callback') //Call back, ou funções dentro de funções.
    }
)