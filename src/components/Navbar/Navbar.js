import React, { useState } from "react";
import "./Navbar.css";
import { user } from "../../database/data";
import Modal from "@mui/material/Modal";
import PlaylistsModal from "../PlaylistsModal/PlaylistsModal";

function Navbar({ home }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="nav-btns back">
          <ion-icon name="chevron-back-circle"></ion-icon>
        </button>
        <button className="nav-btns forward" disabled>
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </button>
        {!home && (
          <button className="play-btn">
            <ion-icon name="play-circle"></ion-icon>
          </button>
        )}
        {!home && <h2>Liked Songs</h2>}
      </div>

      <div className="navbar-right">
        <div className="playlists">
          <button className="playlist-btn" onClick={() => setOpenModal(true)}>
            <ion-icon name="list"></ion-icon>
          </button>

          <Modal
            className="playlist-modal-container"
            open={openModal}
            onClose={() => setOpenModal(false)}
          >
            <PlaylistsModal />
          </Modal>
        </div>

        <button className="upgrade-btn">
          <h4>Upgrade</h4>
        </button>

        <div className="menu">
          <button
            onClick={() => {
              document.querySelector(".menu").classList.toggle("active");
            }}
            className="menu-btn"
          >
            <img src={user.pfp} alt="" />
            <h4>{user.username}</h4>
            <ion-icon name="caret-down"></ion-icon>
          </button>

          <ul className="menu-list">
            <li>
              Account
              <ion-icon name="open-outline"></ion-icon>
            </li>
            <li>Profile</li>
            <li>
              Upgrade to Premium
              <ion-icon name="open-outline"></ion-icon>
            </li>
            <li>Settings</li>
            <li className="logout">Log out</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
