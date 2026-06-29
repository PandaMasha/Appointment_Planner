import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ data }) => {
  return (
    <div>
      {data.map((obj, index) => {
        const { name, ...rest } = obj;
        return <Tile key={index} name={name} description={rest} />;
      })}
    </div>
  );
};
