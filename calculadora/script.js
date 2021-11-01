var empty = document.getElementById('res')


    function guardar(n){
        const result = document.getElementById('res').innerHTML
        document.getElementById('res').innerHTML = result + n
        
    
    }


function resultado(){
    var result = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = eval(result)
    
    
}
fim = false

function clean(){
    var result = document.getElementById('res')
    result.innerHTML = ''
}

function back(){
    var result = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = result.substring(0, result.length -1)

}

