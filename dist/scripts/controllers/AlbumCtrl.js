(function() {
  function AlbumCtrl(Fixtures, SongPlayer) {
    var albumData = {};
    this.albumData = Fixtures.getAlbum();
    this.SongPlayer = SongPlayer;
    console.log("End of function AlbumCtrl");
  }
  
  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
