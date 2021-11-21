import Link from "next/link";
import React from "react";
import Instagram from "svgs/logos/instagram.svg";
import Medium from "svgs/logos/medium.svg";
import Twitter from "svgs/logos/twitter.svg";

type Props = {
  user: any;
  fullname: string;
};

function ThreadFooter({ user, fullname }: Props) {
  return (
    <>
      <div className="flex flex-col items-center">
        <Link href="handle">
          <a>
            <img
              src={user?.picture.thumbnail}
              className="w-10 h-10 rounded-full"
              alt="profile pic"
            />
          </a>
        </Link>
      </div>
      <article className="px-3">
        <div className="flex">
          <Link href="handle">
            <a>
              <p className="font-semibold hover:underline">{fullname}</p>
            </a>
          </Link>
          <p className="text-accent font-bold ml-2 cursor-pointer hover:underline">
            Follow
          </p>
        </div>
        <p>
          Maecenas condimentum ex a leo ornare ultrices. Vestibulum viverra
          molestie orci, nec tempor turpis condimentum sit.
        </p>
        <div className="grid grid-flow-col gap-4 w-max mt-1">
          <Twitter className="w-6 h-6 fill-current text-gray-400 cursor-pointer hover:text-font-color" />
          <Instagram className="w-6 h-6 fill-current text-gray-400 cursor-pointer hover:text-font-color" />
          <Medium className="w-6 h-6 fill-current text-gray-400 cursor-pointer hover:text-font-color" />
        </div>
      </article>
    </>
  );
}

export default ThreadFooter;
