// Collectables_Watcher auto-runs collectable collection on load and hourly
// v19122025-01
(function initCollectablesWatcher(existingWatcher) {
    var HOUR_MS = 60 * 60 * 1000;
    var watcher = {
        timer: null,
        start: function() {
            watcher.stop();
            watcher.trigger("startup");
            watcher.timer = setInterval(function() {
                watcher.trigger("hourly");
            }, HOUR_MS);
            watcher.notify("Collectables watcher active (runs hourly)");
        },
        stop: function() {
            if (watcher.timer) {
                clearInterval(watcher.timer);
                watcher.timer = null;
            }
        },
        trigger: function(reason) {
            var reasonText = reason ? " (" + reason + ")" : "";
            try {
                if (typeof _exudHLColl === "function") {
                    _exudHLColl();
                    watcher.notify("Collectables collection triggered" + reasonText);
                } else {
                    watcher.notify("Collectables watcher: collectable helper not found");
                }
            } catch (e) {
                try { debug(e); } catch (err) {}
                watcher.notify("Collectables watcher encountered an error");
            }
        },
        notify: function(message) {
            if (typeof game !== "undefined" && game.showAlert) {
                game.showAlert(message);
            } else if (typeof showGameAlert === "function") {
                showGameAlert(message);
            }
        }
    };

    if (existingWatcher && typeof existingWatcher.stop === "function") {
        existingWatcher.stop();
    }

    watcher.start();
    window.Collectables_Watcher = watcher;
})(window.Collectables_Watcher || null);

// Add menu toggle under Tools to control the watcher
addToolsMenuItem("Collectables Watcher", function() {
    var watcher = window.Collectables_Watcher;
    if (!watcher) {
        return;
    }
    if (watcher.timer) {
        watcher.trigger("manual");
        watcher.notify("Collectables watcher already running; manual trigger sent");
        return;
    }
    watcher.start();
});
