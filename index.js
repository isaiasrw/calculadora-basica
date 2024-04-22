document.getElementById('switchTheme').addEventListener('click', function(){
    document.getElementById('body').classList.toggle('light')
})

function insert(number){
    const resultado = document.getElementById('resultado')
    resultado.innerHTML += number
}

function reset(){
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = ''
}

function back(){
    const resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calculate(){
    const resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else {
        document.getElementById('resultado').innerText = "Erro"
    }
}