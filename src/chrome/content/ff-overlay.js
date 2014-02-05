var toggle_full_headers = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("toggle_full_headers-strings");
  },

  onMenuItemCommand: function(e) {
    var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                                  .getService(Components.interfaces.nsIPromptService);
    promptService.alert(window, this.strings.getString("helloMessageTitle"),
                                this.strings.getString("helloMessage"));
  },

  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    toggle_full_headers.onMenuItemCommand(e);
  }
};

window.addEventListener("load", function () { toggle_full_headers.onLoad(); }, false);


toggle_full_headers.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e) {
    toggle_full_headers.showFirefoxContextMenu(e);
  }, false);
};

toggle_full_headers.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-toggle_full_headers").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { toggle_full_headers.onFirefoxLoad(); }, false);