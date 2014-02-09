if ("undefined" == typeof(phoenityButtons)) {
  var phoenityButtons = {};
};

phoenityButtons = {


toggleHeaders: function()
{
 // Get the preferences mail branch
    var mailPrefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("mail.");
    
    var currentHeaderSetting = mailPrefs.getIntPref("show_headers");
    
    // normal headers
    if (currentHeaderSetting == 1) {
        goDoCommand('cmd_viewAllHeader');
    }
    // all headers
    else if (currentHeaderSetting == 2) {
        goDoCommand('cmd_viewNormalHeader');
    }
    
}
};
