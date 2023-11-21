import Link from "next/link";
import SlideDown from "@/components/framer/slide-down";

const nav = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full shadow-md px-6 py-4">
      <SlideDown
        duration={0.5}
        delay={1}
        transition={{
          type: "spring",
        }}
      >
        <nav className="space-x-4">
          {nav.map((item, i) => {
            return (
              <Link
                href={item.href}
                key={i}
                className={
                  "text-base font-medium text-zinc-200 hover:text-zinc-400 transition-all duration-200"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </SlideDown>
    </header>
  );
};

export default Navbar;
