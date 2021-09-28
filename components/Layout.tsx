import React, { ReactNode } from "react";
import Head from "next/head";
import Search from "svgs/search.svg";

type Props = {
  children?: ReactNode;
  title?: string;
};

export function Layout({ children, title = "Thread Theory" }: Props) {
  return (
    <div className="page-grid w-full h-full bg-background">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav className="grid grid-cols-12 items-center w-full h-12 bg-white border-b">
        <div className="flex col-start-1 col-end-7 px-5">
          <input
            type="text"
            className="w-full bg-gray-100 border px-4 py-1 rounded-full focus:bg-white focus:outline-none"
          />
          <button
            type="button"
            className="bg-accent text-white px-2 ml-2 rounded-full hover:bg-blue-600 focus:bg-blue-700"
          >
            <Search className="w-5 h-5 fill-current" />
          </button>
        </div>
      </nav>
      {children}
      <footer></footer>
    </div>
  );
}

export default Layout;
