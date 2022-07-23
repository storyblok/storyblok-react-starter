import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { storyblokInit, apiPlugin } from "@storyblok/react";

import BlogPost from "./components/BlogPost";
import Feature from "./components/Feature";
import FeaturedPosts from "./components/FeaturedPosts";
import Grid from "./components/Grid";
import PostsList from "./components/PostsList";
import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Text from "./components/Text";

const components = {
  feature: Feature,
  "featured-posts": FeaturedPosts,
  grid: Grid,
  page: Page,
  post: BlogPost,
  "selected-posts": PostsList,
  teaser: Teaser,
  text: Text,
};

storyblokInit({
  accessToken: "AAmqfGqVkzqqQsa4ZGwNAAtt",
  use: [apiPlugin],
  components,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
