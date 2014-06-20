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
var kdaId = value + '_kda'; //айди элемента кда
var goldId = value + '_gold'; //айди голды
var gpmId = value + '_gpm'; // айди гпм
var killsId = value + '_kills'; // айди килов
var deathsId = value + '_deaths'; // айди смертей 
var assistsId = value + '_assists' // айди ассистов
var csId = value + '_cs' //айди ластхитов

var gradeId = value + '_grade'; //айди элемента оценки
var gold_g = value + '_gold_g'; //айди оценики голды
var gpm_g = value + '_gpm_g'; // айди оценки гпм
var kills_g = value + '_kills_g'; // айди оценки килов
var deaths_g = value + '_deaths_g'; // айди оценки смертей 
var assists_g = value + '_assists_g' // айди оценки ассистов
var cs_g = value + '_cs_g' //айди оценки ластхитов

var kda = parseFloat(document.getElementById(kdaId).innerHTML);
var gold = parseFloat(document.getElementById(goldId).innerHTML);
var gpm = parseFloat(document.getElementById(gpmId).innerHTML);
var kills = parseFloat(document.getElementById(killsId).innerHTML);
var deaths = parseFloat(document.getElementById(deathsId).innerHTML);
var assists = parseFloat(document.getElementById(assistsId).innerHTML);
var cs = parseFloat(document.getElementById(csId).innerHTML);


//анализируем кда

if (kda>=8&&value!='SUP'&&value!='JUN'){
document.getElementById(gradeId).innerHTML = 'A+';
document.getElementById(gradeId).style.color='#660066';
}
else if(kda>=6&&kda<8&&value!='SUP'&&value!='JUN'){
document.getElementById(gradeId).innerHTML = 'A';
document.getElementById(gradeId).style.color='green';
}
else if(kda>=4.5&&kda<6&&value!='SUP'&&value!='JUN'){
document.getElementById(gradeId).innerHTML = 'A-';
document.getElementById(gradeId).style.color='gold';
}
else if(kda>=3&&kda<4.5&&value!='SUP'&&value!='JUN'){
document.getElementById(gradeId).innerHTML = 'B';
document.getElementById(gradeId).style.color='grey'; 
}
else if(kda<3&&value!='SUP'&&value!='JUN'){
document.getElementById(gradeId).innerHTML = 'C';
document.getElementById(gradeId).style.color='red'; 
}
else if(kda>=6){
document.getElementById(gradeId).innerHTML = 'A+';
document.getElementById(gradeId).style.color='#660066';   
}
else if(kda>=4.5&&kda<6){
document.getElementById(gradeId).innerHTML = 'A';
document.getElementById(gradeId).style.color='green';
}
else if(kda>=3&&kda<4.5){
document.getElementById(gradeId).innerHTML = 'A-';
document.getElementById(gradeId).style.color='gold';
}
else if(kda>=2.5&&kda<3){
document.getElementById(gradeId).innerHTML = 'B';   
document.getElementById(gradeId).style.color='grey'; 
}
else if(kda<2.5){
document.getElementById(gradeId).innerHTML = 'C';
document.getElementById(gradeId).style.color='red';    
}
//анализируем голд
//sup == 9000
//adc == 12000
//mid == 12000
//top == 11500
//jun == 11000

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