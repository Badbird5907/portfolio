import { getVersionString } from "@/util/server/info";
import Link from "next/link";

const Version = async () => {
  const version = await getVersionString();
  return (
    <Link
      href={version?.url || "#"}
      className={"text-gray-500"}
      target={"_blank"}
    >
      {version.version || "Unknown"}
    </Link>
  );
};

export default Version;
