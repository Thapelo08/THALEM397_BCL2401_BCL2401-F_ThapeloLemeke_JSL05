// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    { title: "Hold", artist: "Blxckie", genre: "R&B" },
    { title: "Dilo Die Chenchitse", artist:"Wordz", genre: "Hip Hop" },
    { title: "Family", artist: "Amanda black", genre: "Afro House" },
    { title: "Uzozisola", artist: " LeeMcKrazy", genre: "Amapiano" },
    { title: "Gabriella", artist: "Pcee", genre: "Electronic" },
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "Rock",
    "Rocket": "Pop",
    "Groot": "Rock",
 
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    const playlists = Object.entries(guardians).map(([guardian, preferredGenre]) => {
      const playlist = {
        guardian: guardian,
        songs: songs.filter((song) => song.genre === preferredGenre),
      };
      return playlist;
    });
    return playlists;
  }
  

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
const playlistDiv = document.getElementById('playlists');
Object.keys(playlist).forEach((guardian) => {
   const playlistContainer = document.createElement("div");
   playlistContainer.classList.add("playlist");

   const playlistTitle = document.createElement('h2');
   playlistTitle.textContent =  `${guardian}'s Playlist:`;
   playlistContainer.appendChild(playlistTitle);

   const playlistList = document.createElement("ul");
   playlists[guardian].forEach((song) => {
    const listItem = document.createElement("ul");
    const songTitle = document.createElement("span");
    songTitle.textContent = song;
    songTTitle.style.textDecoration = "underline";
    songTitle.style.color = "yellow";
    songTitle.style.fontweight = "bold";
    listItem.appendChild(songTitle);

    const songArtist = document.createElement("span");
    const artistName = songs.find((s) => s.title === song).artist;
    songArtist.textContent = " by " + artistName;
     
    listItem.appendChild(songArtist);
    playlistList.appendChild(listItem);
   });
   playlistContainer.appendChild(playlistList);

   playlistsDiv.appendChild(playlistContainer);
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


