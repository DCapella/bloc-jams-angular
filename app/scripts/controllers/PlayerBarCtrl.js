(function() {
  function PlayerBarCtrl(Fixtures, SongPlayer) {
    console.log("Start of PlayerBarCtrl");
    var albumData = {};
    this.albumData = Fixtures.getAlbum();
    this.songPlayer = SongPlayer;
    console.log(this.albumData.songs[0].title);
  }
  
  angular
    .module('blocJams')
    .controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl]);
})();