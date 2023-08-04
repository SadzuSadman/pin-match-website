function emptyValue(id){
    document.getElementById(id).value= '';
}
function emptyText(id){
    document.getElementById(id).innerText= '';
}
function displayNone(id){
    document.getElementById(id).style.display= 'none';
}
function displayBlock(id){
    document.getElementById(id).style.display= 'block';
}
function randomNum(){
    var random=Math.floor(1000+Math.random()*9000);
    document.getElementById('generateNum').value=random;
}
function btnKey(id){
    let prevValue=document.getElementById('inputPin').value;
    let click=document.getElementById(id).innerHTML;
    document.getElementById('inputPin').value=prevValue+click;
}
function clr(){
    document.getElementById('inputPin').value= '';
}
function dlt(){
   var deleletLast = document.getElementById('inputPin').value;
   var finalValue=deleletLast.slice(0,deleletLast.length-1);
   document.getElementById('inputPin').value= finalValue;
}
function submitBtn(){
    var generatedValue=document.getElementById('generateNum').value;
    var inputValue=document.getElementById('inputPin').value;

    if (generatedValue==inputValue)
     {
        document.getElementById('match').style.display='block';
     }
     else
     { 
        document.getElementById('unmatch').style.display='block';
        var attempt=document.getElementById('attemptCounter').innerText
        var leftTry = parseInt(attempt);
        leftTry=leftTry-1;
        if(leftTry>0)
         {
          document.getElementById('attemptCounter').innerText=leftTry;
         }
         if(leftTry==0)
         {
            emptyText('tryremain');
            var button=document.getElementById('submitButton')
            button.setAttribute('disabled','true');
            button.style.cursor='not-allowed';
            button.title='reload';
         }
        
     }
    
}
