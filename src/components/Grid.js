import React from "react";
import DynamicComponent from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";

const Grid = ({ blok }) => (
  <ul
    className="flex py-8 mb-6 container mx-auto"
    {...sbEditable(blok)}
    key={blok._uid}
  >
    {blok.columns.map((nestedBlok) => (
      <li key={nestedBlok._uid} className="flex-auto px-6">
        <DynamicComponent blok={nestedBlok} />
      </li>
    ))}
  </ul>
);

export default Grid;
