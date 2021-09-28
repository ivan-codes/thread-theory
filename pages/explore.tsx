import Layout from "components/Layout";
import Post from "components/Post";
import React, { useState } from "react";
import Eye from "svgs/eye.svg";
import Heart from "svgs/heart.svg";

function Explore() {
  const [showThread, setShowThread] = useState<boolean>(false);

  return (
    <Layout title="Explore | Thread Theory">
      <main className="explore-grid overflow-hidden pt-4">
        <section className="flex flex-col items-center overflow-auto mr-1">
          <div className="w-full max-w-lg">
            <div className="flex items-end mb-4">
              <h1 className="mr-auto">
                <span className="text-xs text-gray-400">RESULTS FOR</span>
                <br />
                <span className="text-lg font-semibold">#Web developer</span>
              </h1>
              <div className="grid grid-flow-col gap-5 font-semibold">
                <div className="text-font-color">Top</div>
                <div className="text-gray-400 text-center">Most Viewed</div>
                <div className="text-gray-400">Latest</div>
              </div>
            </div>
            <button className="w-full" onClick={() => setShowThread(true)}>
              <Post />
              <Post />
              <Post />
              <Post />
            </button>
          </div>
        </section>
        {showThread && (
          <section className="h-full bg-white border-l border-t overflow-auto rounded">
            <article className="w-full max-w-lg py-4 ml-16">
              <div className="flex items-center">
                <div
                  className="w-6 h-6 bg-gray-400 rounded-full"
                  onClick={() => setShowThread(false)}
                ></div>
                <p className="font-medium ml-2">Ivan Codes</p>
              </div>
              <p className="text-2xl mt-4 mb-1">
                17 Killer Websites for Web Developer <br />
                <br />
                99.8% dont know all of them.
              </p>
            </article>
            <hr />
            <div className="grid grid-flow-col w-full max-w-lg py-3 ml-16">
              <div className="flex items-center">
                <Heart className="w-6 h-6 fill-current text-gray-500" />
                <p className="text-gray-500 ml-3">256</p>
              </div>
              <div className="flex items-center">
                <Eye className="w-6 h-6 fill-current text-gray-500" />
                <p className="text-gray-500 ml-3">12.3k</p>
              </div>
            </div>
            <hr />
            <div className="w-full h-full">
              <div className="thread-grid pl-3">
                <div className="border-l-2 border-font-color justify-self-end mt-6">
                  <div className="w-5 border-t-2 border-font-color"></div>
                </div>
                <article className="max-w-lg p-3">
                  <p>
                    1. Nullam
                    <br />
                    <br />
                    Et leo sit amet enim consectetur venenatis in in urna. Proin
                    ultrices nibh vitae risus mattis tempor.
                    <br />
                    <br />
                    Nunc maximus, ex sit amet ultrices feugiat.
                    <br />
                    <br />
                    https://source.com
                  </p>
                </article>
                <div className="border-l-2 border-font-color justify-self-end">
                  <div className="w-5 border-t-2 border-font-color mt-6"></div>
                </div>
                <article className="max-w-lg p-3">
                  <p>
                    2. Nullam
                    <br />
                    <br />
                    Et leo sit amet enim consectetur venenatis in in urna. Proin
                    ultrices nibh vitae risus mattis tempor.
                    <br />
                    <br />
                    Nunc maximus, ex sit amet ultrices feugiat.
                    <br />
                    <br />
                    https://source.com
                  </p>
                </article>
                <div className="border-l-2 border-font-color justify-self-end">
                  <div className="w-5 border-t-2 border-font-color mt-6"></div>
                </div>
                <article className="max-w-lg p-3">
                  <p>
                    3. Nullam
                    <br />
                    <br />
                    Et leo sit amet enim consectetur venenatis in in urna. Proin
                    ultrices nibh vitae risus mattis tempor.
                    <br />
                    <br />
                    Nunc maximus, ex sit amet ultrices feugiat.
                    <br />
                    <br />
                    https://source.com
                  </p>
                </article>
                <div className="mt-3">
                  <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                </div>
                <article className="max-w-lg p-3">
                  <div className="flex">
                    <p className="font-semibold">Ivan Codes</p>
                    <p className="text-accent font-bold ml-4 cursor-pointer hover:underline">
                      Follow
                    </p>
                  </div>
                  <p>
                    Maecenas condimentum ex a leo ornare ultrices. Vestibulum
                    viverra molestie orci, nec tempor turpis condimentum sit.
                  </p>
                </article>
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Explore;
