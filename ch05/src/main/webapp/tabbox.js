// DOM Level 3 Event 처리 : 특정 Element의 Event의 Listener를 등록하는 방식 
// 특정 이벤트 핸들러(Listener)를 여러개 등록할 수 있다.
var TabBox = {
	init: function() {
		window.addEventListener('load', this._onWindowLoad);
	},
	_onWindowLoad: function() {
		// div : class='tab-box'
		var divTabBox = document.getElementsByClassName('tab-box')[0];
		var ulTabBox = divTabBox.childNodes[1];
		var liTabs = ulTabBox.getElementsByTagName('li');
		
		for(var i = 0; i < liTabs.length; i++) {
			liTabs[i].addEventListener('click', TabBox.onTabClicked);
		}
	},
	onTabClicked: function() {
		// unselect
		var liSelecteds = document.getElementsByClassName('selected');
		(liSelecteds.length == 1) && (liSelecteds[0].className = '');
		
		// select
		this.className = 'selected';
	}
};

window.addEventListener('load', function() {
	console.log("dom loaded!!!!");
});