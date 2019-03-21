import * as $ from 'jquery';

var millisecond:number=0;
var second:number=0;
var minute:number=0;
var hour:number=0;
var status:number=0;
var flag:number;   //to stop start() recursion


// showing time
/*
    jQuery.noConflict()(function ($) { 
        $(document).ready(function() { 
    
            $("#showTime").html(hour+' hrs : '+minute+' mins : '+second+' sec: '+millisecond+' ms');
    
        });
    });
*/

//start
function start(){
    if(status!=1){reset();}
    status=1;
    if(status==1){
        millisecond++;          //increment ms
        
        jQuery.noConflict()(function ($) {          //show current time
            $(document).ready(function() { 
        
                $("#showTime").html(hour+' hrs : '+minute+' mins : '+second+' sec: '+millisecond+' ms');
        
            });
        });
        

        if(millisecond%1000===0){           //convert ms to sec
            second=second+1;
           
            jQuery.noConflict()(function ($) { 
                $(document).ready(function() { 
            
                    $("#showTime").html(hour+' hrs : '+minute+' mins : '+second+' sec: '+millisecond+' ms');
            
                });
            });

            if(second===60){                //convert sec to min
                    
                    minute=minute+1;
                    second=0;

                    jQuery.noConflict()(function ($) { 
                        $(document).ready(function() { 
                    
                            $("#showTime").html(hour+' hrs : '+minute+' mins : '+second+' sec: '+millisecond+' ms');
                    
                        });
                    });

                    if(minute===60){        //convert min to hr
                            hour++;
                            minute=0;
                       
                            jQuery.noConflict()(function ($) { 
                                $(document).ready(function() { 
                            
                                    $("#showTime").html(hour+' hrs : '+minute+' mins : '+second+' sec: '+millisecond+' ms');
                            
                                });
                            });
                    }
            }
        }
        
    flag=setTimeout(function() {start()});
    }
}


//stop
function stop(){
    status=0;

    jQuery.noConflict()(function ($) { 
        $(document).ready(function() { 
    
            $("#showTime").html(hour+' hrs : '+minute+' mins : '+second+' sec: '+millisecond+' ms');
    
        });
    });

    clearTimeout(flag);     //to stop start() recursion
}


//reset
function reset(){
    status=0;
    millisecond=0;
    second=0;
    minute=0;
    hour=0;
    
    jQuery.noConflict()(function ($) { 
        $(document).ready(function() { 
    
            $("#showTime").html(hour+' hrs : '+minute+' mins : '+second+' sec: '+millisecond+' ms');
    
        });
    });

    clearTimeout(flag);
}