import { useEffect, useState } from "react";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "AAmqfGqVkzqqQsa4ZGwNAAtt",
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export function useStoryblok(slug, preview) {
  let [story, setStory] = useState(null);

  function initEventListeners() {
    const { StoryblokBridge } = window;
    if (typeof StoryblokBridge !== "undefined") {
      const storyblokInstance = new StoryblokBridge({
        resolveRelations: ["featured-posts.posts", "selected-posts.posts"],
      });

      storyblokInstance.on(["change", "published"], () =>
        window.location.reload(true)
      );

      storyblokInstance.on("input", (event) => {
        setStory(event.story);
      });

      storyblokInstance.on("enterEditmode", (event) => {
        Storyblok.get(`cdn/stories/${event.storyId}`, {
          version: "draft",
          resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
        })
          .then(({ data }) => {
            if (data.story) {
              setStory(data.story);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  }

  function addBridge(callback) {
    const existingScript = document.getElementById("storyblokBridge");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "//app.storyblok.com/f/storyblok-v2-latest.js";
      script.id = "storyblokBridge";
      document.body.appendChild(script);
      script.onload = () => {
        callback();
      };
    } else {
      callback();
    }
  }

  useEffect(() => {
    let params = {
      version: "draft",
      resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
    };

    if (preview) {
      params.version = "draft";
      params.cv = Date.now();
    }

    Storyblok.get(`cdn/stories/${slug}`, params)
      .then((response) => {
        setStory(response.data.story);
      })
      .catch((error) => {
        console.log(error);
      });

    if (preview) {
      addBridge(initEventListeners);
    }
  }, [preview, slug]);

  return story;
}

export default Storyblok;
