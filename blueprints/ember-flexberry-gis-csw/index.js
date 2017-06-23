/*jshint node:true*/
module.exports = {

  afterInstall: function (options) {
    return this.addBowerPackagesToProject(
      [{
          name: 'osmtogeojson',
          target: '2.2.12'
        },
        {
          name: 'ows.js',
          target: '0.1.5'
        }
      ]);
  }
};
