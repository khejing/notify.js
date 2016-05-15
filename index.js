import Moment from 'moment';
let localNotification;
if(DEVICE_TYPE === 'mobile' && PLATFORM !== 'webapp' && NETWORK_TYPE === 'cordova'){
    localNotification = cordova.require('de.appplant.cordova.plugin.local-notification.LocalNotification');
}

function makeSystemNotification(title, msgText, customData){
    if(DEVICE_TYPE === 'mobile' && PLATFORM !== 'webapp'){
        if(NETWORK_TYPE === 'cordova'){
            localNotification.schedule({
                id: Moment().valueOf(),
                title: title,
                text: msgText,
                data: customData
            });
        }else if(NETWORK_TYPE === 'websocket'){
            simpleCordova.showNotification(title, msgText, JSON.stringify(JSON.stringify(customData)));
        }
    }
    console.log("system notification sent with title: "+title+", text: "+msgText+", custom data: "+JSON.stringify(customData));
}

function systemNotificationVibrate(){
    if(DEVICE_TYPE === 'mobile' && PLATFORM !== 'webapp'){
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
    if(DEVICE_TYPE === 'mobile' && PLATFORM !== 'webapp'){
        //android 4.4.2 is chrome 30, don't have this method
        if(navigator.vibrate){
            navigator.vibrate([500, 500]);
        }
    }
}

function stopCallNotification(){
    if(DEVICE_TYPE === 'mobile' && PLATFORM !== 'webapp'){
        //android 4.4.2 is chrome 30, don't have this method
        if(navigator.vibrate){
            navigator.vibrate(0);
        }
    }
}

export {makeSystemNotification, systemNotificationVibrate, makeSystemNotificationWithVibration, localNotification as systemNotification};
