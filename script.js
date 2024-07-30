var input=document.getElementById('ip');
var btn=document.querySelectorAll('button');
var result="";
var arr=Array.from(btn);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            result = eval(result);
            document.querySelector('input').value=result;
        }
        else if(e.target.innerHTML == '%'){
            result=eval(result/100);
            document.querySelector('input').value=result;
        }
        else if(e.target.innerHTML=='AC'){
            result="";
            input.value=result;
        }
        else if(e.target.innerHTML=='DEL'){
            result=result.substring(0,result.length-1);
            input.value=result;
        }
        else{
            result=result+e.target.innerHTML;
            input.value=result;
        }
    })
})