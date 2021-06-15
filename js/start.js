// JavaScript Document

var pageNo;
var storyNo;
var endNo;
var mainNo;
var ans1;
var ans2;
var ans3;

function goNext(no) { 
	if ( no == null || no == "" ) {
		no = 1;
	}
	if ( no > 4 ) {
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
function storyNext(pNo){
	if ( pNo == null || pNo == "" ) {
		pNo = 1;
	}
	if ( pNo > 8 ) {
		return;
	}
	if (pNo ==4) {
	nextbtn.style.display = "none"	
	}
	if (pNo ==5) {
	nextbtn.style.display = "block"	
	}
	//alert(pNo);
	
	var storyId  = "story_" + pNo;
	var pNo2 = pNo + 1;
	var storyId2 = "story_" + pNo2;
	
	eval(storyId).style.display = "none";
	eval(storyId2).style.display = "block";
	storyNo = pNo2;
}

function end_1(){
	ending_1.style.display = "none";
	ending_2.style.display = "block";
	nextbtn.style.display = "none";
}

function end_2(eNo){
	if ( eNo == null || eNo == "" ) {
		eNo = 1;
	}
	if ( eNo > 8 ) {
		return;
	}
	if (eNo == 5) {
		nextbtn.style.display = "none";
	}
	//alert(eNo);
	
	var endId  = "ending2_" + eNo;
	var eNo2 = eNo + 1;
	var endId2 = "ending2_" + eNo2;
	
	eval(endId).style.display = "none";
	eval(endId2).style.display = "block";
	endNo = eNo2;
}

function mainNext(mNo){
	if ( mNo == null || mNo == "" ) {
		mNo = 1;
	}
	if ( mNo > 14 ) {
		return;
	}
	if (mNo == 14) {
		nextbtn.style.display = "none";
	}
	//alert(eNo);
	
	var mainId  = "main_" + mNo;
	var mNo2 = mNo + 1;
	var mainId2 = "main_" + mNo2;
	
	eval(mainId).style.display = "none";
	eval(mainId2).style.display = "block";
	mainNo = mNo2;
}

function goLeft() {
	main_15.style.display="none";
	room_left.style.display="block";
}

function lobby() {
	room_left.style.display="none";
	main_15.style.display="block";
}
function stanza_1(){
	room_left.style.display="none";
	stanza.style.display="block";
}

function fbtn1() {
	if ( btn1.value === "Starry" ) {
		ans1 = btn1.value;
	}
	if ( ans1 === "Starry" ) {
		ans2 = btn1.value;
		btn1.value = "Aspect";
		btn2.value = "Eyes";
	}
	if ( ans2 === "Aspect" ) {
		btn1.value = "Tender";
		btn2.value = "Heaven";
		ans3 = btn2.value;	
	}
	if ( ans3==="Tender") {
		stanza.style.display = "none";
		room_left_com.style.display="block";
	}
}

function fbtn2() {
	if ( btn2.value === "Cloudless" ) {
		ans1 = btn2.value;
	}
	if ( ans1 === "Cloudless" ) {
		ans2 = btn2.value;
		btn1.value = "Aspect";
		btn2.value = "Eyes";
	}
	if ( ans2 === "Eyes") {
		btn1.value = "Tender";
		btn2.value = "Heaven";	
		ans3 = btn2.value;
		}
	if ( ans3==="Heaven") {
		stanza.style.display = "none";
		room_left_com.style.display="block";
	}
}



