import React from "react";
import Eye from "svgs/eye.svg";
import Heart from "svgs/heart.svg";

function Post() {
  return (
    <article className="bg-white border p-4 mb-4 rounded cursor-pointer hover:bg-gray-50">
      <div className="grid grid-cols-2 text-sm mb-3">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
          <p className="font-semibold ml-2">Ivan Codes</p>
        </div>
        <div className="flex justify-end">
          <Heart className="w-5 h-5 fill-current text-gray-500" />
          <p className="text-gray-500 ml-2">256</p>
          <Eye className="w-5 h-5 fill-current text-gray-500 ml-5" />
          <p className="text-gray-500 ml-2">12.3k</p>
        </div>
      </div>
      <p>
        17 Killer Websites for Web Developer <br />
        <br />
        99.8% dont know all of them.
      </p>
    </article>
  );
}

export default Post;
