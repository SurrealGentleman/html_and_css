function entry() {
    var login = prompt('Введите логин: ', login);
    if (login === null) {
        alert("Вход отменён");
        return;
    }
    switch (login) {
    case 'Админ':
        admin();
        break;
    }
}

function admin(){
	var password = prompt("Введите пароль", password);
	if (password == null) {
        alert("Вход отменён");
        return;
    }
    if (password == 'Чёрный Властелин'){
    	alert("Добро пожаловать!");
    	return;
    }
    else{
    	alert("Пароль неверен");
    	return;
    }
}

entry();

function season(winter, spring, summer, autumn){
	let num = prompt("Введите номер месяца:");
	if (num > 12){
		alert("Такого месяца нет(");
	}
	for (let i = 0; i < winter.length; i++) {
        if (winter[i] == num) {
            alert("Зима");
            break;
        }
    }
    for (let i = 0; i < spring.length; i++) {
        if (spring[i] == num) {
            alert("Весна");
            break;
        }
    }
    for (let i = 0; i < summer.length; i++) {
        if (summer[i] == num) {
            alert("Лето");
            break;
        }
    }
    for (let i = 0; i < autumn.length; i++) {
        if (autumn[i] == num) {
            alert("Осень");
            break;
        }
    }
}

let winter = [12, 1, 2];
let spring = [3, 4, 5];
let summer = [6, 7, 8];
let autumn = [9, 10, 11];
season(winter, spring, summer, autumn);

function welcome(){
	let gender = prompt("Введите свой пол: (мужской/женский)");
	let age = prompt("Введите свой возраст: ");
	if (gender == "мужской"){
		if ((age > 0) & (age < 17)){
			alert("Здравствуй, мальчик");
		}
		else if ((age >= 17) & (age < 21)){
			alert("Здравствуй, юноша");
		}
		else if (age >= 21){
			alert("Здравствуй, мужчина");
		}
		else{
			alert("Неверные данные");
		}
	}
	else if (gender == "женский"){
		if ((age > 0) & (age < 16)){
			alert("Здравствуй, девочка");
		}
		else if ((age >= 16) & (age < 20)){
			alert("Здравствуй, девушка");
		}
		else if (age >= 20){
			alert("Здравствуй, женщина");
		}
		else{
			alert("Неверные данные");
		}
	}
}

welcome();

