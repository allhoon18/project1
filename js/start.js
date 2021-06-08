// JavaScript Document


function begin() {
/*이만큼만 있으면 이 기능을 사용할 수 있다*/
/*for(let i = 0; i<2; i++)*/
	
	prolog_1.style.display = "none";
	prolog_2.style.display = "block";
	}
function goNext() {
	var q1 = document.querySelector("#choice_1");
	q1.innerHTML= qnaList[0].a[0].answer;
	
	var q2 = document.querySelector("#choice_2");
	q2.innerHTML=qnaList[0].a[1].answer;
}

/*넣는거 까지는 어떻게 되겠데 이걸 반복적으로 해야하니 반복문을 사용해야하는데 거기서부터가 막히네*/
/*페이지 전환에 반복문 사용 필요, 질문 형성에서 각 질문은 어차피 2개씩이라 반복문은 필요없고 질문 전환까지만 처리하면 될거 같은데*/