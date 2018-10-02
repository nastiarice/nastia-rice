{
    function plusminus(){   
var num=parseInt(document.getElementById("first").value); 
if(num>0){
document.getElementById("p1").innerHTML="positive";
}
else{
document.getElementById("p1").innerHTML="negative";
}}

function zugi(){
    var num=parseInt(document.getElementById("second").value);     
    if(num%2==0){
    document.getElementById("p2").innerHTML="even";    
    }
    else{
    document.getElementById("p2").innerHTML="odd";
    }}

function letter(){
 str=document.getElementById("third").value;
if(str.length>1){
document.getElementById("p3").innerHTML="Too Much";
}
else if(str==str.toUpperCase()){
document.getElementById("p3").innerHTML="Capital Letter";
}
else{
document.getElementById("p3").innerHTML="Small Letter";
}}

// דרך נוספת לעשות את התרגיל בעזרת טבלת אסקי ותנאי בתוך תנאי, במידה והערך בהכרח שווה ל1 נמשיך לתנאי השני, מידה והמספר שונה מאחד נמשיך ל'אחרת החיצוני':
// function letter(){
// str=document.getElementById("third").value;
// if(str.length==1){
//     if(str>='A'&&str<='Z'){
//     document.getElementById("p3").innerHTML="Capital Letter";    
//     }
//     if(str>='a'&&str<='z'){
//         document.getElementById("p3").innerHTML="Small Letter";    
//     }
// else{
// document.getElementById("p3").innerHTML="Too Much";    
// }}}}

function longshort(){
str1=document.getElementById("fourth").value;
str2=document.getElementById("fifth").value;
if(str1.length==str2.length){
document.getElementById("p5").innerHTML="Equal";
}
else if(str1.length>str2.length){
document.getElementById("p4").innerHTML="The longest.";
}
else{
document.getElementById("p5").innerHTML="The longest";
}
var1=str1.length-str2.length
if(var1<0){
var1=str2.length-str1.length}
if(str1.length>str2.length){
newstr1=str1.slice(0,str1.length-var1);
    document.getElementById("p5").innerHTML=newstr1;}
else{
    newstr2=str2.slice(0,str2.length-var1);
    document.getElementById("p4").innerHTML=newstr2;
}}

function palindrom(){
strpal=document.getElementById("sixth").value;
if(strpal.charAt(0)==strpal.charAt(3)&strpal.charAt(1)==strpal.charAt(2)){
document.getElementById("p6").innerHTML="Palindrom";}
else{
document.getElementById("p6").innerHTML="Not Palindrom";}
}






}




















