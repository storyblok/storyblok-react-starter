import React from "react";
import { HeadProvider, Title, Meta } from "react-head";

const Head = ({ title, description }) => (
  <HeadProvider>
    <meta charSet="UTF-8" />
    <Title>{title || ""}</Title>
    <Meta name="description" content={description || ""} />
    <Meta name="viewport" content="width=device-width, initial-scale=1" />
  </HeadProvider>
);

export default Head;
