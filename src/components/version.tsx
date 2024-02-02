import { getVersionString } from "@/util/server/info";
import Link from "next/link";

const Version = async () => {
  const version = await getVersionString();
  return (
    <div className={"flex flex-col items-center justify-center"}>
      <Link
        href={version?.url || "#"}
        className={"text-gray-500 pb-4"}
        target={"_blank"}
      >
        {version.version || "Unknown"}
      </Link>
    </div>
  );
};

export default Version;
