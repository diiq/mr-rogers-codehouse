


 function daAnswer(x, y) {
	var answer = (x * x) + (y * y);
	console.log(answer);

}


function nameHey(name) {
	var string = "Hey there" + " " + name;

	console.log(string);

}

function grade(score) {
	
	if (score >= 90) {
		return "A";

	}	else if (score >= 80) {
		return "B";

	}	else if (score >= 70) {
		return "C";

	}	else if (score >= 60) {
		return "D";
	
	}	else if (score >= 50) {
		return "F";
	}
}

function final(score , possiblePoints) {
	var thisIsYourScore = (score / possiblePoints) * 100;
	return thisIsYourScore;
}

function gradeOnTest(score , possiblePoints) {
	return grade(final(score , possiblePoints));
	console.log(grade);
}


function stringVariable(string) {
	return string.length >= 8 ;

	}



function evenOdd(num) {
	if (num%2 === 0) {
		return num / 2;
	} 
		return num * 2;
}







 function doubleNum(x) {
 	return x * 2;
 }

 function addOne(x) {
 	return x + 1;
 }

 function appliedFunction(fn , fn2,  x) {
 	return fn(fn2(x));
 }

appliedFunction(doubleNum, addOne,  5);


function double(num) {
	return num * 2;
}

function funFunction() {
	function double() { 
		return num * 2
}
	return double;
}

function multiplierMaker(x) {
	function multiplier(y) {
		return x * y;
	}
	return multiplier;
}
















