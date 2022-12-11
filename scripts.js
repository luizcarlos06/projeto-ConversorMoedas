const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dollar = 5.2
const euro = 5.9
const libra = 6.3

const convertValues = () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReal);

    if (select.value === 'US$ Dólar americano'){
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReal / dollar)
    }

    if(select.value === '€ Euro'){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReal / euro)
    }
    if(select.value === '£ Libra'){
        currencyValueText.innerHTML = new Intl.NumberFormat("gb-UK", {
            style: "currency",
            currency: "GBP",
        }).format(inputReal / libra)
    }
   
};

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if(select.value === 'US$ Dólar americano'){
        currencyName.innerHTML = 'US$ Dólar americano'
        currencyImg.src = "Assets/estados-unidos (1) 1.png"
    }

    if(select.value === '€ Euro'){
        currencyName.innerHTML = '€ Euro'
        currencyImg.src = "Assets/euro.png"
    }
    if(select.value === '£ Libra'){
        currencyName.innerHTML = '£ Libra'
        currencyImg.src = "Assets/uk.png"
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change',changeCurrency)