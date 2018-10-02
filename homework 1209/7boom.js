{ 

    function boom7(){
    
    var print="";
    var i=1;
    while(i<=100){
        if(i%7==0||parseInt(i%10)==7||parseInt(i/10)==7){
        print+="<br>"+"BOOM";    
        }
        else{
        print+="<br>"+i;
        }
        i++;
    }
    document.write(print);   
    
    }

//על עוד המשתנה מחוץ לפונקציה, מתווספים עליו ערכים. אין גריסה של הערך הקודם.

























}