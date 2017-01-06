require('./deen_seed.less');
var template = require('./deen_seed.html');

angular.module('deen_seed', ['foo'])
.component('deenSeed', {
  template: template
});
