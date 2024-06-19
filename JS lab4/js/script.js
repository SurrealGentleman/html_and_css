var cost = [369, 349, 189, 179, 299, 149, 199];
var resultat = "";



function start(box) {
	let res = 0;

	const elements = document.querySelectorAll('[name="bbox"]');

	for (let i = 0; i < elements.length; i++) {
		if (elements[i].checked == true) {
	    	res += Number(cost[i]);
	    	document.getElementById('photo-img').src="../images/"+(i+1)+".jpg"
	  	}
	}
	document.getElementById('TA').value = res;
	
}

function zakaz(){
	var menu = ['Фаршированная форель', 'Телятина под соусом', 'Крем-суп из шампиньонов', 'Рулет со шпинатом', 'Пицца Гавайская', 'Ванильный коктейль', 'Напиток Грейпфрут'];
	for(var i = 0; i < menu.length; i++){
		if (document.getElementsByName('bbox')[i].checked == true){
			resultat+=menu[i];
			resultat+=' ';
			resultat+=cost[i];
			resultat+='\n';
		}
		
	}
	var ss = document.getElementById('TA').value;
	alert(resultat + ss);
	resultat = "";
}

