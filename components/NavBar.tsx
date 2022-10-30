import { useRouter } from "next/router";
import cn from "classnames";
import Link from "next/link";

function NavBarItem({ href, children }: { href: string; children: string }) {
  const router = useRouter();
  const isActive = router.pathname.split("/")[1] === href.split("/")[1];
  return (
    <Link href={href}>
      <div
        className={cn(
          { "bg-jewel": isActive },
          "cursor-pointer rounded-md px-2",
          {
            "duration-500 hover:bg-jewel hover:bg-opacity-75 hover:transition-colors":
              !isActive,
          }
        )}
      >
        {children}
      </div>
    </Link>
  );
}

export function NavBar() {
  return (
    <div className="mb-2 flex h-12 w-full items-center justify-center gap-2 border-b border-gray-600 text-base shadow-sm shadow-jewel sm:gap-4 sm:text-lg">
      <NavBarItem href="/">Home</NavBarItem>
      <NavBarItem href="/experience">Experience</NavBarItem>
      <NavBarItem href="/blog">Blog</NavBarItem>
      <NavBarItem href="/stats">Stats</NavBarItem>
    </div>
  );
}
