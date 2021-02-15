var app = (function() {
    // Controllers
    var controllers = {}; 
    // Load menu
    jSuites.menu(document.getElementById('menu'));
    // Load page component
    /*application = jSuites.app(content, {
        onbeforecreatepage: function(instance, page) {
            page.options.url = page.options.route; 
        },
        oncreatepage: function(instance, page, view) {
            // Controller is defined
            if (typeof(controllers[page.options.route]) == 'object') {
                // Create the lemonade object
                controllers[page.options.route].self = controllers[page.options.route].controller(obj, page);
                // Append component 
                lemonade.blender(view, controllers[page.options.route].self, page);
                // Cancel default behavior
                return false;
            }
        },
        onloadpage: function() {
            PR.prettyPrint();
        },
        detachHiddenPages: true,
    });

    // Initial onload scripts
    var script = document.getElementsByTagName('script');
    // Run possible inline scripts
    for (var i = 0; i < script.length; i++) {
        // Get type
        var type = script[i].getAttribute('type');
        if (type == 'text/loader') {
            eval(script[i].text);
        }
    }*/
});
