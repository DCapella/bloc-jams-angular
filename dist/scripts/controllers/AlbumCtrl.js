(function() {
  function AlbumCtrl(Fixtures, SongPlayer) {
    var albumData = {};
    this.albumData = Fixtures.getAlbum();
    this.SongPlayer = SongPlayer;
  }
  
  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
