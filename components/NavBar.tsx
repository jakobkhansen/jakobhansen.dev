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
          "m-2 cursor-pointer rounded-md px-2",
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
    <div className="mb-2 flex h-12 w-full items-center justify-center border-b border-gray-600 text-lg shadow-sm shadow-jewel">
      <NavBarItem href="/">Home</NavBarItem>
      <NavBarItem href="/aboutme">Me</NavBarItem>
      <NavBarItem href="/portfolio">Portfolio</NavBarItem>
      <NavBarItem href="/blog">Blog</NavBarItem>
      <NavBarItem href="/stats">Stats</NavBarItem>
    </div>
  );
}
