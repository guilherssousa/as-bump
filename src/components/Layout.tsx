import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement>;

function Layout({ children, ...props }: Props) {
  return (
    <main
      {...props}
      className={"min-h-screen bg-black text-white pb-16 px-4".concat(
        " ",
        props?.className ?? ""
      )}
    >
      <div className="max-w-screen-xl mx-auto pt-16 flex items-center flex-col">
        {children}

        <footer className="mt-8 text-stone-500">
          <p>
            Made with Vite, Fabric, Tailwind and hosted on Vercel, this project
            is{" "}
            <a
              href="https://github.com/guilherssousa/as-bump"
              target="_blank"
              className="text-stone-300"
            >
              open source developed by Guilherme Sousa
            </a>{" "}
            and not affiliated with Adult Swim. Adult Swim is a trademark of
            Turner Broadcasting System, Inc. All rights reserved. (turner pls
            don't sue me)
          </p>
        </footer>
      </div>
    </main>
  );
}

export default Layout;
