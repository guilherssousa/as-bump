import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement>;

function Layout({ children, ...props }: Props) {
  return (
    <main
      {...props}
      className={"min-h-screen bg-black text-white".concat(
        " ",
        props?.className ?? ""
      )}
    >
      <div className="max-w-screen-lg mx-auto pt-16 flex items-center flex-col">
        {children}
      </div>
    </main>
  );
}

export default Layout;
