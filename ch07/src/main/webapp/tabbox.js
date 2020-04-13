//jQuery
var TabBox = {
	init: function() {
		$(this._init);
	},
	_init: function() {
		$('.tab-box li').click(TabBox._changeTab);
		TabBox._changeTab();
	},
	_changeTab: function() {
		$('.tab-box li.selected').removeClass('selected');
		
		var $liTab = (this == TabBox) ? $('.tab-box li:first-child') : $(this);
		
		$('.tab-box div').text($liTab.data('no') + "의 탭뷰입니다.");
		$liTab.addClass('selected');
	}
};


////////////////////////////////////////////////
// 내가 짠 코드


//var TabBox = {
//_onTabClicked: function(){
//	$('.tab-box ul li.selected').removeClass('selected');
//	$(this).addClass('selected');
//	var index = $('li').index(this);
//	$('.tab-box div').text('탭뷰입니다.' + (index + 1));
//},
//init : function() {
//	$(function() {
//		$('.tab-box ul li').click(TabBox._onTabClicked);
//	});
//}
//}