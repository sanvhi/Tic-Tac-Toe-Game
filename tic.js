function myfunc() {
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
b1 = document.getElementById("b1").value;
b2 = document.getElementById("b2").value;
b3 = document.getElementById("b3").value;
b4 = document.getElementById("b4").value;
b5 = document.getElementById("b5").value;
b6 = document.getElementById("b6").value;
b7 = document.getElementById("b7").value;
b8 = document.getElementById("b8").value;
b9 = document.getElementById("b9").value;

if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
document.getElementById('print')
    .innerHTML = "Player X won";
document.getElementById("b4").disabled = true;
document.getElementById("b5").disabled = true;
document.getElementById("b6").disabled = true;
document.getElementById("b7").disabled = true;
document.getElementById("b8").disabled = true;
document.getElementById("b9").disabled = true;
window.alert('Player X won');
}
else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
document.getElementById('print')
    .innerHTML = "Player X won";
document.getElementById("b2").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("b5").disabled = true;
document.getElementById("b6").disabled = true;
document.getElementById("b8").disabled = true;
document.getElementById("b9").disabled = true;

window.alert('Player X won');
}
else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
document.getElementById('print')
    .innerHTML = "Player X won";
document.getElementById("b1").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("b4").disabled = true;
document.getElementById("b5").disabled = true;
document.getElementById("b6").disabled = true;
window.alert('Player X won');
}
else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
document.getElementById('print')
    .innerHTML = "Player X won";
document.getElementById("b1").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("b4").disabled = true;
document.getElementById("b5").disabled = true;
document.getElementById("b7").disabled = true;
document.getElementById("b8").disabled = true;
window.alert('Player X won');
}
else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
document.getElementById('print')
    .innerHTML = "Player X won";
document.getElementById("b2").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("b4").disabled = true;
document.getElementById("b6").disabled = true;
document.getElementById("b7").disabled = true;
document.getElementById("b8").disabled = true;
window.alert('Player X won');
}
else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
document.getElementById('print')
    .innerHTML = "Player X won";
document.getElementById("b1").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("b4").disabled = true;
document.getElementById("b6").disabled = true;
document.getElementById("b8").disabled = true;
document.getElementById("b9").disabled = true;
window.alert('Player X won');
}
else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
document.getElementById('print')
    .innerHTML = "Player X won";
document.getElementById("b1").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("b4").disabled = true;
document.getElementById("b6").disabled = true;
document.getElementById("b7").disabled = true;
document.getElementById("b9").disabled = true;
window.alert('Player X won');
}
else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
document.getElementById('print')
    .innerHTML = "Player X won";
document.getElementById("b1").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("b7").disabled = true;
document.getElementById("b8").disabled = true;
document.getElementById("b9").disabled = true;
window.alert('Player X won');
}

// Checking of Player X finsh
// Checking for Player 0 starts, Is player 0 won or
// not and after that disabled all the other fields
else if ((b1 == '0' || b1 == '0') && (b2 == '0' || 
b2 == '0') && (b3 == '0' || b3 == '0')) {
document.getElementById('print')
    .innerHTML = "computer won";
document.getElementById("b4").disabled = true;
document.getElementById("b5").disabled = true;
document.getElementById("b6").disabled = true;
document.getElementById("b7").disabled = true;
document.getElementById("b8").disabled = true;
document.getElementById("b9").disabled = true;
window.alert('computer won');
}
else if ((b1 == '0' || b1 == '0') && (b4 == '0' || 
b4 == '0') && (b7 == '0' || b7 == '0')) {
document.getElementById('print')
    .innerHTML = "computer won";
document.getElementById("b2").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("b5").disabled = true;
document.getElementById("b6").disabled = true;
document.getElementById("b8").disabled = true;
document.getElementById("b9").disabled = true;
window.alert('computer won');
}
else if ((b7 == '0' || b7 == '0') && (b8 == '0' || 
b8 == '0') && (b9 == '0' || b9 == '0')) {
document.getElementById('print')
    .innerHTML = "computer won";
document.getElementById("b1").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("b4").disabled = true;
document.getElementById("b5").disabled = true;
document.getElementById("b6").disabled = true;
window.alert('computer won');
}
else if ((b3 == '0' || b3 == '0') && (b6 == '0' || 
b6 == '0') && (b9 == '0' || b9 == '0')) {
document.getElementById('print')
    .innerHTML = "computer won";
document.getElementById("b1").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("b4").disabled = true;
document.getElementById("b5").disabled = true;
document.getElementById("b7").disabled = true;
document.getElementById("b8").disabled = true;
window.alert('computer  won');
}
else if ((b1 == '0' || b1 == '0') && (b5 == '0' || 
b5 == '0') && (b9 == '0' || b9 == '0')) {
document.getElementById('print')
    .innerHTML = "computer won";
document.getElementById("b2").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("b4").disabled = true;
document.getElementById("b6").disabled = true;
document.getElementById("b7").disabled = true;
document.getElementById("b8").disabled = true;
window.alert('computer won');
}
else if ((b3 == '0' || b3 == '0') && (b5 == '0' || 
b5 == '0') && (b7 == '0' || b7 == '0')) {
document.getElementById('print')
    .innerHTML = "computer won";
document.getElementById("b1").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("b4").disabled = true;
document.getElementById("b6").disabled = true;
document.getElementById("b8").disabled = true;
document.getElementById("b9").disabled = true;
window.alert('computer won');
}
else if ((b2 == '0' || b2 == '0') && (b5 == '0' || 
b5 == '0') && (b8 == '0' || b8 == '0')) {
document.getElementById('print')
    .innerHTML = "computer won";
document.getElementById("b1").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("b4").disabled = true;
document.getElementById("b6").disabled = true;
document.getElementById("b7").disabled = true;
document.getElementById("b9").disabled = true;
window.alert('computer won');
}
else if ((b4 == '0' || b4 == '0') && (b5 == '0' || 
b5 == '0') && (b6 == '0' || b6 == '0')) {
document.getElementById('print')
    .innerHTML = "computer won";
document.getElementById("b1").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("b7").disabled = true;
document.getElementById("b8").disabled = true;
document.getElementById("b9").disabled = true;
window.alert('computer won');
}

