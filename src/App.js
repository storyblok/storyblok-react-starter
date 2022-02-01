import React from "react";
import "./index.css";
import Layout from "./components/Layout";
import DynamicComponent from "./components/DynamicComponent";
import { useStoryblok } from "./utils/storyblok";

function App() {
  let slug =
    window.location.pathname === "/"
      ? "home"
      : window.location.pathname.replace("/", "");

  const preview = true;

  let story = useStoryblok(slug, preview);

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <DynamicComponent blok={story.content} />
    </Layout>
  );
}

export default App;
