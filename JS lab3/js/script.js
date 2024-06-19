function offers() {
	var tt = prompt("Введите текст: ");
	var ttt = tt.split('!').join('.').split('?').join('.').split('...').join('.').split('.');
	var res = ttt.length-1;
	console.log(ttt);
	alert("Кол-во предложений: " + res);
	var ccount = 0;
	var w = "Компьютер";
	w = w.toLowerCase();
	var cc = tt.split(',').join('').split('.').join('').split('<').join('').split('>').join('').split(':').join('').split(' ');
	for (var i = 0; i < cc.length; i++){
		if (cc[i].toLowerCase() == w){
			ccount++;	
		}
	}
	alert("Кол-во слова 'компьютер' "+ ccount);


}

function words(){
	var count = 0;
	var ww = prompt("Введите текст: ");
	var word = prompt("Введите букву: ");
	word.toLowerCase();
	ww = ww.split(',').join('').split('.').join('').split('<').join('').split('>').join('').split(' ');
	for (var i = 0; i < ww.length; i++){
		var ar = ww[i].split('');
		if(ar[0].toLowerCase() == word){
			count++;
		}		
	}
	alert("Кол-во слов на '" + word + "' "+ count);
}

offers();
words();
// задание 1 ^


function start() {
	var text = prompt("Введите текст: ");
	var ttext = text.split('. ').join('.').split('.');
	var pr = ttext.length-1;
	console.log(ttext);
	var res = "";
	for (var i = 0; i < ttext.length-1; i++){
		res = res + ttext[i] + ". ";
	}	
	alert(res);
	var stext = res.split('. ').join(' ').split(' ');
	var sl = stext.length-1;
	alert("Предложений: " + pr);
	alert("Слов: " + sl);
}

start();
// задание 2 ^


function sortT(){
	var text = prompt("Введите строку символов");
	console.log(text);
	var i = text.indexOf("?");
	var k = text.lastIndexOf("!");
	var textRes = text.substring(i+1, k);
	var ssort = textRes.split("").sort().join("");
	text = text.replace(textRes, ssort);
	alert(text);
}

sortT();
// задание 3 ^



function search() {
	var oneS = prompt("Введите первую строку: ");
	var twoS = prompt("Введите вторую строку: ");
	for (var i = 0; i<oneS.length; i++){
		var regexp = new RegExp(oneS[i], "gi");
		alert("Кол-во " + oneS[i] +": " + (twoS.match(regexp) || []).length);
	}
}

search();
// задание 4 ^