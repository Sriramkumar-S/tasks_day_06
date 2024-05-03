// 1. Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
        

let request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all');

request.send();

request.onload = () => {
    let response = JSON.parse(request.response);
    console.log(response)

    // a. Get all the countries from Asia continent /region using Filter method
    let data_1 = response.filter((element) => element.region === "Asia");
    let countriesInAsia = data_1.map((element) => element.name.common);
    console.log(`Countries in Asia region: ${countriesInAsia}`)

    // b. Get all the countries with a population of less than 2 lakhs using Filter method
    let data_2 = response.filter((element) => element.population < 200000);
    let cntPopulationBelow2Lakh = data_2.map((element) => element.name.common);
    console.log(`Countries with population less than 200000: ${cntPopulationBelow2Lakh}`);

    // c. Print the following details name, capital, flag, using forEach method
    response.forEach(element => {
        console.log(`Capital of ${element.name.common} is ${element.capital ? element.capital[0] : "NA"} and its flag is ${element.flags.png}.`)
    });

    // d. Print the total population of countries using reduce method
    let totalPopulation = response.reduce((acc, curr) => acc+curr.population, 0);
    console.log(`Total population of all countries: ${totalPopulation}`);

    // e. Print the country that uses US dollars as currency.

    let data_3 = response.filter(element => (element.currencies ? "USD".includes(Object.keys(element.currencies)) : ""));
    let usdCurrCountries = data_3.map(element => element.name.common);
    console.log(`Countries using USD as their currency are : ${usdCurrCountries}`)
}