import clsx from "clsx";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import Close from "svgs/close.svg";
import ExitFullscreen from "svgs/exit-fullscreen.svg";
import Fullscreen from "svgs/fullscreen.svg";

import Layout from "./Layout";
import Thread from "./Thread";

type Props = {
  children: ReactNode;
  title: string;
  thread: string | undefined;
};

function ThreadLayout({ children, thread, title = "Thread Theory" }: Props) {
  const router = useRouter();

  const [showThread, setShowThread] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  useEffect(() => {
    if (thread !== undefined) setShowThread(true);
  }, [thread]);

  const closeThread = () => {
    setShowThread(false);
    const { thread, ...rest } = router.query;
    router.query = rest;
    router.push(router);
  };

  return (
    <Layout title={title}>
      <main className="w-full h-full overflow-auto lg:explore-grid">
        <section
          className={clsx(
            "col-start-2 flex flex-col",
            showThread
              ? "hidden lg:sticky lg:top-0 lg:flex"
              : "items-center col-span-2",
            showThread && fullscreen && "hidden lg:hidden"
          )}
        >
          <div
            className={clsx(
              "max-w-xl min-h-full border-l border-r overscroll-none",
              showThread && "lg:overflow-auto"
            )}
          >
            {children}
          </div>
        </section>
        {showThread && (
          <section
            className={clsx(
              "col-start-3 flex flex-col",
              showThread && "items-center lg:items-start",
              fullscreen && "lg:col-start-2 lg:col-span-2 lg:items-center"
            )}
          >
            <div className="w-full max-w-xl flex items-center p-3 pb-0 lg:p-5 lg:pb-0">
              <Close
                className="w-6 h-6 fill-current text-gray-400 cursor-pointer hover:text-font-color"
                onClick={closeThread}
              />
              <div className="hidden lg:block">
                {fullscreen ? (
                  <ExitFullscreen
                    className="w-5 h-5 fill-current text-gray-400 ml-5 cursor-pointer hover:text-font-color"
                    onClick={() => setFullscreen(false)}
                  />
                ) : (
                  <Fullscreen
                    className="w-5 h-5 fill-current text-gray-400 ml-5 cursor-pointer hover:text-font-color"
                    onClick={() => setFullscreen(true)}
                  />
                )}
              </div>
            </div>
            <Thread />
          </section>
        )}
      </main>
    </Layout>
  );
}

export default ThreadLayout;
