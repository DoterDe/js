
// 1
const userName = prompt("Введите ваше имя:");
alert(`Привет, ${userName}!`);
// 2
const currentYear = 2024;
const birthYear = prompt("Введите год вашего рождения:");
const age = currentYear - birthYear;
alert(`Вам ${age} лет.`);
// 3
const sideLength = prompt("Введите длину стороны квадрата (в см):");
const perimeter = 4 * sideLength;
alert(`Периметр квадрата равен ${perimeter} см.`);
// 4
const radius = prompt("Введите радиус окружности (в см):");
const area = Math.PI * radius ** 2;
alert(`Площадь окружности равна ${area.toFixed(2)} см².`);

// 5
const distance = prompt("Введите расстояние между городами (в км):");
const travelTime = prompt("Введите время в пути (в часах):");
const speed = distance / travelTime;
alert(`Необходимая скорость: ${speed.toFixed(2)} км/ч.`);
// 6
const dollarToEuroRate = 0.85;
const dollars = prompt("Введите сумму в долларах:");
const euros = dollars * dollarToEuroRate;
alert(`Эквивалент в евро: ${euros.toFixed(2)} €.`);
// 7
const flashDriveSizeGb = prompt("Введите объем флешки (в Гб):");
const fileSizeMb = 820;
const filesCount = Math.floor(flashDriveSizeGb * 1024 / fileSizeMb);
alert(`На флешку поместится ${filesCount} файлов.`);
// 8
const walletMoney = prompt("Введите сумму в кошельке (в тг):");
const chocolatePrice = prompt("Введите цену одной шоколадки (в тг):");
const chocolatesCount = Math.floor(walletMoney / chocolatePrice);
const change = walletMoney % chocolatePrice;
alert(`Вы можете купить ${chocolatesCount} `)
// 9
const userNumber = prompt("Введите трехзначное число:");
const reversedNumber = (userNumber % 10) * 100 + Math.floor((userNumber / 10) % 10) * 10 + Math.floor(userNumber / 100);
alert(`Число задом наперед: ${reversedNumber}`);
// 10
const userInteger = prompt("Введите целое число:");
const isEven = userInteger % 2 === 0;
alert(`Число ${userInteger} ${isEven ? "четное" : "нечетное"}.`);


