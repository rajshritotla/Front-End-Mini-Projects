var millisecond=0;
var second=0;
var minute=0;
var hour=0;
var status=0;
var flag;   //to stop start() recursion
function show(){
    /*document.getElementById('showTimeHr').innerHTML= (hour+' hr : ');
    document.getElementById('showTimeMin').innerHTML= (minute+' min : ');
    document.getElementById('showTimeSec').innerHTML= (second+' sec : ');
    document.getElementById('showTimeMS').innerHTML= (millisecond+' ms');*/
    document.getElementById('showTimeHere').innerHTML=(hour+' hrs : '+minute+' mins : '+second+' sec: '+millisecond+' ms');
}

function start(){
    status=1;
    if(status==1){
        millisecond++;
        document.getElementById('showTimeHere').innerHTML=(hour+' hrs : '+minute+' mins : '+second+' sec: '+millisecond+' ms');

        if(millisecond%1000===0){
            second=second+1;
            document.getElementById('showTimeHere').innerHTML=(hour+' hrs : '+minute+' mins : '+second+' sec: '+millisecond+' ms');
     
            if(second===60){
                    
                    minute=minute+1;
                    second=0;
                    document.getElementById('showTimeHere').innerHTML=(hour+' hrs : '+minute+' mins : '+second+' sec: '+millisecond+' ms'); 
    

                    if(minute===60){
                            hour++;
                            minute=0;
                            document.getElementById('showTimeHere').innerHTML=(hour+' hrs : '+minute+' mins : '+second+' sec: '+millisecond+' ms'); 
    
                    }
            }
        }
        
    flag=setTimeout(function() {start()});
    }
}



function stop(){
    status=0;
    document.getElementById('showTimeHere').innerHTML=(hour+' hrs : '+minute+' mins : '+second+' sec: '+millisecond+' ms'); 
    clearTimeout(flag);
}

function reset(){
    status=0;
    millisecond=0;
    second=0;
    minute=0;
    hour=0;
    document.getElementById('showTimeHere').innerHTML=(hour+' hrs : '+minute+' mins : '+second+' sec: '+millisecond+' ms'); 
    clearTimeout(flag);
}