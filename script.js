
kOperations = 0;

function f() {
	var start = new Date();
        num = document.getElementById("num");
        N = parseInt(num.value);
		position = new Array(N);
		startQueen();
        // console.log(num);
        
		
		(document.getElementById("p1")).innerHTML = "Кількість варіантів: " + kOperations;
	var end = new Date();
	var speed =('Кількість часу: ' + (end.getTime()-start.getTime()) + ' мс');
	var time = document.getElementById("p2");
        time.innerHTML = speed;
    }
	
	
function check(qNumber, rPosition){
	for (var i = 0; i<qNumber;i++){
		var oldPosition = position[i];
		if (oldPosition == rPosition || oldPosition == (rPosition - (qNumber - i)) || oldPosition == (rPosition + (qNumber-i))){
			return false;
		}
	}
	return true;
}

function solution(k){
	if (k == N){
		kOperations ++;
		echoResult(N);
	}else{
		for (var i = 0; i<N; i++){
			if (check(k, i)){
				position[k] = i;
				solution(k+1);
			}
		}
	}
}

function echoResult(N){
	var body = document.getElementsByTagName("body")[0];
	var tbl     = document.createElement("table");
	var tblBody = document.createElement("tbody");
	for (var j = 0; j < N; j++) {
		var row = document.createElement("tr");
		for (var i = 0; i < N; i++) {
			var cell = document.createElement("td"); 
			var txt = "";
			position[i] == j ? txt = "Ф" : "";
			var cellText = document.createTextNode(txt); 
			cell.appendChild(cellText);
			row.appendChild(cell);
		}
		tblBody.appendChild(row);
	}
	tbl.appendChild(tblBody);
	body.appendChild(tbl); 
	tbl.setAttribute("border", "2");
}
	
function startQueen(){
	solution(0);
}
