import React from "react";
import { RouteComponentProps } from "react-router-dom";

export const SlideshowScreen: React.FC<RouteComponentProps> = () => (
  <div className="SlideshowScreen">
    <h2>Slideshow screen</h2>
    <ul>
      <li>
        <button title="Previous image">◀️</button>
      </li>
      <li>
        <button title="Pause">⏸</button>
      </li>
      <li>
        <button title="Next image">▶️</button>
      </li>
    </ul>
  </div>
);
