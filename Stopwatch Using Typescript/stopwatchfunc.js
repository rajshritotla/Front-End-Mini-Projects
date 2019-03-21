"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var millisecond = 0;
var second = 0;
var minute = 0;
var hour = 0;
var status = 0;
var flag; //to stop start() recursion
// showing time
/*
    jQuery.noConflict()(function ($) {
        $(document).ready(function() {
    
            $("#showTime").html(hour+' hrs : '+minute+' mins : '+second+' sec: '+millisecond+' ms');
    
        });
    });
*/
//start
function start() {
    if (status != 1) {
        reset();
    }
    status = 1;
    if (status == 1) {
        millisecond++; //increment ms
        jQuery.noConflict()(function ($) {
            $(document).ready(function () {
                $("#showTime").html(hour + ' hrs : ' + minute + ' mins : ' + second + ' sec: ' + millisecond + ' ms');
            });
        });
        if (millisecond % 1000 === 0) { //convert ms to sec
            second = second + 1;
            jQuery.noConflict()(function ($) {
                $(document).ready(function () {
                    $("#showTime").html(hour + ' hrs : ' + minute + ' mins : ' + second + ' sec: ' + millisecond + ' ms');
                });
            });
            if (second === 60) { //convert sec to min
                minute = minute + 1;
                second = 0;
                jQuery.noConflict()(function ($) {
                    $(document).ready(function () {
                        $("#showTime").html(hour + ' hrs : ' + minute + ' mins : ' + second + ' sec: ' + millisecond + ' ms');
                    });
                });
                if (minute === 60) { //convert min to hr
                    hour++;
                    minute = 0;
                    jQuery.noConflict()(function ($) {
                        $(document).ready(function () {
                            $("#showTime").html(hour + ' hrs : ' + minute + ' mins : ' + second + ' sec: ' + millisecond + ' ms');
                        });
                    });
                }
            }
        }
        flag = setTimeout(function () { start(); });
    }
}
//stop
function stop() {
    status = 0;
    jQuery.noConflict()(function ($) {
        $(document).ready(function () {
            $("#showTime").html(hour + ' hrs : ' + minute + ' mins : ' + second + ' sec: ' + millisecond + ' ms');
        });
    });
    clearTimeout(flag); //to stop start() recursion
}
//reset
function reset() {
    status = 0;
    millisecond = 0;
    second = 0;
    minute = 0;
    hour = 0;
    jQuery.noConflict()(function ($) {
        $(document).ready(function () {
            $("#showTime").html(hour + ' hrs : ' + minute + ' mins : ' + second + ' sec: ' + millisecond + ' ms');
        });
    });
    clearTimeout(flag);
}
