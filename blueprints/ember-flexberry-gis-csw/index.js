/*jshint node:true*/
module.exports = {

  afterInstall: function (options) {
    return this.addBowerPackagesToProject(
      [{
        name: 'ows.js',
        target: '0.1.5'
      }]);
  }
};
