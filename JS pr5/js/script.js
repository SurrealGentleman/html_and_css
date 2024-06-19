function butCheck() {
	var surname = document.getElementById('fam').value;
	console.log(surname);
	var exp = /^[А-ЯЁ][а-яё]{2,19}$/;


	var login = document.getElementById('log').value;
	var expL = /^[A-Z a-z 0-9]{1,}$/;
	if (expL.test(login)==true){
		if ((login.length < 3) && (login.length > 20)){
			alert("Неверная длина!");
		}
	}


	var pass = document.getElementById('pass').value;
	var expP = /.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/;
	if (expP.test(pass)==true){
		if (pass.length < 8){
			alert("Слишком коротко!");
		}
	}


	var pass1 = document.getElementById('pass').value;
	var pass2 = document.getElementById('check_pass').value;
	if (pass1 == pass2){
		var checkpass = true;
	}


	var dr = document.getElementById('brday').value;
	var expD = /(^(0[0-9]|[1-9]|[12][0-9]|3[01])[.-\/](0[13578]|[13578]|1[02])[.-\/]([0-9]{2}|19[0-9]{2}|20[0-9]{2})$)|(^(0[1-9]|[1-9]|[12][0-9]|30)[.-\/](0[469]|[469]|11)[.-\/]([0-9]{2}|19[0-9]{2}|20[0-9]{2})$)|(^(0[1-9]|[1-9]|[12][0-9])[.-\/](02|2)[.-\/]([0-9]{2}|19[0-9]{2}|20[0-9]{2})$)/;


	var tel = document.getElementById('number').value;
	var expT = /(^\([0-9]{3}\)[ ]?[0-9]{3}[- ]?[0-9]{4}$)|(^\([0-9]{3}\)[- ]?[0-9]{2}[- ]?[0-9]{2}[- ]?[0-9]{2}$)/;



	var array_inn = [];
	var checkinn;
	var znach = document.getElementById('inn').value;
	console.log(znach);
	var expZ = /^[0-9]{10}$|^[0-9]{12}$/;
	console.log(expZ.test(znach));
	if (expZ.test(znach)==true){
		if (znach.length == 12) {
			array_inn = znach.split("");
			console.log(array_inn);
			var inn1 = (array_inn[0]*7+array_inn[1]*2+array_inn[2]*4+array_inn[3]*10+array_inn[4]*3+array_inn[5]*5+array_inn[6]*9+array_inn[7]*4+array_inn[8]*6+array_inn[9]*8)%11;
			var inn2 = (array_inn[0]*3+array_inn[1]*7+array_inn[2]*2+array_inn[3]*4+array_inn[4]*10+array_inn[5]*3+array_inn[6]*5+array_inn[7]*9+array_inn[8]*4+array_inn[9]*6+inn1*8)%11;
			if(inn1 == 10){
				inn1 = 0;
			}
			if (inn2 == 10){
				inn2 = 0;
			}
			console.log(inn1);
			if (inn1==array_inn[10] && inn2==array_inn[11]) {
				null;
			}
		}
		if (znach.length == 10){
			var innnum = (array_inn[0]*2+array_inn[1]*4+array_inn[2]*10+array_inn[3]*3+array_inn[4]*5+array_inn[5]*9+array_inn[6]*4+array_inn[7]*6+array_inn[8]*8)%11;
			if(innnum == 10){
				innnum = 0;
			}
			if (innnum == array_inn[9]) {
				null;
			}
		}
	}



	if (exp.test(surname) && expP.test(pass) && expL.test(login) && checkpass && expD.test(dr) && expT.test(tel) && expZ.test(znach)){
		document.getElementById("sub").disabled = false;
	}
	else{
		document.getElementById("sub").disabled = true;
	}
}

function innbutton(){
	alert("ИНН правильный");
}