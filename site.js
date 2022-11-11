function whichDay(){
    var userDay= document.getElementById('day').value;
    var resultArea = document.getElementById('result');
    var today;
    if(userDay>0 && userDay<6)
        today="This is a weekday.";
    
    else if(userDay==6  || userDay==7 )
        today= "This is a weekend day.";
    else{
        resultArea.innerHTML="<span style= 'color:red;'>Please write a number 1 to 7!!</span>";
        return;
    
    }
    resultArea.innerHTML= today;

}