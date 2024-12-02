import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { memo, useEffect, useMemo, useState } from "react";
import { MDXProvider, useMDXComponents } from "@mdx-js/react";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import { MDXContent } from "mdx/types";
import axios from "axios";

type RendererProps = {
  mdxSource?: MDXRemoteSerializeResult;
  client?: {
    source: string;
  };
};
const MarkdownRenderer = (props: RendererProps) => {
  const [mdxSource, setMdxSource] = useState<
    MDXRemoteSerializeResult | undefined
  >(props.mdxSource);
  useEffect(() => {
    setMdxSource(props.mdxSource);
  }, [props.mdxSource]);
  useEffect(() => {
    if (props.client) {
      // post /api/admin/mdx/render
      //   return NextResponse.json({ mdxSource });
      axios
        .post("/api/admin/mdx/render", { mdx: props.client.source })
        .then((res) => {
          setMdxSource(res.data.mdxSource);
        });
    }
  }, [props]);
  if (mdxSource) return <MDXRemote {...mdxSource} />;
  return null;
};

export default MarkdownRenderer;
