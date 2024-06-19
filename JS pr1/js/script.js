function km() {
    var x = prompt('Введите сколько нужно пробежать км');
    let i = 10;
    let d = 1;
    while (x>i){
    	i = i+(0.1 * i);
    	d = d+1;
    }
    alert(d + ' дней');
}
km();


function rashod() {
	let s = Number(prompt('Введите стипендию в месяц'));
	s = s * 10;
	let r = Number(prompt('Введите расход в месяц'));
	let mes = 1;
	let sum = 0;
	while(mes<=10){
		sum+=r;
		r = r + (0.03 * r);
		mes++;
	}
	let dengi = sum - s;
	alert((dengi).toFixed(2)+' руб.');
}
rashod();