/**
 * short.js
 * コードを短くするだけのネタライブラリ
 * @example
 *	window.addEventListener("load",function(){}) => s(function() {});
 *	document.getElementById("hoge") => s("hoge");
 *	document.getElementsByClassName("hoge") => s(s.d,"gebcn","hoge");
 *		//s(対象,"関数名の頭文字",引数1,[引数2,引数3...])単語の頭文字だけ並べる
 *		//s.d => documentの略、s.w = windowの略、s.b => document.bodyの略
 *
 *	window.setTimeout(function(){},100) => s.t(function(){},100);
 *	window.setInterval(function(){},100) => s.i(function(){},100);
 * 	for (var i = 0; i < arr.length; i++) {} => s.l(function(value,index){});
 *	for (var key in obj) {} => s.l(function(value,key)){});
 *	window.console.log("aaa") => s.c.log("aaa");
 *	alert("aaa") => s.a("aaa");
 */
 
(function(w,d) {
	var c = {};
	function s(a,b) {
		if (typeof a === "function") return s(w,"ael","load",a);
		if (!b && typeof a === "string") return d.getElementById(a);
		if (c[b]) return e(a,a[c[b]],arguments);
		if (a[b]) return e(a,a[b],arguments);
		var r = new RegExp((b.charAt(0) + b.slice(1).toUpperCase()).split("").join("[a-z]+") + "[a-z]+$");
		for (k in a) {
			if (r.test(k)) {
				c[b] = k;
				return e(a,a[k],arguments);
			}
		}
		function e(a,b,c) {
			if (typeof b === "function") {
				return b.apply(a,Array.prototype.slice.call(c,2));
			} else {
				window.console.error("Not function:" + b + "(" + a + ")");
			}
		}
	}
	function l(a,b) {
		var k,i,len;
		if (a instanceof Array) {
			for (i = 0,len = a.length; i < len; i++) b.call(this,a[i],i);
		} else {
			for (k in a) b.call(this,a[k],k);
		}
	}
	s.w = w,
	s.d = d,
	s.b = s.d.body,
	s.l = l,
	s.t = w.setTimeout,
	s.i = w.setInterval;
	s.c = w.console;
	s.a = w.alert;
	window.s = s;
})(window,document);