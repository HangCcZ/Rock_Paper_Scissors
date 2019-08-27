
let user_score = 0;
let comp_score = 0;

let userChoice="";
let compChoice="";

let toggleTime = 200;


let choices = ["Rock","Paper","Scissors"];

function randomNum()
{
	return Math.floor(Math.random()*choices.length);
}

function check(){
	

	if(userChoice==compChoice)
	{
		user_score++;
		comp_score++;
	}
	else if(userChoice=="Rock" && compChoice=="Scissors")
	{
		user_score++;
	}

	else if(userChoice=="Rock" && compChoice=="Paper")
	{
	 	comp_score++;
	}

	else if(userChoice=="Scissors" && compChoice=="Paper")
	{
		user_score++;
	}
	else if(userChoice=="Scissors" && compChoice=="Rock" ){
		comp_score++;
	}
	else if(userChoice=="Paper" && compChoice=="Scissors")
	{
		comp_score++;
	}
	else if(userChoice=="Paper" && compChoice=="Rock" ){
		 user_score++;
	}
}


function updateScore(){
	document.getElementById('user_score').innerHTML = user_score;
	document.getElementById('comp_score').innerHTML = comp_score;

}

function removeSelect(){
	document.getElementById(compChoice).classList.remove("compSelect");
}

function toggleSelect(){
	document.getElementById(compChoice).classList.toggle("compSelect");
}

document.getElementById('uRock').onclick = function(){

	
	userChoice = document.getElementById('uRock').innerHTML;
	compChoice = choices[randomNum()];
	toggleSelect();
	check();
	updateScore();
	setTimeout(function(){
		toggleSelect()},toggleTime);
	
	
	
}

document.getElementById('uPaper').onclick = function(){
	
	
	userChoice = document.getElementById('uPaper').innerHTML;
	compChoice = choices[randomNum()];
	toggleSelect();
	check();
	updateScore();
	setTimeout(function(){
		toggleSelect()},toggleTime);
	
	
	
}

document.getElementById('uScissors').onclick = function(){
	
	userChoice = document.getElementById('uScissors').innerHTML;
	compChoice = choices[randomNum()];
	toggleSelect();
	check();
	updateScore();
	setTimeout(function(){
		toggleSelect()},toggleTime);

}




