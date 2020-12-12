import React from "react";
import { RouteComponentProps } from "react-router-dom";

export const SearchScreen: React.FC<RouteComponentProps> = () => (
  <div className="SearchScreen">
    <h2>Search screen</h2>
    <div>
      <input type="search" name="SearchScreen/search" />
      <button title="Search">🔎</button>
      <button title="Clear">╳</button>
    </div>
  </div>
);
