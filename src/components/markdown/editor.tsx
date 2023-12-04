import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import React, { Suspense, useState } from "react";
import MarkdownRenderer from "@/components/markdown/renderer";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const MarkdownEditor = () => {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <MDEditor
      value={value}
      onChange={(val: string | undefined) => {
        setValue(val || "");
      }}
      /*
      components={{
        preview: (source, state, dispatch) => {
          return (
            <Suspense fallback={<div>Rendering...</div>}>
              <MarkdownRenderer
                client={{
                  source: source,
                }}
              />
            </Suspense>
          );
        },
      }}
       */
    />
  );
};

export default MarkdownEditor;
