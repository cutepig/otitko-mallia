import React from "react";
import { RouteComponentProps } from "react-router-dom";

export const SettingsScreen: React.FC<RouteComponentProps> = () => (
  <div className="SettingsScreen">
    <h2>Settings screen</h2>

    <div>
      <label>
        <span>Slideshow speed</span>
        {/*
        Yes in general I can't stand to see camelCase in HTML or CSS,
        but this is for mostly semantic purposes and the format was
        selected more by the convinience.
      */}
        <select name="SettingsScreen/slideshowSpeed">
          <option value="30">30 seconds</option>
          <option value="60">1 minute</option>
          <option value="120">2 minutes</option>
          <option value="">Manual control</option>
        </select>
      </label>
    </div>

    <div>
      <label>
        <span>Search provider</span>
        <select name="SettingsScreen/searchProvider">
          {/*
          NOTE: Would be nice to abstract the options to be type-safe towards given enum
        */}
          <option value="google">Google</option>
          <option value="bing">Bing</option>
          <option value="duckduckgo">DuckDuckGo</option>
        </select>
      </label>
    </div>

    <div>
      <label>
        <span>Safe Search</span>
        <input
          type="checkbox"
          defaultChecked={true}
          name="SettingsScreen/safeSearch"
        />
      </label>
    </div>

    <div>
      <label>
        <span>Show timer</span>
        <select name="SettingsScreen/timerPosition">
          <option value="">No</option>
          <option value="top-left">Top left</option>
          <option value="top-right">Top right</option>
          <option value="bottom-left">Bottom left</option>
          <option value="bottom-right">Bottom right</option>
        </select>
      </label>
    </div>

    <div>
      <label>
        <span>Timer blink in</span>
        <select name="SettingsScreen/timerBlinkTime">
          <option value="3">3 seconds</option>
          <option value="5">5 seconds</option>
          <option value="10">10 seconds</option>
          <option value="">Never</option>
        </select>
      </label>
    </div>
  </div>
);
