function t_tA(e){
	document.getElementById('texxt').style.textAlign=e.id;
}

function z_tA(e){
	document.getElementById('top').style.textAlign=e.id;
}

function img(e){
	var i = e.id;
	document.getElementById('img').src = i;
}

function zaag(){
	document.getElementById('top').style.fontSize=document.getElementById('zag').value + "pt";
}

function texxt(){
	document.getElementById("texxt").style.fontSize=document.getElementById("vce").value + "pt";
}

function visota(){
	document.getElementById("img").style.height=document.getElementById("h.img").value + "px";
}

function ismena(){
	document.getElementById("hid").style.display="inline-block";
	document.getElementById('t').focus();
}

function color(e){
	document.getElementById('texxt').style.color = e.id;
}

function clos(){
	document.getElementById('hid').style.display="none";
}

function iz(){
	document.getElementById('texxt').innerText=document.getElementById('t').value;
}


function del(){
	document.getElementById('ch').style.display="none";
	document.getElementById('y').style.display="block";

}

function vel(){
	document.getElementById('ch').style.display="block";
	document.getElementById('y').style.display="none";

}