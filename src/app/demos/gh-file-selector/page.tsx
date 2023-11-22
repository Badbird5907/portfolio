"use client";

import GithubFileSelector from "@/components/github-file-selector";
import { GithubFile } from "@/types/gh";
import { useState } from "react";

const Page = () => {
  const [file, setFile] = useState<GithubFile | null>(null);
  return (
    <div className="flex flex-col items-center justify-center px-6 mx-auto h-screen">
      <div className={"py-4 flex flex-col"}>
        {file ? (
          <>
            <span>
              {file.path} ({file.size} bytes)
            </span>
            <div className={"flex flex-col text-center text-blue-400"}>
              <a href={file.download_url} target="_blank">
                Download / Raw URL
              </a>
              <a href={file.html_url} target="_blank">
                HTML URL
              </a>
              <a href={file.git_url} target="_blank">
                Github API URL
              </a>
            </div>
          </>
        ) : (
          <span>Click submit to see results</span>
        )}
      </div>
      <GithubFileSelector
        onSubmit={(file) => {
          setFile(file);
          console.log(file);
        }}
        allowDir={false}
      />
    </div>
  );
};

export default Page;
