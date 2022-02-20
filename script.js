const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    const endPoint = "https://v6.exchangerate-api.com/v6/cf0461fd01839d93c79efab3/latest/";
    fetch(endPoint + currency_one).then(res => res.json()).then(data => {
        let rate = data.conversion_rates[currency_two];
        rateEl.innerHTML = "1 " + currency_one + " = " + rate + " " + currency_two;
        amountEl_two.value = (rate * amountEl_one.value).toFixed(2);
    });
}

currencyEl_one.addEventListener("change", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
amountEl_two.addEventListener("input", calculate);
swap.addEventListener("click", function(){
    let temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});