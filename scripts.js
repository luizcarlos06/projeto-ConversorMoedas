const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const convertValues = async() => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    const dollar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoins = data.BTCBRL.high
    console.log(data)

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
    if(select.value === '₿ Bitcoins'){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputReal / bitcoins)
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

    if(select.value === '₿ Bitcoins'){
        currencyName.innerHTML = '₿ Bitcoins'
        currencyImg.src = "Assets/bitcoins.png"
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change',changeCurrency)