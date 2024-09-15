import React, { useEffect } from "react";
import "./Sidebar.css";
import { playlists } from "../../database/data";
import Logo from "../../assets/images/spotify-full.jpg";

function Sidebar() {
  const setPlaylistsSize = () => {
    // To change height of playlists section dynamically
    const playlists = document.querySelector(".sidebar .playlists");
    playlists.style.height = `${Math.max(200, window.innerHeight - 450)}px`;
  };

  useEffect(() => {
    setPlaylistsSize();

    window.addEventListener("resize", () => {
      setPlaylistsSize();
    });
  });

  return (
    <div className="sidebar">
      <div className="logo">
        <a href="#">
          <img src={Logo} alt="" />
        </a>
      </div>

      <ul className="nav">
        <li className="nav-item"></li>
        <li className="nav-item active">
          <a href="#">
            <span className="icon">
              <ion-icon name="home"></ion-icon>
            </span>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <span className="icon">
              <ion-icon name="search"></ion-icon>
            </span>
            Search
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <span className="icon">
              {/* <ion-icon name="library-outline"></ion-icon> */}
              <ion-icon name="bookmarks-outline"></ion-icon>
            </span>
            Your Library
          </a>
        </li>
        <li className="nav-item"></li>
        <li className="nav-item">
          <a href="#">
            <span className="icon custom-icon add">
              <ion-icon name="add"></ion-icon>
            </span>
            Create Playlist
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <span className="icon custom-icon heart">
              <ion-icon name="heart"></ion-icon>
            </span>
            Liked Songs
          </a>
        </li>
      </ul>

      <ul className="playlists">
        {playlists.map((playlist, index) => (
          <li key={index}>
            <a href={playlist.link}>{playlist.title}</a>
          </li>
        ))}
      </ul>

      <div className="install nav-item">
        <a href="">
          <span className="icon">
            <ion-icon name="arrow-down-circle-outline"></ion-icon>
          </span>
          Install App
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
