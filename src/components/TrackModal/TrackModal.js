import React, { useEffect } from "react";
import "./TrackModal.css";

function TrackModal() {
  const setSlider = () => {
    // To show value - grey for unselected and white for selected part
    //  --slider-color: changes according to hover
    const sliders = document.querySelectorAll(".slider");
    sliders.forEach((slider) => {
      const min = slider.min,
        max = slider.max,
        value = slider.value;
      var percentage = ((value - min) / (max - min)) * 100;
      slider.style.background = `linear-gradient(to right, var(--slider-color) 0%, var(--slider-color) ${percentage}%, #ffffff66 ${percentage}%, #ffffff66 100%)`;
    });
  };
  useEffect(() => {
    setSlider();
  });

  return (
    <div className="track-modal">
      <div className="track-image">
        <img
          className="banner"
          src="https://upload.wikimedia.org/wikipedia/en/2/27/...Ready_for_It%3F_-_Taylor_Swift.png"
          alt=""
        />
      </div>

      <div className="track-info">
        <div className="song">
          <h5 className="song-title">
            <a href="">...Ready For It?</a>
          </h5>
          <p className="song-artist">
            <a href="">Taylor Swift</a>
          </p>
        </div>
        <span className="icon">
          <ion-icon name="heart-outline"></ion-icon>
        </span>
      </div>

      <div className="track-player">
        <div className="progress-bar">
          <div className="song-slider">
            <input
              type="range"
              className="slider"
              name="song-time"
              id="song-time"
              min={0}
              max={100}
              onInput={() => setSlider()}
            />
          </div>
          <div className="song-timings">
            <p className="current-time">2:18</p>
            <p className="stop-time">4:59</p>
          </div>
        </div>

        <div className="controls">
          <div className="icon">
            <ion-icon name="shuffle-outline"></ion-icon>
          </div>
          <div className="icon">
            <ion-icon name="play-skip-back"></ion-icon>
          </div>
          <div className="icon play-btn">
            <ion-icon name="play-circle"></ion-icon>
            {/* <ion-icon name="pause-circle"></ion-icon> */}
          </div>
          <div className="icon">
            <ion-icon name="play-skip-forward"></ion-icon>
          </div>
          <div className="icon">
            <ion-icon name="repeat-outline"></ion-icon>
          </div>
        </div>
      </div>

      <div className="track-options">
        <div className="track-options-left">
          <span className="icon">
            <ion-icon name="laptop-outline"></ion-icon>
          </span>
        </div>
        <div className="track-options-right">
          <span className="icon">
            <ion-icon name="share-social-outline"></ion-icon>
          </span>
          <span className="icon">
            <ion-icon name="layers-outline"></ion-icon>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TrackModal;
