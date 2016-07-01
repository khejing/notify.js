import Moment from 'moment';
import {isMobile} from 'ua.js';

function makeSystemNotification(title, msgText, customData){
    //TODO: using HTML5 notification API
}

function systemNotificationVibrate(){
    if(isMobile()){
        //android 4.4.2 is chrome 30, don't have this method
        if(navigator.vibrate){
            navigator.vibrate(500);
        }
    }
}

function makeSystemNotificationWithVibration(title, msgText, customData){
    makeSystemNotification(title, msgText, customData);
    systemNotificationVibrate();
}

function startCallNotification(){
    if(isMobile()){
        //android 4.4.2 is chrome 30, don't have this method
        if(navigator.vibrate){
            navigator.vibrate([500, 500]);
        }
    }
}

function stopCallNotification(){
    if(isMobile()){
        //android 4.4.2 is chrome 30, don't have this method
        if(navigator.vibrate){
            navigator.vibrate(0);
        }
    }
}

export {makeSystemNotification, systemNotificationVibrate, makeSystemNotificationWithVibration};