function zodiac_sign(){
	let dat = prompt("Введите день и месяц рождения (день.месяц)")
	var d = dat.split('.');
	console.log(d);
	let x = d[1];
	switch (x){
		case '1':{
			if (d[0] == 1){
				alert("Яблоня");
				break;
			}
			else if ((d[0] >= 2) & (d[0] <= 11)){
				alert("Пихта");
				break;
			}
			else if ((d[0] >= 12) & (d[0] <= 24)){
				alert("Вяз");
				break;
			}
			else if ((d[0] >= 25) & (d[0] <= 31)){
				alert("Кипарис");
				break;
			}
		}
		case '2':{
			if ((d[0] >= 1) & (d[0] <= 3)){
				alert("Кипарис");
				break;
			}
			else if ((d[0] >= 4) & (d[0] <= 8)){
				alert("Тополь");
				break;
			}
			else if ((d[0] >= 9) & (d[0] <= 18)){
				alert("Картас");
				break;
			}
			else if ((d[0] >= 19) & (d[0] <= 29)){
				alert("Сосна");
				break;
			}
			else{
				alert("нет такого числа");
				break;
			}
		}
		case '3':{
			if ((d[0] >= 1) & (d[0] <= 10)){
				alert("Ива");
				break;
			}
			else if ((d[0] >= 11) & (d[0] <= 20)){
				alert("Липа");
				break;
			}
			else if (d[0] == 21){
				alert("Дуб");
				break;
			}
			else if ((d[0] >= 22) & (d[0] <= 31)){
				alert("Орешник");
				break;
			}
		}
		case '4':{
			if ((d[0] >= 1) & (d[0] <= 10)){
				alert("Рябина");
				break;
			}
			else if ((d[0] >= 11) & (d[0] <= 20)){
				alert("Клен");
				break;
			}
			else if ((d[0] >= 24) & (d[0] <= 30)){
				alert("Орех");
				break;
			}
		}
		case '5':{
			if ((d[0] >= 1) & (d[0] <= 14)){
				alert("Жасмин");
				break;
			}
			else if ((d[0] >= 15) & (d[0] <= 24)){
				alert("Каштан");
				break;
			}
			else if ((d[0] >= 25) & (d[0] <= 31)){
				alert("Ясень");
				break;
			}
		}
		case '6':{
			if ((d[0] >= 1) & (d[0] <= 3)){
				alert("Ясень");
				break;
			}
			else if ((d[0] >= 4) & (d[0] <= 13)){
				alert("Граб");
				break;
			}
			else if ((d[0] >= 14) & (d[0] <= 23)){
				alert("Инжир");
				break;
			}
			else if (d[0] == 24){
				alert("Береза");
				break;
			}
			else if ((d[0] >= 25) & (d[0] <= 30)){
				alert("Яблоня");
				break;
			}
		}
		case '7':{
			if ((d[0] >= 1) & (d[0] <= 4)){
				alert("Яблоня");
				break;
			}
			else if ((d[0] >= 5) & (d[0] <= 14)){
				alert("Пихта");
				break;
			}
			else if ((d[0] >= 15) & (d[0] <= 25)){
				alert("Вяз");
				break;
			}
			else if ((d[0] >= 26) & (d[0] <= 31)){
				alert("Кипарис");
				break;
			}
		}
		case '8':{
			if ((d[0] >= 1) & (d[0] <= 4)){
				alert("Кипарис");
				break;
			}
			else if ((d[0] >= 5) & (d[0] <= 13)){
				alert("Тополь");
				break;
			}
			else if ((d[0] >= 14) & (d[0] <= 23)){
				alert("Картас");
				break;
			}
			else if ((d[0] >= 24) & (d[0] <= 31)){
				alert("Сосна");
				break;
			}
		}
		case '9':{
			if ((d[0] >= 1) & (d[0] <= 2)){
				alert("Сосна");
				break;
			}
			else if ((d[0] >= 3) & (d[0] <= 12)){
				alert("Ива");
				break;
			}
			else if ((d[0] >= 13) & (d[0] < 23)){
				alert("Липа");
				break;
			}
			else if (d[0] == 23){
				alert("Маслина");
				break;
			}
			else if ((d[0] >= 24) & (d[0] <= 30)){
				alert("Орешник");
				break;
			}
		}
		case '10':{
			if ((d[0] >= 1) & (d[0] <= 3)){
				alert("Орешник");
				break;
			}
			else if ((d[0] >= 4) & (d[0] <= 13)){
				alert("Рябина");
				break;
			}
			else if ((d[0] >= 14) & (d[0] <= 23)){
				alert("Клен");
				break;
			}
			else if ((d[0] >= 24) & (d[0] <= 31)){
				alert("Орех");
				break;
			}
		}
		case '11':{
			if ((d[0] >= 1) & (d[0] <= 2)){
				alert("Орех");
				break;
			}
			else if ((d[0] >= 3) & (d[0] <= 11)){
				alert("Жасмин");
				break;
			}
			else if ((d[0] >= 12) & (d[0] <= 21)){
				alert("Каштан");
				break;
			}
			else if ((d[0] >= 22) & (d[0] <= 30)){
				alert("Ясень");
				break;
			}
		}
		case '12':{
			if (d[0] == 1){
				alert("Ясень");
				break;
			}
			else if ((d[0] >= 2) & (d[0] <= 11)){
				alert("Граб");
				break;
			}
			else if ((d[0] >= 12) & (d[0] < 21)){
				alert("Инжир");
				break;
			}
			else if ((d[0] >= 21) & (d[0] <= 22)){
				alert("Липа");
				break;
			}
			else if ((d[0] > 22) & (d[0] <= 31)){
				alert("Яблоня");
				break;
			}
		}
	}
}

zodiac_sign();
