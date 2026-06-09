import { useState } from "react";

const songs = [
  {
    title: "Kiss Me Kiss Me",
    artist: "5 Seconds of Summer",
    cover: "/5sos.jpg",
    lyric: "so kiss me, kiss me, kiss me, I'm dying just to see you again",
    note: "Out of all the 5SOS songs, this one reminds me of you the most. The guitar instantly makes me think of you and how much you love music. Come here and kiss me already UGH.",
  },
  {
    title: "Soft Spot",
    artist: "keshi",
    cover: "/keshi.jpg",
    lyric: "no one makes me feel like you do",
    note: "This reminds me of you because I get to see your softer side, and that makes me feel really special.",
  },
  {
    title: "Come Inside of My Heart",
    artist: "IV of Spades",
    cover: "/spades.jpg",
    lyric: "Cause you're the only one for me",
    note: "This reminds me of how important you've become to me and how comfortable I feel with you.",
  },
  {
    title: "Malcolm in the Middle",
    artist: "Malcolm Todd",
    cover: "/malcolm1.jpg",
    lyric: "If when you wake I still will be the one you want around",
    note: "This reminds me of our late-night conversations and how much I enjoy spending time with you.",
  },
];

function MusicBoard() {
  const [selectedSong, setSelectedSong] = useState(songs[0]);

  return (
    <main className="music-page">
      <section className="music-panel upgraded-music-panel">
        <div className="vinyl-area upgraded-vinyl-area">
          <p className="now-playing-label">now playing</p>

          <div className="vinyl upgraded-vinyl">
            <img
              src={selectedSong.cover}
              alt={selectedSong.title}
              className="vinyl-album-cover"
            />
          </div>

          <div className="now-playing-card">
            <img src={selectedSong.cover} alt={selectedSong.title} />
            <div>
              <h2>{selectedSong.title}</h2>
              <p>{selectedSong.artist}</p>
            </div>
          </div>

          <p className="selected-note">"{selectedSong.lyric}"</p>
        </div>

        <div className="playlist-area">
          <p className="page-tag">songs that remind me of you</p>
          <h1>PLAYLIST!</h1>
          <p className="playlist-subtitle">
            Click a song and I’ll tell you why it reminds me of you. 💙
          </p>

          <div className="song-list">
            {songs.map((song) => (
              <button
                type="button"
                className={`song-card song-button ${
                  selectedSong.title === song.title ? "active-song" : ""
                }`}
                key={song.title}
                onClick={() => setSelectedSong(song)}
              >
                <img src={song.cover} alt={song.title} className="song-cover" />

                <div className="song-details">
                  <h2>{song.title}</h2>
                  <p className="song-artist">{song.artist}</p>
                </div>

                <div className="song-info">
                  <blockquote>"{song.lyric}"</blockquote>
                  <p className="song-note">{song.note}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default MusicBoard;