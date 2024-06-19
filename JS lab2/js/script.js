function mass() {
	var arr = [];
	var n = prompt('Сколько элементов в массиве?');
	for (let i = 1; i <= n; i++) {
		var elem = prompt('Введите элемент массива:');
		arr.push(elem);
	}
	alert(arr);
	var sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0){
			sum = sum + Number(arr[i]);
		}
	}
	alert(sum)
}

mass();


function interval() {
	var arr = [];
	var n = prompt('Сколько элементов в массиве?');
	for (let i = 1; i <= n; i++) {
		var elem = prompt('Введите элемент массива:');
		arr.push(elem);
	}
	var mn = Math.min(...arr);
	var mx = Math.max(...arr);
	let result = Math.max.apply(Math, arr);
	var imn = arr.indexOf(String(mn));
	var imx = arr.indexOf(String(mx));
	var sum = 1;
	for (let i = 0; i < arr.length; i++){
		if (i == imn){
			for (let k = i+1; k < imx; k++){
				sum = sum * arr[k];
			}
		}
		else if(i == imx){
			for (let k = i+1; k < imn; k++){
				sum = sum * arr[k];
			}
		}
	}
	console.log(arr);
	console.log(sum);
	alert(sum);
}

interval();


function sort() {
	var arr = [];
	var n = prompt('Сколько элементов в массиве?');
	for (let i = 1; i <= n; i++) {
		var elem = prompt('Введите элемент массива:');
		arr.push(elem);
	}
	arr.sort((a, b) => a - b);
	alert(arr);
}

sort();
