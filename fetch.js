const app_id = 'e7899cb2';
const app_key = '6354b3d70d643ce88f7d5763ef533b2b';

const textInput = document.querySelector('input');
const btn = document.querySelector('button');

const nutrientsData = {
    CHOCDF: 'углеводы',
    ENERC_KCAL: 'энергетическая ценность',
    FAT: 'жир',
    FIBTG: 'клетчатка',
    PROCNT: 'протеин'
};

let nutrientsTemplate = {
    'углеводы': '',
    'энергетическая ценность': '',
    'жир': '',
    'клетчатка': '',
    'протеин': ''
};

function render(data) {
    // console.log(data);
    // console.log(data.hints);
    console.log(data.hints[0].food.image);
    let currentNutrients = data.food.nutrients.map(i => {
        // return `<p><span></span></p>`
        for(i in nutrientsTemplate) {
            //деструктуризация объекта
        }
    });

    let html = data.hints.map(i => {
        return `<div class="wrapper"><div><img src='${i.food.image}'></div><h2>${i.food.label}</h2><p>${i.food.nutrients.FAT}</p></div>`;
    })
    document.querySelector('.container').insertAdjacentHTML('afterbegin', html.join(' '));
    //----------------------------
    // let hints = [];
    // data.hints.map(i => {
    //     console.log(i);
    // })
} 


const requestURL = (food) => {
    return `https://api.edamam.com/api/food-database/v2/parser?ingr=${food}&app_id=${app_id}&app_key=${app_key}`;
}

btn.addEventListener('click', () => {
    
    function sendRequest (method, url) {
        return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => render(data))
        .catch(err => console.log(err))
    }

    let food = textInput.value;
    sendRequest('GET', requestURL(food))
});
