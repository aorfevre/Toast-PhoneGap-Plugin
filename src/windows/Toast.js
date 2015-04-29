function showToast( toastText) {
               console.log("showToast:" + toastText);
        var notifications = Windows.UI.Notifications;
        var template = notifications.ToastTemplateType.toastText02;
        var toastXml = notifications.ToastNotificationManager.getTemplateContent(template);
        var toastTextElements = toastXml.getElementsByTagName("text");
        toastTextElements[0].appendChild(toastXml.createTextNode(toastText));
        var toast = new notifications.ToastNotification(toastXml);
        var toastNotifier = notifications.ToastNotificationManager.createToastNotifier();
        toastNotifier.show(toast);
    }


module.exports = {

    show: function(successCallback, errorCallback, args) {
        
        showToast(args[0].message);
       

        successCallback("TOAST_OK:"+args[0].message);


    }
};

require("cordova/exec/proxy").add("Toast", module.exports);