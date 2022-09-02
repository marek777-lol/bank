let bank;
const arr = [];
let output;

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
        arr.push(element.base_ccy);
        document.querySelector('.currency1').add(newOption);
        output = arr.filter(function(value,index) { return arr[index - 1] != value; });
    });
    second();

}

function second() {
    for (let i = 0; i < output.length; i++) {
        let newOption2 = new Option(`${output[i]}`,'Option Value');
        document.querySelector('.currency2').add(newOption2);
    }
}

getInfo();