// Checking of Player 0 finsh
// Here, Checking about Tie
else if ((b1 == 'X' || b1 == '0') && (b2 == 'X' 
|| b2 == '0') && (b3 == 'X' || b3 == '0') && 
(b4 == 'X' || b4 == '0') && (b5 == 'X' || 
b5 == '0') && (b6 == 'X' || b6 == '0') && 
(b7 == 'X' || b7 == '0') && (b8 == 'X' || 
b8 == '0') && (b9 == 'X' || b9 == '0')) {
    document.getElementById('print')
        .innerHTML = "Match Tie";
    window.alert('Match Tie');
}
else {

// Here, Printing Result
if (flag == 1) {
    document.getElementById('print')
        .innerHTML = "Player X Turn";
}
else {
    document.getElementById('print')
        .innerHTML = "computer Turn";

    }
}

}

function myfunc_2(){
 location.reload();
 document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
}

function myfunc_3() {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        computer("0");
}
  
function myfunc_4() {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        computer("0");
}
  
function myfunc_5() {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        computer("0");
}
  
function myfunc_6() {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        computer("0");
}
  
function myfunc_7() {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        computer("0");
}
  
function myfunc_8() {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        computer("0");
}
  
function myfunc_9() {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        computer("0");
}
  
function myfunc_10() {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        computer("0");
}
  
