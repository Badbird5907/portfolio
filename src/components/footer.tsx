import Version from "@/components/version";

const Footer = () => {
  return (
    <footer
      className={
        "fixed bottom-0 left-0 p-2 text-xs text-gray-500 dark:text-gray-400"
      }
    >
      <Version />
    </footer>
  );
};

export default Footer;
