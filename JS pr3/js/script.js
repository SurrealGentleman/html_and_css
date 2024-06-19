function start() {
	var name = document.getElementById("name_tovar").value;
	var amount = document.getElementById("amount").value;
	var price = document.getElementById("price").value;

	if ((name == '') || (amount == '') || (price == '')){
		alert("Не все поля заполнены!");
	}
	else{
		check();
	}
}

function proverka(){
	if ((event.keyCode < 48) || (event.keyCode > 57)) {
	event.returnValue = false;
	alert('Данные введены неверно');
	}
}

function check(){
	var name = document.getElementById("name_tovar").value;
	var amount = document.getElementById("amount").value;
	var price = document.getElementById("price").value;
	var cost = 0;
   	if(document.getElementsByName("payment")[0].checked) {
   		cost = price * amount;
   		document.getElementById("textar").value = name + `
Количество: ` + amount + `шт. 
Цена за штуку: ` + price + `р.
Стоимость: ` + cost + `р.
Вид Оплаты: ` + document.getElementById("nalic").textContent;
   	}
   	else if(document.getElementsByName("payment")[1].checked == true) {
   		cost = (price * amount) - (((price * amount)/ 100) * 5);
   		document.getElementById("textar").value = name + `
Количество: ` + amount + `шт. 
Цена за штуку: ` + price + `р.
Стоимость: ` + cost + `р.
Вид Оплаты: ` + document.getElementById("visaC").textContent;
   	} 
   	else if(document.getElementsByName("payment")[2].checked == true) {
   		cost = (price * amount) - (((price * amount)/ 100) * 3);
   		document.getElementById("textar").value = name + `
Количество: ` + amount + `шт. 
Цена за штуку: ` + price + `р.
Стоимость: ` + cost + `р.
Вид Оплаты: ` + document.getElementById("masC").textContent;
   	} 
   	else if(document.getElementsByName("payment")[3].checked == true) {
   		cost = (price * amount) - (((price * amount)/ 100) * 5);
   		var cashback = (cost / 100) * 3;
   		document.getElementById("textar").value = name + `
Количество: ` + amount + `шт. 
Цена за штуку: ` + price + `р.
Стоимость: ` + cost + `р.
Кэшбек: ` + cashback + `р.
Вид Оплаты: ` + document.getElementById("tinkC").textContent;
   	} 
}

