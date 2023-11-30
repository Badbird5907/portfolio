import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import * as commands from "@uiw/react-md-editor/commands";
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const MarkdownEditor = () => {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <div>
      <MDEditor
        value={value}
        onChange={(val: string | undefined) => {
          setValue(val || "");
        }}
      />
    </div>
  );
};

export default MarkdownEditor;
