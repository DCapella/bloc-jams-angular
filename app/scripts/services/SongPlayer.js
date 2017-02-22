(function() {
  function SongPlayer() {
/*
  * @var SongPlayer
  * @desc creating empty var
*/
    var SongPlayer = {};
    
/*
  * @var currentSong
  * @desc setting the currentSong to false
*/
    var currentSong = null;
    
    
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
        currentBuzzObject.stop();
        currentSong.playing = null;
      } 
      
      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });
      
      currentSong = song;
    };
    
/*
  * @function play(song)
  * @desc playing the music
*/

    
    SongPlayer.play = function(song) {
      
      if (currentSong !== song) {
        setSong(song);
        playSong(song);
      } else if (currentSong === song) {
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
      currentBuzzObject.pause();
      song.playing = false;
    };
    
    return SongPlayer;
  }
  
  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);
})();