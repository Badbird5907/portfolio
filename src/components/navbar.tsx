import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-zinc-900">
      <nav className="space-x-4">
        <Link
          className="text-base font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-400"
          href="#"
        >
          Home
        </Link>
        <Link
          className="text-base font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-400"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-base font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-400"
          href="#"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;