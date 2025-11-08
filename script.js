let names = ['jone','alex','Meara','Ion','Harry','Arazorwyn','Steffen']

function randomNames(){
    let randomIndex = Math.floor(Math.random() * (names.length - 1))
    let result = names[randomIndex]
    return result
}

const form = document.getElementById('form');

form.addEventListener('submit', function (e){
    e.preventDefault()

    let error = document.getElementById('error')

    // пользовательский ввод
    const cart = document.getElementById('card').value
    const mm = document.getElementById('mm').value 
    const gg = document.getElementById('gg').value
    const ownername = document.getElementById('ownername').value
    const cv = document.getElementById('cv').value

    if (cart == ''){
        error.innerText = 'ты не ввел номер карты'
        return
    } else if (mm == ''){
        error.innerText = 'ты не ввел ММ'
        return 
    } else if (gg == ''){
        error.innerText = 'ты не ввел ГГ'
        return
    } else if (ownername == ''){
        error.innerText = 'ты не ввел имя держателя карты'
        return
    } else if (cv == ''){
        error.innerText = 'ты не ввел CVC2/CVV2'
        return
    } else {
        error.innerText = ''
    }

    // let name = 'ты лох'
    let name = randomNames()
    document.getElementById('robloxname').innerHTML = name;
})

