let bank;

async function getInfo () {
await fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
    .then((res) => res.json())
    .then((data) => {
        bank = data;
        console.log(bank);
    })

    await bank.forEach(element => {
        console.log(element);
        let newOption = new Option(`${element.ccy}`,'Option Value');
        let newOption2 = new Option(`${element.base_ccy}`,'Option Value');
        document.querySelector('.currency1').add(newOption);
        document.querySelector('.currency2').add(newOption2);
    });

    
}

getInfo();
