(function() {
  //edit

  function SongPlayer($rootScope, Fixtures) {
    
/*
    @desc stopSong is a function to stop song;
*/
    var stopSong = function() {
      currentBuzzObject.stop();
      SongPlayer.currentSong.playing = null;
    };

/*
  * @var SongPlayer
  * @desc creating empty var
*/
    var SongPlayer = {};
    
    var currentAlbum = Fixtures.getAlbum();
/*
    @desc getting song number to know where at
*/
    var getSongIndex = function(song) {
      return currentAlbum.songs.indexOf(song);
    };
    
    
/*
* @desc Buzz object audio file
* @type {object}
*/
    
    var currentBuzzObject = null;
    
/*
  * @function setSong
  * @desc Stops currently playing song and loads new audio file as currentBuzzObject
  * @param {object} song
*/
    
    var playSong = function(song) {
      currentBuzzObject.play()
      song.playing = true;
    };
    
    var setSong = function(song) {
      if (currentBuzzObject) {
        stopSong();
      } 
      
      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });
      
      currentBuzzObject.bind('timeupdate', function() {
        $rootScope.$apply(function() {
          SongPlayer.currentTime = currentBuzzObject.getTime();
        });
      });
      
      SongPlayer.currentSong = song;
    };
    
/*
    @desc Active song object from list of songs
    @type {object}
*/
    
    SongPlayer.currentSong = null;

/*
    @desc Current playback time (in seconds) of currently playing song
    @type {Number}
*/
    SongPlayer.currentTime = null;
    
/*
    @function setCurrentTime
    @desc Set current time (in seconds) of currently playing song
    @param {Number} time
*/
    SongPlayer.setCurrentTime = function(time) {
      if (currentBuzzObject) {
        currentBuzzObject.setTime(time);
      }
    };
    
/*
  * @function play(song)
  * @desc playing the music
*/

    
    SongPlayer.play = function(song) {
      song = song || SongPlayer.currentSong;
      if (SongPlayer.currentSong !== song) {
        setSong(song);
        playSong(song);
      } else if (SongPlayer.currentSong === song) {
        if (currentBuzzObject.isPaused()) {
          playSong(song);
        }
      }
      
    };
    
/*
  * @function pause(song)
  * @desc stop the music
*/

    
    SongPlayer.pause = function(song) {
      song = song || SongPlayer.currentSong;
      currentBuzzObject.pause();
      song.playing = false;
    };
/*
    @desc SongPlayer.previous its a previous button
*/
    SongPlayer.previous = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex--;
      
      if (currentSongIndex < 0) {
        stopSong();
      } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };
    
/*
    @desc SongPlayer.next; its a next button
*/
    SongPlayer.next = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex++;
      
      if(currentSongIndex == currentAlbum.songs.length) {
        stopSong();
      } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };
    
    return SongPlayer;
  }
/*
    @.factory
    @desc including Fixtures factory
*/
  angular
    .module('blocJams')
  //edit
  

    .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);

  //edit
  
    //.factory('SongPlayer', ['Fixtures', SongPlayer]);
  
  //end of edit
})();