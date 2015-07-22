var Application = function() {};

Application.prototype = {
    Sentence: {},
    // Application Constructor
    // Bind Event Listeners
    // Bind any events that are required on startup.
	// Common events are:
    // 	  - 'load', 'deviceready', 'offline', and 'online'.
    initialize: function() {
        var self = this;
        document.addEventListener("DOMContentLoaded", function() {
            self.deviceReady();
        });
        return this;
    },
    // deviceready Event Handler
    deviceReady: function(app) {
        // do something (check if user is already signed in,
        // check for internet connection, resize app e.t.c)
        return this;
    },
    getSentenceInstance: function() {
        return this.Sentence;
    }
};
