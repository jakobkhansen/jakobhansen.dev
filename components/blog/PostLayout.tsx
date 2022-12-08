import { PropsWithChildren } from "react";
import "highlight.js/styles/atom-one-dark.css";

export function PostLayout({ children }: PropsWithChildren<{}>) {
  return <div className="mdx m-auto flex max-w-2xl flex-col">{children}</div>;
}
