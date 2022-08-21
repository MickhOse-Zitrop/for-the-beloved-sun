let yes = document.getElementById("yes");
let no = document.getElementById('no');
let achtung = document.getElementById('achtung');

yes.onclick = function () {
	document.location.replace('for-the-beloved-sun/index.html');
};

no.onclick = function () {
	achtung.classList.add('showed');
};
