import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const mdx = (await req.json()).mdx;
  if (!mdx || typeof mdx !== "string") {
    return new Response("Invalid request body", { status: 400 });
  }
  const mdxSource = await serialize(mdx as string, {
    mdxOptions: {
      rehypePlugins: [remarkGfm],
    },
  });
  return NextResponse.json({ mdxSource });
}
