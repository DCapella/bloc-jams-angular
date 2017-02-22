(function() {
  function CollectionCtrl(Fixtures) {
    var albums = [];
    this.albums = Fixtures.getCollection(12);
  }
  
  angular
    .module('blocJams')
    .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
})();