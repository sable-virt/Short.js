# Short.JS

JavaScriptの関数を短くするユーティリティライブラリ  
(実用性はありません)

## 使い方

スクリプトを読み込みます。

	<script src="/path/to/short.js"></script>

### 省略参照
* s.w - window
* s.d - document
* s.b = document.body,
* s.c = window.console;

### 関数

#### s(Function) 
window.addEventListener('load',Function);のエイリアス

	s(function() {
		alert('onload');
	});

#### s(selector)
window.getElementById(selector);のエイリアス

	//<div id="hoge"></div>
	var element = s('hoge');	

#### s.c
window.consoleのエイリアス

	//window.console.log('hoge');
	s.c.log('hoge');	

#### s.l(Function)

for()のエイリアス
	
	// for(var i = 0, len = a.length; i < len; i++) {
	var a = [1,2,3];
	s.l(a,function(value,index) {
		s.c.log(value,index);
	});

	// for (var key in o) {
	var o = {a:"test",b: "hoge"};
	s.l(o,function(value,key) {
		s.c.log(value,key);
	});

#### w.a
window.alertのエイリアス

	w.a('alert');

#### w.t(Function,deley)

window.setTimeoutのエイリアス

	w.t(function() {
		// 	},100);

#### w.i(Function,interval)

window.setIntervalのエイリアス

	w.i(function() {
		//
	},1000);


#### s(target,word,args...);
任意の関数を省略系で呼び出します。

	//document.body.addEventListener("click",function(e){});
	s(w.b,"ael","click",function(e){});	

■省略ルール  
getElementById => gebi  
addEventListener => ael  
querySelectorAll => qsa

※ 最初の文字 + 大文字になっている部分を小文字で

これでJavaScriptを短縮して書くことができます。
