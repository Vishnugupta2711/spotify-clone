import React from "react";
import "./PlaylistsModal.css";
import { playlists } from "../../database/data";

function PlaylistsModal() {
  return (
    <div className="playlists-modal">
      <h2>Your Playlists</h2>
      <div className="search">
        <ion-icon name="search"></ion-icon>
        <input
          type="search"
          name="search"
          id="playlistSearch"
          placeholder="Search"
        />
      </div>

      <ul className="playlists">
        {playlists.map((playlist, index) => (
          <li key={index}>
            <img src={playlist.image} alt="" />
            <a href={playlist.link}>{playlist.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistsModal;
