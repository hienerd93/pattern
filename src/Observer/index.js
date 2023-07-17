var EventManager = /** @class */ (function () {
    function EventManager() {
        this.listeners = [];
    }
    EventManager.prototype.subscribe = function (eventType, listener) {
        this.listeners.push({ eventType: eventType, listener: listener });
    };
    EventManager.prototype.unsubscribe = function (eventType, listerner) {
        this.listeners.filter(function (item) { return item.listener !== listerner && item.eventType !== eventType; });
    };
    EventManager.prototype.notify = function (eventType, data) {
        this.listeners
            .filter(function (i) { return i.eventType === eventType; })
            .forEach(function (i) { return i.listener.update(data); });
    };
    return EventManager;
}());
var LoggingListener = /** @class */ (function () {
    function LoggingListener(log_filename, message) {
        this.log = log_filename;
        this.message = message;
    }
    LoggingListener.prototype.update = function (filename) {
        console.log(filename);
    };
    return LoggingListener;
}());
var EmailAlertsListener = /** @class */ (function () {
    function EmailAlertsListener(email, message) {
        this.email = email;
        this.message = message;
    }
    EmailAlertsListener.prototype.update = function (filename) {
        console.log(filename);
    };
    return EmailAlertsListener;
}());
(function () {
    var event = new EventManager();
    var logging = new LoggingListener("newuser", "welcome");
    event.subscribe("log", logging);
    var email = new EmailAlertsListener("newemail", "hello");
    event.subscribe("mail", email);
    event.notify("log", "noti");
})();
