import { Metadata } from "next";
import GhFileSelectorPage from "@/components/pages/demos/gh-file-selector-page";

export const metadata: Metadata = {
  title: "Badbird5907 > Github File Selector Demo",
  description: "A demo of the Github File Selector component",
};
const Page = () => {
  return <GhFileSelectorPage />;
};

export default Page;
