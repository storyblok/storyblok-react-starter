import "./index.css";
import Layout from "./components/Layout";
import { useStoryblok, StoryblokComponent } from "@storyblok/react";

function App() {
  const slug =
    window.location.pathname === "/"
      ? "home"
      : window.location.pathname.replace("/", "");

  const story = useStoryblok(
    slug,
    {
      resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
    },
    {
      resolveRelations: ["featured-posts.posts", "selected-posts.posts"],
    }
  );

  if (!story?.content) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <StoryblokComponent blok={story.content} />
    </Layout>
  );
}

export default App;
