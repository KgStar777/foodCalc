const textInput = document.querySelector('input');
const btn = document.querySelector('button');

const app_id = 'e7899cb2';
const app_key = '6354b3d70d643ce88f7d5763ef533b2b';

function render(data) {
    debugger;
    let html = data.map(item => {
    return `<div class="wrapper"><h2>${item.title}</h2><p>${item.body}</p></div>`
    });
    document.querySelector('.container').insertAdjacentHTML('beforebegin', html.join(' '));
} 


const requestURL = (food) => {
    return `https://api.edamam.com/api/food-database/v2/parser?ingr=${food}&app_id=${app_id}&app_key=${app_key}`
}

btn.addEventListener('click', () => {
    
    function sendRequest (method, url, body = null) {
        return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => render(data))
        .catch(err => console.log(err))
    }

    let food = textInput.value;
    sendRequest('GET', requestURL(food))
})
