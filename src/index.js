var PKIWebSDK = function() {
  this.Certificate = require('./certificate');
  this.PDF = require('./pdf');
  this.sample = require('../test/assets/no-signature.pdf.js');
  this.Key = require('./key');
  this.UI = require('./ui');
  this.Utils = require("./utils");
}
var caStore = require("./castore");

window.PKIWebSDK = new PKIWebSDK();
window.PKIWebSDK.private = {}
window.PKIWebSDK.private.forge = window.forge;
window.PKIWebSDK.private.caStore = window.forge.pki.createCaStore(caStore);
module.exports = PKIWebSDK;
