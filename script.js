let billInput = document.querySelector ('.form__input_bill');
let serviceInput = document.querySelector('.form__input_service')
let peopleInput = document.querySelector('.form__input_people');

let calckButton = document.querySelector ('.form__button_calc');
let resetButton = document.querySelector ('.form__button_reset');

calckButton.addEventListener('click', calkClickHandler);
resetButton.addEventListener('click', resetClickHandler);



function calkClickHandler() {
    let bill = parseInt(billInput.value);
    let service = parseInt(serviceInput.value);
    let people = parseInt(peopleInput.value);

    let tips = calculateTips(bill, service);
    let tipsForEach = tips / people;
    let totalForEach = calculateTotal(bill, tips) / people;
    renderResults(tipsForEach, totalForEach);

      
}

function resetClickHandler () {
    billInput.value = '';
    serviceInput.value = '';
    peopleInput.value = '';

    renderResults('0', '0');
}

function calculateTips (summ, service) {
    return summ * service / 100;
}

function calculateTotal (summ, tips) {
    return  summ + tips;
}

function renderResults (tips, total) {
    document.querySelector('.results__value_tips').innerText = Math.round(tips) + 'р.';
    document.querySelector('.results__value_total').innerText = Math.round(total) + 'р.';
}