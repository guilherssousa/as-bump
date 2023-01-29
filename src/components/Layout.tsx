import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement>;

function Layout({ children, ...props }: Props) {
  return <main {...props}>{children}</main>;
}

export default Layout;
