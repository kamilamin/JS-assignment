/**** Enter your data ****/

var name = prompt("Enter Your name:");
var fname= prompt("Enter Your Father Name:");
var roll = prompt("Enter Your Roll Number:");
var Git =  parseFloat( prompt("Enter Your Git Marks:"));
var HTML = parseFloat( prompt("Enter Your HTML Marks:"));
var CSS1 = parseFloat( prompt("Enter Your CSS1 Marks:"));
var CSS2 = parseFloat( prompt("Enter Your CSS2 Marks:"));

var total = (Git + HTML + CSS1 + CSS2);
var result = total/400;
var Avg = result*100;

/*****DOM*****/
document.getElementById('stu-name').innerHTML = name;
document.getElementById('fname').innerHTML = fname;
document.getElementById('roll-no').innerHTML = roll;
document.getElementById('GIT').innerHTML = Git;
document.getElementById('HTML').innerHTML = HTML;
document.getElementById('CSS1').innerHTML = CSS1;
document.getElementById('CSS2').innerHTML = CSS2;
document.getElementById('total').innerHTML = total;
document.getElementById('AVG').innerHTML = Avg;

/* Conditions */

if (Avg >= 80 && Avg <= 100){
    document.getElementById('remark').innerHTML = "% Congratulations, you got A+ Grade";
}else if(Avg >= 70 && Avg <= 79){
    document.getElementById('remark').innerHTML = "% Congratulations, you got A Grade";
}else if(Avg >= 60 && Avg <= 69){
    document.getElementById('remark').innerHTML = "% Congratulations, you got B Grade";
}else{
    document.getElementById('remark').innerHTML = "Sorry, You are Fail";
}