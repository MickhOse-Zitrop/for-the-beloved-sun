var c = document.getElementById("c");
var ctx = c.getContext("2d");
var cw = c.width = 500;
var ch = c.height = 500;
var cx = cw / 2, cy = ch / 2;
var rad = Math.PI / 180;
var howMany = 500;
var p = [];
var colors = ["242,41,41", "222,80,80", "247,111,111", "255,145,145", "252,199,199"];
ctx.strokeStyle = "white";
ctx.globalAlpha = .7;

function particles() {
	this.r = randomIntFromInterval(2, 12);
	var innerR = Math.round(Math.random() * 130) + 1;
	var innerA = Math.round(Math.random() * 360) + 1;
	this.x = cx + innerR * Math.cos(innerA * rad);
	this.y = cy + 20 + innerR * Math.sin(innerA * rad);
	this.ix = (Math.random()) * (Math.random() < 0.5 ? -1 : 1);
	this.iy = (Math.random()) * (Math.random() < 0.5 ? -1 : 1);
	this.alpha = Math.random();
	this.c = "rgba(" + colors[Math.round(Math.random() * colors.length) + 1] + "," + this.alpha + ")";
}

for (var i = 0; i < howMany; i++) {
	p[i] = new particles();
}

function Draw() {
	ctx.fillStyle = "#222226";
	ctx.fillRect(0, 0, cw, ch);
	for (var i = 0; i < p.length; i++) {
		ctx.fillStyle = p[i].c;
		// Текущий путь для  isPointInPath 
		thePath(p[i].r);

		if (ctx.isPointInPath(p[i].x, p[i].y)) {
			p[i].x += p[i].ix;
			p[i].y += p[i].iy;
			ctx.beginPath();
			ctx.arc(p[i].x, p[i].y, p[i].r, 0, 2 * Math.PI);
			ctx.fill();

		} else {
			p[i].ix = -1 * p[i].ix;
			p[i].iy = -1 * p[i].iy;
			p[i].x += p[i].ix;
			p[i].y += p[i].iy;
		}
	}
	window.requestAnimationFrame(Draw);
}
window.requestAnimationFrame(Draw);

function thePath(r) {
	//Рисуем наше сердечко
	ctx.beginPath();
	ctx.moveTo(250, 200);
	ctx.arc(350, 200, 100 - r, Math.PI, Math.PI * 0.23);
	ctx.lineTo(250, 450);
	ctx.arc(150, 200, 100 - r, Math.PI * 0.77, 0);
}

function randomIntFromInterval(mn, mx) {
	return ~~(Math.random() * (mx - mn + 1) + mn);
}

c.onclick = function () {
	document.location.replace('for-the-beloved-sun/index.html');
}