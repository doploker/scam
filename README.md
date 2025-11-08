# SCAM

описание: написал сайт используя знания HTML CSS JS.
работал с формой, написал валидацию для нее, создал функцию которая возвращает имя полученное через рандом.

## Как работать с формой

приблизительный алгоритм

1. получить пользовательский ввод
2. проверить валидные значения данных
3. выполнить основной код
4. вывести значение

### Примеры работы с формой

пример

получим форму,добавим к нему слушатель событий и присвоим `submit`
```js
const form = document.getElementById('form');

form.addEventListener('submit', function (e){
    // чтобы форма не перезагрузила страницу
    e.preventDefault()
```

получим пользовательский ввод данных и получим DOM элемент для вывода ошибок.
```js
form.addEventListener('submit', function (e){
    e.preventDefault()

    let error = document.getElementById('error')

    // пользовательский ввод
    const cart = document.getElementById('card').value
    const mm = document.getElementById('mm').value 
    const gg = document.getElementById('gg').value
    const ownername = document.getElementById('ownername').value
    const cv = document.getElementById('cv').value
```
проверить пользовательский ввод
```js
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
```

выполним основной код
```js
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
```

и итоговый полученый общий код
```js
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
```

улучшенная альт. 
```js
const form = document.getElementById('form');

form.addEventListener('submit', function (e){
    e.preventDefault()

    let error = document.getElementById('error')
    let formData = new FormData(form)

    // вместо id аттрибут name
    if (formData.get('card') == ''){
        error.innerText = 'ты не ввел номер карты'
        return
    } else if (formData.get('mm') == ''){
        error.innerText = 'ты не ввел ММ'
        return 
    } else if (formData.get('gg') == ''){
        error.innerText = 'ты не ввел ГГ'
        return
    } else if (formData.get('ownername') == ''){
        error.innerText = 'ты не ввел имя держателя карты'
        return
    } else if (formData.get('cv') == ''){
        error.innerText = 'ты не ввел CVC2/CVV2'
        return
    } else {
        error.innerText = ''
    }

    // let name = 'ты лох'
    let name = randomNames()
    document.getElementById('robloxname').innerHTML = name;
})
```