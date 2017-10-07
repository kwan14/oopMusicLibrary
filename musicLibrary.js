
function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  this.tracks = [];


  this.printPlaylists = function () {
    this.playlists.forEach((playlist) => {
      console.log(`Playlist: ${playlist.name}`);
    })
  }
  this.printTracks = function () {
    this.tracks.forEach((track) => {
      console.log(`Track: ${track.title}`);
    })
  }
  this.printPlaylist = function (playlistName) {
    this.playlists.forEach((playlist) => {
      if(playlist.name === playlistName) {
        playlist.tracks.forEach((track) => {
          console.log(track.title);
        })
      }
    })
  }
  this.addTrackToPlaylist = function (trackName, playlistName) {
    this.playlists.forEach((playlist) => {
      if(playlist.name === playlistName) {
        this.tracks.forEach((track) => {
          if(track.title === trackName) {
            playlist.tracks.push(track);
          }
        })
      }
    })
  }
  this.addTrack = function (track) {
    this.tracks.push(track);
  }
  this.addPlaylist = function (playlist) {
    this.playlists.push(playlist);
  }

}

function Playlist (name) {
  this.name = name;
  this.tracks = [];
  this.overallRating = function () {
    let rating = 0;
    this.tracks.forEach((track) => {
      rating +=  track.rating;
    })
    return (rating / this.tracks.length);
  }
  this.totalDuration = function () {
    let duration = 0;
    this.tracks.forEach((track) => {
      duration += track.length;
    })
    return duration;
  }
}

function Track (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

var myMusic = new Library("Music Library", "John Doe");

var track1 = new Track("Back in Black", 5,  257);
var track2 = new Track("Money Talks", 4, 233);
var track3 = new Track("One", 5, 427);
var track4 = new Track("Photograph", 5, 260);
var track5 = new Track("Rolling in the Deep", 3, 234);

myMusic.addTrack(track1);
myMusic.addTrack(track2);
myMusic.addTrack(track3);
myMusic.addTrack(track4);
myMusic.addTrack(track5);

var playlist1 = new Playlist("Hard Rock");
var playlist2 = new Playlist("Pop");

myMusic.addPlaylist(playlist1);
myMusic.addPlaylist(playlist2);

myMusic.printTracks();
myMusic.printPlaylists();

myMusic.addTrackToPlaylist("Back in Black", "Hard Rock");
myMusic.addTrackToPlaylist("Money Talks", "Hard Rock");
myMusic.addTrackToPlaylist("One", "Hard Rock");
myMusic.addTrackToPlaylist("Photograph", "Pop");
myMusic.addTrackToPlaylist("Rolling in the Deep", "Pop");


myMusic.printPlaylist("Hard Rock");
myMusic.printPlaylist("Pop");

console.log(playlist1.overallRating());
console.log(playlist1.totalDuration())







