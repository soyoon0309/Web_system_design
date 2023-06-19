let count=0; // 1초마다 증가하는 카운트 값
let timerID=null; // 타이머 ID

onmessage = function (e) { // 브라우저로부터 메시지 수신
	if(e.data == "start") {
		if(timerID != null) 
			return; // 타이머 작동중이면 리턴
		timerID = setInterval(myCallback, 1000); // 1초 간격 myCallback() 호출
	}
    else {
        if(timerID == null){
            count = e.data;
            this.postMessage(count);
            return;
        }
    }
}

function myCallback() { // 1초 간격으로 호출
    if(count>0){
        count--; // 카운트 값 증가
        postMessage(count); // 카운트 값을 브라우저로 전송
    }
    else
        close(); // 워커 태스크 종료. 더 이상 메시지 받지 않음
}
