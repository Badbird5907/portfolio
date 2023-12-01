"use client";

import { Post } from ".prisma/client";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input, Tab, Tabs } from "@nextui-org/react";
import { ChangeEvent, useEffect, useState } from "react";
import { IoSparkles, IoSparklesOutline } from "react-icons/io5";
import GithubFileSelector from "@/components/github-file-selector";
import CustomButton from "@/components/button";
import { useDynamicModal } from "@/components/dynamic-modal";
import { GithubFile } from "@/types/gh";

type EditBlogProps = {
  post?: Post;
  newPost?: boolean;
};
const EditBlog = (props: EditBlogProps) => {
  const [slug, setSlug] = useState(props.post?.slug || "");
  const [title, setTitle] = useState(props.post?.title || "");
  const [ghFile, setGhFile] = useState<GithubFile | null>(null);
  const [autoSlugGeneration, setAutoSlugGeneration] = useState(true);
  const { showModal, closeModal } = useDynamicModal();
  useEffect(() => {
    if (props.newPost && autoSlugGeneration) {
      setSlug(
        title
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "")
      );
    }
  }, [title]);
  return (
    <Card className={"w-2/3"}>
      <CardHeader>
        <h1 className={"text-4xl font-bold w-full text-center"}>
          {props.post ? "Edit" : "New"} Blog Post
        </h1>
      </CardHeader>
      <CardBody>
        <form>
          <div className={"grid grid-cols-2 gap-4"}>
            <Input
              label={"Title"}
              id={"title"}
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
            <Input
              label={"Slug"}
              id={"slug"}
              value={slug}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSlug(e.target.value);
                setAutoSlugGeneration(false);
              }}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => setAutoSlugGeneration(!autoSlugGeneration)}
                >
                  {autoSlugGeneration ? (
                    <IoSparkles className="text-2xl pointer-events-none" />
                  ) : (
                    <IoSparklesOutline className="text-2xl pointer-events-none" />
                  )}
                </button>
              }
            />
            <div className={"col-span-2"}>
              <Tabs aria-label={"Content"}>
                <Tab
                  key={"github"}
                  title={"Github"}
                  className={"w-full flex flex-col"}
                >
                  {ghFile && (
                    <span className={"text-center"}>
                      Selected File:{" "}
                      <a
                        href={ghFile.html_url}
                        target={"_blank"}
                        className={"text-blue-500 hover:underline"}
                      >
                        {ghFile.path}
                      </a>
                    </span>
                  )}
                  <CustomButton
                    onClick={() => {
                      showModal({
                        title: "Select a file",
                        body: (
                          <>
                            <GithubFileSelector
                              onSubmit={(file) => {
                                setGhFile(file);
                                closeModal();
                              }}
                            />
                          </>
                        ),
                        footer: (
                          <CustomButton
                            color={"danger"}
                            className={"w-full"}
                            onPress={() => {
                              closeModal();
                            }}
                          >
                            Close
                          </CustomButton>
                        ),
                      });
                    }}
                  >
                    Select File
                  </CustomButton>
                </Tab>
                <Tab key={"url"} title={"URL"}>
                  <Input
                    label={"URL"}
                    id={"url"}
                    value={""}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {}}
                  />
                </Tab>
                <Tab key={"raw"} title={"Input"}></Tab>
              </Tabs>
            </div>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default EditBlog;
