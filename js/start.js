// JavaScript Document

var pageNo;
var ans1;
var ans2;
var ans3;

function begin(no) { 
	if ( no == null || no == "" ) {
		no = 1;
	}
	if ( no > 5 ) {
		return;
	}
	//alert(no);
	
	var objId  = "prolog_" + no;
	var no2 = no + 1;
	var objId2 = "prolog_" + no2;
	
	eval(objId).style.display = "none";
	eval(objId2).style.display = "block";
	pageNo = no2;
	//페이지 전환, next 버튼이 사용되지 않을시 숨길 필요 존재
}
//선택화면이 연달아 나옴, 배경 이미지만 각각에 맞게 삽입 선택 마지막에 버튼이 안보이도록 제거
function fbtn1() {
	if ( btn1.value === "Starry" ) {
		btn1.value = "aaa";
		btn2.value = "bbb";
		ans1 = btn1.value;
	}
	if ( btn1.value === "aaa" ) {
		btn1.value = "aaabbb";
		btn2.value = "bbbbbb";
		ans2 = btn1.value;
	}
	if ( btn1.value === "aaabbb" ) {
		//btn1.value = "aaabbb";
		//btn2.value = "bbbbbb";
		ans3 = btn1.value;
	}
	
}

function fbtn2() {
	if ( btn2.value === "Cloudless" ) {
		btn1.value = "aaa";
		btn2.value = "bbb";
		ans1 = btn2.value;
	}
	if ( btn2.value === "bbb" ) {
		btn1.value = "eeee";
		btn2.value = "ffff";
		ans2 = btn2.value;
	}
	if ( btn2.value === "bbbbbb" ) {
		//btn1.value = "aaabbb";
		//btn2.value = "bbbbbb";
		ans3 = btn2.value;
	}
}
