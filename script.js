let title = "newProject"
let screens = "simple,complex,interactive"
let screenPrice = 100
let rollback = 20
let fullPrice = 50
let adaptive = true

console.log(typeof title);
console.log(typeof screens);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
console.log(fullPrice);

console.log(screens.toLowerCase());
console.log(screens.split());

console.log("Процент отката посреднику за работу " + fullPrice * (rollback/100) + " рублей");



