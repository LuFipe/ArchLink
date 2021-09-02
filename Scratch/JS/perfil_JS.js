function hideSect(){
	let perfilSect = window.document.getElementById("Perf_ID");
	let notSect = window.document.getElementById("Not_ID");
	let erSect = window.document.getElementById("expRede_ID");

	let formExp = window.document.getElementById("addExp_ID");
	let formRede = window.document.getElementById("addRede_ID");
	let formPerf = window.document.getElementById("altPerfil_ID");
	
	perfilSect.style.zIndex = 0;
	perfilSect.style.backgroundColor =  "transparent";

	notSect.style.zIndex = 0;
	notSect.style.backgroundColor =  "transparent";

	erSect.style.zIndex = 0;
	erSect.style.backgroundColor =  "transparent";

	formExp.style.display = "none";
	formRede.style.display = "none";
	formPerf.style.display = "none";
}
function showSect(ID){
	hideSect();

	let sect = window.document.getElementById(ID);
	sect.style.zIndex = 3;
	sect.style.backgroundColor =  "#D97B29";
}

function hideMsgNot(){
	let tbMsg = window.document.getElementById("tabMsg_ID");
	let btnMsg = window.document.getElementById("msgButn_ID")
	let tbNot = window.document.getElementById("tabNot_ID");
	let btnNot = window.document.getElementById("notButn_ID") 

	tbMsg.style.display = "none";
	btnMsg.style.backgroundColor = "#997D65";

	tbNot.style.display = "none";
	btnNot.style.backgroundColor = "#997D65";
}

function showNotMsg(ID_1, ID_2){
	hideMsgNot();

	let tab = window.document.getElementById(ID_1);
	let btn = window.document.getElementById(ID_2)
	tab.style.display = "table";
	btn.style.backgroundColor = "#D9B18F";
}

function showForm(ID){
	hideSect();

	let form = window.document.getElementById(ID)
	form.style.display = "grid";
	form.style.zIndex = 3;
}

function showTrabalhando(){
	let divisao = window.document.getElementById("trabalhando_ID");
	divisao.style.display = "block";
}

function hideTrabalhando(){
	let divisao = window.document.getElementById("trabalhando_ID");
	divisao.style.display = "none";
}