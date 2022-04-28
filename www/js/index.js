document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    var FirebasePlugin = (window).FirebasePlugin

    //FIREBASE
    FirebasePlugin.getToken(function(fcmToken) {
        console.log(fcmToken);
    }, function(error) {
        console.error(error);
    });

    FirebasePlugin.grantPermission(function(hasPermission){
        console.log("Granted permission? " + (hasPermission ? "granted" : "denied"));
    });

    FirebasePlugin.hasPermission(function(hasPermission){
        console.log("Has permission? " + (hasPermission ? "granted" : "denied"));
    });

    FirebasePlugin.setBadgeNumber(69);
    FirebasePlugin.getBadgeNumber(function(n) {
        console.log("Badge number: "+n);
    });

    console.log("Before onMessageReceived");

    FirebasePlugin.onMessageReceived(function(message) {
        console.log("Message type: " + message.messageType);
        if(message.messageType === "notification"){
            console.log("Notification message received");
            if(message.tap){
                console.log("Tapped in " + message.tap);
            }
        }
        console.dir(message);
    }, function(error) {
        console.error(error);
    });

    console.log("After onMessageReceived");

}
