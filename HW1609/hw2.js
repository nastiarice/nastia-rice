{
    //משימה ראשונה - עובד 
 function check(){
 var even="";
 var i=50;       
while(i<=350){
if(i%2==0){
even+=""+i; 
 }
i++; 
}
document.write(even);
 }


   // משימה שניה א - עובד   
function lottery(){
    var num = Math.floor(Math.random()* (1000-1))+1;
    document.getElementById("lotterynum").innerHTML=num;
}

 // משימה שניה ב - לא עובד  
 function rev(inp){
  
  newstr="";
  for (i=inp.length()-1; i>=0; i=i-1){
newstr =+inp.charAt(i);
}
document.getElementById("revinp").innerHTML=newstr;  
 }

// משימה 3 - לא עובד
function count(inp){
var inp=document.getElementById("inp").value;
var count=inp.length;
document.getElementById("here2").innerHTML="variable has "+count+" digits";
}

// משימה 4 - עובד
 function lottery2(){
    var lot=Math.floor(Math.random()* (10000-(-10000))-10000);
    var a=0;
    if(lot<0){
        document.getElementById("here3").innerHTML=0;
    }
    else if(lot>0){
    Math.max(a,lot);
    if(lot>a){
        a=lot;
        document.getElementById("here3").innerHTML=a;
    }}}


// משימה 5 - לא עובד 
function space(inp){
var inp=document.getElementById("inp").value;
var i=0;
while(i<inp.length+1){
    if(charCodeAt(i)!=20){
        i++;
    }
    else{
     alert("NULL");
    }}}

// משימה 6 - לא עובד
function palindrom(inp){
    var inp = document.getElementById("inp").value;
    var i=0;
    var o=inp.length-1;
    
    for(i=0, o=inp.length-1; i<=o; i++, o--){

        var x=inp.charAt(i);
        var y=inp.charAt(o);
      if(x=y){
          return true;
      }
      else{
          return false
      }}
    document.write("Palindrom")}


    // משימה 8 - לא עובד
function count2(inp1, inp2){

    if(inp1.length>inp2.length){
    for (i=0; (i<= inp1.length()-inp2.length()) && !found; i++){
        str1 = inp1.substring(i, i+ inp2.length());
        var count=0;
        if (str1.equals(inp2)){
        found=true;
        count++;}
    }
    alert(count);
    }
    else if(inp1.length<inp2.length){
        for (i=0; (i<= inp2.length()-inp1.length()) && !found; i++){
            str2 = inp2.substring(i, i+ inp1.length());
            var count1=0;
            if (str2.equals(inp1)){
            found=true;
            count1++;}
        }
        alert(count1);
    }}

}