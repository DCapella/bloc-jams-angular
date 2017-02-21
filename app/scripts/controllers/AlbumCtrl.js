(function() {
  function AlbumCtrl() {
    this.albumData;
    this.albumData = angular.copy(albumPicasso);
/*
    console.log(this.albumData[0].title);
    console.log(this.albumData.title);
    console.log("songs: " + this.albumData.songs);
*/
  }
  
  angular
    .module('blocJams')
    .controller('AlbumCtrl', AlbumCtrl);
})();
