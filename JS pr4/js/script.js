function start() {
	var per_sum = document.getElementById("per_sum").value;
	var button = document.getElementById("button_schet");
	if (per_sum == ''){
		button.disabled = true;
	}
	else{
		button.disabled = false;
	}
}


function rest(){
	document.getElementById('button_schet').disabled = true;
	document.getElementById('form').reset();
}

function schet(){
	var per_sum = Number(document.getElementById("per_sum").value);
	var sel = document.getElementById("iz");
	var sel2 = document.getElementById("v");
	var ar = Number(sel.options[sel.selectedIndex].value);
	var ar2 = Number(sel2.options[sel2.selectedIndex].value);
	var kal = ar / ar2;
	document.getElementById("kurs").value = kal.toFixed(2);
	var text = sel.options[sel.selectedIndex].text;
	var text2 = sel2.options[sel2.selectedIndex].text;
	var res = per_sum * kal	;
	document.getElementById("textar").value = `Перевод: ` + text + ` - ` + text2 + ` по курсу ` + kal.toFixed(2) + `
К выдаче: ` + res.toFixed(2);
}