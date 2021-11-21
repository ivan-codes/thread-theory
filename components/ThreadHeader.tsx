import Link from "next/link";
import React from "react";
import Eye from "svgs/eye-fill.svg";
import Heart from "svgs/heart-fill.svg";

type Props = {
  user: any;
  fullname: string;
};

function ThreadHeader({ user, fullname }: Props) {
  return (
    <>
      <div className="flex flex-col items-center">
        <Link href={{ pathname: "/handle" }}>
          <a>
            <img
              src={user?.picture.thumbnail}
              className="w-10 h-10 rounded-full"
              alt="profile pic"
            />
          </a>
        </Link>
        {/* <div className="flex-grow border-l-2 border-gray-200 my-2"></div> */}
      </div>
      <div className="px-3 pb-6">
        <div className="flex items-center">
          <Link href="handle">
            <a>
              <p className="font-semibold hover:underline">{fullname}</p>
            </a>
          </Link>
          <p className="text-sm text-gray-400 ml-2">Ex-google engineer</p>
        </div>
        <p className="text-xl leading-8">
          17 Killer Websites for Web Developer <br />
          {/* <br /> */}
          99.8% dont know all of them.
        </p>
        <div className="grid grid-flow-col w-full text-gray-400 mt-4">
          <div className="flex items-center">
            <Heart className="w-6 h-6 fill-current" />
            <p className="ml-3">256</p>
          </div>
          <div className="flex items-center">
            <Eye className="w-6 h-6 fill-current" />
            <p className="ml-3">12.3k</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThreadHeader;
