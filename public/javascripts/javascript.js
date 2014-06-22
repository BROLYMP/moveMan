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
function parseDiff(x, y){
    if (x<0) {document.getElementById(y).style.color='#FF0000';}
    else if (x>0) {document.getElementById(y).style.color='#19D419';}
    else if (x==0) {document.getElementById(y).style.color='#6A6A6A';}
    x = x.toFixed(1);
    x = commafy(x);
    document.getElementById(y).innerHTML = x;
}
function parseGrade(a, b, c){
document.getElementById(a).innerHTML = b;
document.getElementById(a).style.color=c;
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
parseGrade(gradeId, 'A+', '#660066');
}
else if(kda>=6&&kda<8&&value!='SUP'&&value!='JUN'){
parseGrade(gradeId, 'A', '#19D419');
}
else if(kda>=4.5&&kda<6&&value!='SUP'&&value!='JUN'){
parseGrade(gradeId, 'A-', '#FFFF00');
}
else if(kda>=3&&kda<4.5&&value!='SUP'&&value!='JUN'){
parseGrade(gradeId, 'B', '#000000');
}
else if(kda<3&&value!='SUP'&&value!='JUN'){
parseGrade(gradeId, 'C', '#FF0000');
}
else if(kda>=6){
parseGrade(gradeId, 'A+', '#660066');   
}
else if(kda>=4.5&&kda<6){
parseGrade(gradeId, 'A', '#19D419');
}
else if(kda>=3&&kda<4.5){
parseGrade(gradeId, 'A-', '#FFFF00');
}
else if(kda>=2.5&&kda<3){
parseGrade(gradeId, 'B', '#000000'); 
}
else if(kda<2.5){
parseGrade(gradeId, 'C', '#FF0000');   
}
//анализируем статы
//sup =? 9000  272.7; 2; 5; 13; 25
//adc =? 12000 363.6; 7; 5; 7; 200
//mid =? 12000 363.6; 7; 5; 8; 200
//top =? 11500 348.5; 5; 4; 7.5; 175
//jun =? 11000 333.3; 6; 5; 9.5; 75
//avg game lenght = 33 min

if (value=='SUP') {
var goldDiff = gold-9000;
var gpmDiff = gpm-272.7;
var killsDiff = kills-2;
var deathDiff = 5-deaths;
var assistsDiff = assists-13;
var csDiff = cs-25;

parseDiff(goldDiff, gold_g);
parseDiff(gpmDiff, gpm_g);
parseDiff(killsDiff, kills_g);
parseDiff(deathDiff, deaths_g);
parseDiff(assistsDiff, assists_g);
parseDiff(csDiff, cs_g);
}
else if (value=='ADC') {
var goldDiff = gold-12000;
var gpmDiff = gpm-363.6;
var killsDiff = kills-7;
var deathDiff = 5-deaths;
var assistsDiff = assists-7;
var csDiff = cs-200;

parseDiff(goldDiff, gold_g);
parseDiff(gpmDiff, gpm_g);
parseDiff(killsDiff, kills_g);
parseDiff(deathDiff, deaths_g);
parseDiff(assistsDiff, assists_g);
parseDiff(csDiff, cs_g);
}
else if (value=='TOP') {
var goldDiff = gold-11500;
var gpmDiff = gpm-348.5;
var killsDiff = kills-5;
var deathDiff = 4-deaths;
var assistsDiff = assists-7.5;
var csDiff = cs-175;

parseDiff(goldDiff, gold_g);
parseDiff(gpmDiff, gpm_g);
parseDiff(killsDiff, kills_g);
parseDiff(deathDiff, deaths_g);
parseDiff(assistsDiff, assists_g);
parseDiff(csDiff, cs_g);
}
else if (value=='MID') {
var goldDiff = gold-12000;
var gpmDiff = gpm-363.6;
var killsDiff = kills-7;
var deathDiff = 5-deaths;
var assistsDiff = assists-8;
var csDiff = cs-200;

parseDiff(goldDiff, gold_g);
parseDiff(gpmDiff, gpm_g);
parseDiff(killsDiff, kills_g);
parseDiff(deathDiff, deaths_g);
parseDiff(assistsDiff, assists_g);
parseDiff(csDiff, cs_g);
}
else if (value=='JUN') {
var goldDiff = gold-11000;
var gpmDiff = gpm-333.3;
var killsDiff = kills-6;
var deathDiff = 5-deaths;
var assistsDiff = assists-9.5;
var csDiff = cs-75;

parseDiff(goldDiff, gold_g);
parseDiff(gpmDiff, gpm_g);
parseDiff(killsDiff, kills_g);
parseDiff(deathDiff, deaths_g);
parseDiff(assistsDiff, assists_g);
parseDiff(csDiff, cs_g);
}

}
function commafy( num ) {
    var str = num.toString().split('.');
    if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 4) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}