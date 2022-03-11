import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Text = ({ blok }) => {
  return (
    <div
      className="bg-white w-full"
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      <div className="container mx-auto py-12">{render(blok.text)}</div>
    </div>
  );
};

export default Text;