function myfunc_11() {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        computer("0");
}
    
    function computer( c ){
    
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
b1 = document.getElementById("b1").value;
b2 = document.getElementById("b2").value;
b3 = document.getElementById("b3").value;
b4 = document.getElementById("b4").value;
b5 = document.getElementById("b5").value;
b6 = document.getElementById("b6").value;
b7 = document.getElementById("b7").value;
b8 = document.getElementById("b8").value;
b9 = document.getElementById("b9").value;

if (checkfirstime() == true && document.getElementById("b5").disabled == false)
{
        document.getElementById("b5").value = c; 
        document.getElementById("b5").disabled = true;
}
// Checking for first row
else if((b1=="X"&&b2=="X"&& document.getElementById("b3").disabled == false)||(b1=="0"&&b2=="0"&& document.getElementById("b3").disabled == false)){
    document.getElementById("b3").value = c; 
    document.getElementById("b3").disabled = true;
 }
 else if((b1=="X"&&b3=="X"&& document.getElementById("b2").disabled == false)||(b1=="0"&&b3=="0"&& document.getElementById("b2").disabled == false)){
    document.getElementById("b2").value = c;  
    document.getElementById("b2").disabled = true; 
 }
 else if((b2=="X"&&b3=="X"&& document.getElementById("b1").disabled == false)||(b2=="0"&&b3=="0"&& document.getElementById("b1").disabled == false)){
    document.getElementById("b1").value = c;  
    document.getElementById("b1").disabled = true; 
 }
// checking for second row
else if((b4=="X"&&b5=="X"&& document.getElementById("b6").disabled == false)||(b4=="0"&&b5=="0"&& document.getElementById("b6").disabled == false)){
    document.getElementById("b6").value = c;  
    document.getElementById("b6").disabled = true; 
}
 else if((b4=="X"&&b6=="X"&& document.getElementById("b5").disabled == false)||(b4=="0"&&b6=="0"&& document.getElementById("b5").disabled == false)){
    document.getElementById("b5").value = c;  
    document.getElementById("b5").disabled = true; 
 }
 else if((b5=="X"&&b6=="X"&& document.getElementById("b4").disabled == false)||(b5=="0"&&b6=="0"&& document.getElementById("b4").disabled == false)){
    document.getElementById("b4").value = c; 
    document.getElementById("b4").disabled = true;  
 }
//checking for third row
else if((b7=="X"&&b8=="X"&& document.getElementById("b9").disabled == false)||(b7=="0"&&b8=="0"&& document.getElementById("b9").disabled == false)){
    document.getElementById("b9").value = c; 
    document.getElementById("b9").disabled = true;  
 }
 else if((b7=="X"&&b9=="X"&& document.getElementById("b8").disabled == false)||(b7=="0"&&b9=="0"&& document.getElementById("b8").disabled == false)){
    document.getElementById("b8").value = c;  
    document.getElementById("b8").disabled = true;   
 }
 else if((b8=="X"&&b9=="X"&& document.getElementById("b7").disabled == false)||(b8=="0"&&b9=="0"&& document.getElementById("b7").disabled == false)){
    document.getElementById("b7").value = c;   
    document.getElementById("b7").disabled = true;  
 }
 //checking for FIRST COLUMN
else if((b1=="X"&&b4=="X"&& document.getElementById("b7").disabled == false)||(b4=="0"&&b8=="0"&& document.getElementById("b7").disabled == false)){
    document.getElementById("b7").value = c; 
    document.getElementById("b7").disabled = true;  
 }
 else if((b1=="X"&&b7=="X"&& document.getElementById("b4").disabled == false)||(b1=="0"&&b7=="0"&& document.getElementById("b4").disabled == false)){
    document.getElementById("b4").value = c;  
    document.getElementById("b4").disabled = true;   
 }
 else if((b4=="X"&&b7=="X"&& document.getElementById("b1").disabled == false)||(b4=="0"&&b7=="0"&& document.getElementById("b1").disabled == false)){
    document.getElementById("b1").value = c;   
    document.getElementById("b1").disabled = true;  
 }
 //checking for SECOND COLUMN
else if((b2=="X"&&b5=="X"&& document.getElementById("b8").disabled == false)||(b2=="0"&&b5=="0"&& document.getElementById("b8").disabled == false)){
    document.getElementById("b8").value = c; 
    document.getElementById("b8").disabled = true;  
 }
 else if((b2=="X"&&b8=="X"&& document.getElementById("b5").disabled == false)||(b2=="0"&&b8=="0"&& document.getElementById("b5").disabled == false)){
    document.getElementById("b5").value = c;  
    document.getElementById("b5").disabled = true;   
 }
 else if((b5=="X"&&b8=="X"&& document.getElementById("b2").disabled == false)||(b5=="0"&&b8=="0"&& document.getElementById("b2").disabled == false)){
    document.getElementById("b2").value = c;   
    document.getElementById("b2").disabled = true;  
 }
 //checking for THRID COLUMNS
else if((b3=="X"&&b6=="X"&& document.getElementById("b9").disabled == false)||(b3=="0"&&b6=="0"&& document.getElementById("b9").disabled == false)){
    document.getElementById("b9").value = c; 
    document.getElementById("b9").disabled = true;  
 }
 else if((b3=="X"&&b9=="X"&& document.getElementById("b6").disabled == false)||(b3=="0"&&b9=="0"&& document.getElementById("b6").disabled == false)){
    document.getElementById("b6").value = c;  
    document.getElementById("b6").disabled = true;   
 }
 else if((b6=="X"&&b9=="X"&& document.getElementById("b3").disabled == false)||(b6=="0"&&b9=="0"&& document.getElementById("b3").disabled == false)){
    document.getElementById("b3").value = c;   
    document.getElementById("b3").disabled = true;  
 }
 //checking for DIAGANOL LEFT TOP TO RIGHT BOTTOM
else if((b1=="X"&&b5=="X"&& document.getElementById("b9").disabled == false)||(b1=="0"&&b5=="0"&& document.getElementById("b9").disabled == false)){
    document.getElementById("b9").value = c; 
    document.getElementById("b9").disabled = true;  
 }
 else if((b1=="X"&&b9=="X"&& document.getElementById("b5").disabled == false)||(b1=="0"&&b9=="0"&& document.getElementById("b5").disabled == false)){
    document.getElementById("b5").value = c;  
    document.getElementById("b5").disabled = true;   
 }
 else if((b5=="X"&&b9=="X"&& document.getElementById("b1").disabled == false)||(b5=="0"&&b9=="0"&& document.getElementById("b1").disabled == false)){
    document.getElementById("b1").value = c;   
    document.getElementById("b1").disabled = true;  
 }
 //checking for RIGHT TOP TO BOTTOM LEFT
else if((b3=="X"&&b5=="X"&& document.getElementById("b7").disabled == false)||(b3=="0"&&b5=="0"&& document.getElementById("b7").disabled == false)){
    document.getElementById("b7").value = c; 
    document.getElementById("b7").disabled = true;  
 }
 else if((b3=="X"&&b7=="X"&& document.getElementById("b5").disabled == false)||(b3=="0"&&b7=="0"&& document.getElementById("b5").disabled == false)){
    document.getElementById("b5").value = c;  
    document.getElementById("b5").disabled = true;   
 }
 else if((b5=="X"&&b7=="X"&& document.getElementById("b3").disabled == false)||(b5=="0"&&b7=="0"&& document.getElementById("b3").disabled == false)){
    document.getElementById("b3").value = c;   
    document.getElementById("b3").disabled = true;  
 }
//else if none of the rows have two consequetice marks
 else if(document.getElementById("b1").disabled == false){
    document.getElementById("b1").value = c;
    document.getElementById("b1").disabled = true;
} 
else if (document.getElementById("b2").disabled == false){
    document.getElementById("b2").value = c;
    document.getElementById("b2").disabled = true;
}
else if(document.getElementById("b3").disabled == false){
    document.getElementById("b3").value = c;
    document.getElementById("b3").disabled = true;   
}
else if(document.getElementById("b4").disabled == false){
    document.getElementById("b4").value = c;
    document.getElementById("b4").disabled = true;
}
else if(document.getElementById("b5").disabled == false){
    document.getElementById("b5").value = c;
    document.getElementById("b5").disabled = true;
}
else if(document.getElementById("b6").disabled == false){
    document.getElementById("b6").value = c;
    document.getElementById("b6").disabled = true;
}
else if(document.getElementById("b7").disabled == false){
    document.getElementById("b7").value = c;
    document.getElementById("b7").disabled = true;
}
else if(document.getElementById("b8").disabled == false){
    document.getElementById("b8").value = c;
    document.getElementById("b8").disabled = true;
}
else if(document.getElementById("b9").disabled == false){
    document.getElementById("b9").value = c;
    document.getElementById("b9").disabled = true;
}
}

