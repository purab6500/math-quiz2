var player1_name = localStorage.getItem("name1");
var player2_name = localStorage.getItem("name2");
var player1score=0;
var player2score=0;
document.getElementById("player1_name").innerHTML=player1_name + " : ";
document.getElementById("player2_name").innerHTML=player2_name + " : ";

document.getElementById("player1_score").innerHTML= player1score ;
document.getElementById("player2_score").innerHTML= player2score ;

document.getElementById("player_que").innerHTML="QUESTION TURN - "+player1_name;
document.getElementById("player_ans").innerHTML="ANSWER TURN - "+player2_name;
