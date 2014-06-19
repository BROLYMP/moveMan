$(document).ready(function() {
    $(".accordionButton").click(function() {
      if($(this).next("div").is(":visible")){
        $(this).next("div").slideUp("slow");
      } else {
       $(".accordionContent").slideUp("slow");
        $(this).next("div").slideToggle("slow");
      }
    });
    gradeAll();
    roundYo();
  });
function roundYo(x) {
    var elements = document.getElementsByClassName('roundUp');
    for (var i = 0; i < elements.length; i++) {
        var txt = elements[i].innerHTML;
        var num = parseFloat(txt).toFixed(1);
        num = commafy(num);
        document.getElementsByClassName('roundUp')[i].innerHTML = num;
    }
}
function gradeAll(){
    var elements = document.getElementsByClassName('accordionButton');
    for (var i = 0; i < elements.length; i++){
        var txt = elements[i].innerHTML;
        gradeEm(txt);
    }
}
function gradeEm(value){
var kdaId = value + '_kda';
var gradeId = value + '_grade';
var kda = parseFloat(document.getElementById(kdaId).innerHTML);
if (kda>=8&&value!='SUP'&&value!='JUN'){
document.getElementById(gradeId).innerHTML = 'A+';
document.getElementById(gradeId).style.color='gold';
}
else if(kda>=6&&kda<8&&value!='SUP'&&value!='JUN'){
document.getElementById(gradeId).innerHTML = 'A';
}
else if(kda>=4.5&&kda<6&&value!='SUP'&&value!='JUN'){
document.getElementById(gradeId).innerHTML = 'A-';
}
else if(kda>=3&&kda<4.5&&value!='SUP'&&value!='JUN'){
document.getElementById(gradeId).innerHTML = 'B';
document.getElementById(gradeId).style.color='blue';
}
else if(kda<3&&value!='SUP'&&value!='JUN'){
document.getElementById(gradeId).innerHTML = 'C';
document.getElementById(gradeId).style.color='bronze'; 
}
else if(kda>=6){
document.getElementById(gradeId).innerHTML = 'A+';
document.getElementById(gradeId).style.color='gold';   
}
else if(kda>=4.5&&kda<6){
document.getElementById(gradeId).innerHTML = 'A';
}
else if(kda>=3&&kda<4.5){
document.getElementById(gradeId).innerHTML = 'A-';
}
else if(kda>=2.5&&kda<3){
document.getElementById(gradeId).innerHTML = 'B';
document.getElementById(gradeId).style.color='blue';    
}
else if(kda<2.5){
document.getElementById(gradeId).innerHTML = 'C';
document.getElementById(gradeId).style.color='bronze';    
}
}
function commafy( num ) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}