'use strict';

var util = require('hexo-util');

module.exports = function (hexo, args) {
  var config = { src: hexo.config.root + args[0] }
  return '<div class="owl-media owl-image owl-local">' + util.htmlTag('img', config) + '</div>';
}