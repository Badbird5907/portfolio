"use client";
import { Card, CardBody } from "@nextui-org/card";
import {
  Autocomplete,
  AutocompleteItem,
  Input,
  MenuTriggerAction,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import { GithubFile } from "@/types/gh";
import { DebounceInput } from "react-debounce-input";
import CustomButton from "@/components/button";

const octokit = new Octokit();
type GithubFileSelectorProps = {
  onSubmit: (file: GithubFile) => void;
  allowDir?: boolean;
};
const GithubFileSelector = (props: GithubFileSelectorProps) => {
  const [username, setUsername] = useState("");
  const [repo, setRepo] = useState("");
  const [files, setFiles] = useState<GithubFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<GithubFile | null>(null);
  const getUpDir = (): GithubFile => {
    return {
      name: "..",
      path: file
        ? file.path.includes("/")
          ? file.path.split("/").slice(0, -1).join("/")
          : file.path
        : "",
      sha: "",
      size: 0,
      type: "dir",
      url: "",
      download_url: "",
      git_url: "",
      html_url: "",
    };
  };
  useEffect(() => {
    if (username && repo) {
      setLoading(true);
      octokit.rest.repos
        .getContent({
          owner: username,
          repo: repo,
          path: file?.path || "",
        })
        .then((data) => {
          if (!data.data || !Array.isArray(data.data)) {
            setFiles(file ? [getUpDir()] : []);
            return;
          }
          setFiles(
            file
              ? [getUpDir(), ...(data.data as GithubFile[])]
              : (data.data as GithubFile[])
          );
        })
        .catch((e) => {
          console.error(e);
          setFiles(file ? [getUpDir()] : []);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [username, repo, file]);
  return (
    <Card>
      <CardBody>
        <div className={"flex flex-col gap-4"}>
          <DebounceInput
            debounceTimeout={500}
            element={Input as any}
            placeholder={"Github Username"}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <DebounceInput
            debounceTimeout={500}
            element={Input as any}
            placeholder={"Github Repo"}
            onChange={(e) => setRepo(e.target.value)}
            value={repo}
          />
          <div className={"w-full flex flex-col"}>
            <span className={"truncate-ltr text-sm text-gray-500"}>
              {file?.path || "Select a file"}
            </span>
            <Autocomplete
              items={files}
              inputValue={file?.name || ""}
              isLoading={loading}
              label={"Select a file"}
              alt={file?.path || "Select a file"}
              onSelectionChange={(item) => {
                const key = item as string;
                if (key == "..") {
                  setFile(getUpDir());
                  return;
                }
                const file: GithubFile | undefined = files.find(
                  (f) => f.name === key
                );
                setFile(file || null);
              }}
              clearButtonProps={{
                onClick: (e) => {
                  setFile(null);
                },
              }}
              onOpenChange={(
                open: boolean,
                menuTrigger?: MenuTriggerAction
              ) => {
                console.log(open, menuTrigger);
              }}
            >
              {(item: GithubFile) => {
                return (
                  <AutocompleteItem
                    key={item.name}
                    className={"truncate"}
                    // intentionally triggering a bug to keep the menu open:
                    // <Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.
                    textValue={item.type === "dir" ? undefined : item.name}
                  >
                    {item.name}
                    {item.type === "dir" ? "/" : ""}
                  </AutocompleteItem>
                );
              }}
            </Autocomplete>
          </div>
          <CustomButton
            disabled={
              !file ||
              (!props.allowDir && file.type === "dir") ||
              file.name === ".."
            }
            onClick={() => props.onSubmit(file as GithubFile)}
          >
            Select File
          </CustomButton>
        </div>
      </CardBody>
    </Card>
  );
};

export default GithubFileSelector;