function AUTOMATIC(){
    i=0;
    while(i<5){
        i=i+1;
        computer("X");
        computer("0");
    }
}

function checkfirstime()
{
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
b1 = document.getElementById("b1").value;
b2 = document.getElementById("b2").value;
b3 = document.getElementById("b3").value;
b4 = document.getElementById("b4").value;
b5 = document.getElementById("b5").value;
b6 = document.getElementById("b6").value;
b7 = document.getElementById("b7").value;
b8 = document.getElementById("b8").value;
b9 = document.getElementById("b9").value;
    if(( b1 == "X") && (b2 == "")&& (b3 == "")&& (b4 == "")&& (b5 == "")&& (b6 == "")&& (b7 == "")&& (b8 == "")&& (b9 == ""))
    {
        return true;
    }
    else if(( b1 == "") && (b2 == "X")&& (b3 == "")&& (b4 == "")&& (b5 == "")&& (b6 == "")&& (b7 == "")&& (b8 == "")&& (b9 == ""))
    {
        return true;
    }
    else if(( b1 == "") && (b2 == "")&& (b3 == "X")&& (b4 == "")&& (b5 == "")&& (b6 == "")&& (b7 == "")&& (b8 == "")&& (b9 == ""))
    {
        return true;
    }
    else if(( b1 == "") && (b2 == "")&& (b3 == "")&& (b4 == "X")&& (b5 == "")&& (b6 == "")&& (b7 == "")&& (b8 == "")&& (b9 == ""))
    {
        return true;
    }
    else if(( b1 == "") && (b2 == "")&& (b3 == "")&& (b4 == "")&& (b5 == "X")&& (b6 == "")&& (b7 == "")&& (b8 == "")&& (b9 == ""))
    {
        return true;
    }
    else if(( b1 == "") && (b2 == "")&& (b3 == "")&& (b4 == "")&& (b5 == "")&& (b6 == "X")&& (b7 == "")&& (b8 == "")&& (b9 == ""))
    {
            return true;
    }
    else if(( b1 == "") && (b2 == "")&& (b3 == "")&& (b4 == "")&& (b5 == "")&& (b6 == "")&& (b7 == "X")&& (b8 == "")&& (b9 == ""))
    {
        return true;
    }
    else if(( b1 == "") && (b2 == "")&& (b3 == "")&& (b4 == "")&& (b5 == "")&& (b6 == "")&& (b7 == "")&& (b8 == "X")&& (b9 == "X"))
    {
        return true;
    }
    else if(( b1 == "") && (b2 == "")&& (b3 == "")&& (b4 == "")&& (b5 == "")&& (b6 == "")&& (b7 == "")&& (b8 == "")&& (b9 == "X"))
    {
        return true;
    }
    else
    return false;
}
