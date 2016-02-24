// create a new Mongo db collection
People = new Mongo.Collection('people');

if (Meteor.isClient) {
    // run when client DOM is ready
    Meteor.startup(function() {
        // subscribe to a collection
        Meteor.subscribe('people', function() {
            // code to run when subscription is ready
            $(".spinner").fadeOut(1000, function() {
                // remove the spinner after a fadeout
                $(this).remove();
            });
        });
    });
}

if (Meteor.isServer) {
    // inject the spinner HTML into the head
    Inject.rawBody("loader", Assets.getText('spinner.html'));

    Meteor.publish('people', function() {
        // simulate a slow server
        Meteor._sleepForMs(2000);
        return People.find();
    });
}
