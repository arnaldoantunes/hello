cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cz.blocshop.socketsforcordova.Socket",
      "file": "plugins/cz.blocshop.socketsforcordova/socket.js",
      "pluginId": "cz.blocshop.socketsforcordova",
      "clobbers": [
        "window.Socket"
      ]
    }
  ];
  module.exports.metadata = {
    "cz.blocshop.socketsforcordova": "1.1.0",
    "cordova-plugin-whitelist": "1.3.4"
  };
});