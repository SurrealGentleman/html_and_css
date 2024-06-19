function proverka (){
	var PerOne = Number(document.anketa.pole1.value);
	var PerTwo = Number(document.anketa.pole2.value);
	var PerThree = Number(document.anketa.pole3.value);
	if ((PerOne == '') || (PerTwo == '') || (PerThree == '')){
		document.getElementById('perform').disabled = true;
	}
	else{
		document.getElementById('perform').disabled = false;
	}
}

function start () {
	var PerOne = Number(document.anketa.pole1.value);
	var PerTwo = Number(document.anketa.pole2.value);
	var PerThree = Number(document.anketa.pole3.value);
	var cost = PerOne * PerTwo;
	var size = cost  * (PerThree / 100);
	var costR = cost + size;
	if (!(isNaN(PerOne) && isNaN(PerTwo) && isNaN(PerThree))) {
		document.anketa.pole4.value = cost.toFixed(2);
		document.anketa.pole5.value = size.toFixed(2);
		document.anketa.pole6.value = costR.toFixed(2);
		document.anketa.pole1.value = "$" + PerOne;
		document.anketa.pole2.value = PerTwo + " р.";
		document.anketa.pole3.value = PerThree + " %";
	}
	else{
		alert("Неверные данные");
	}
}


function EXIT() {
	window.close();
}