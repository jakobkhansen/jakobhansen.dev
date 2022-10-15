import { PropsWithChildren } from "react";

export function PostLayout({ children }: PropsWithChildren<{}>) {
  return <div className="mdx m-auto flex max-w-2xl flex-col">{children}</div>;
}
