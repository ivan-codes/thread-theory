import React, { useMemo, useState } from "react";
import Instagram from "svgs/logos/instagram.svg";
import Medium from "svgs/logos/medium.svg";
import Twitter from "svgs/logos/twitter.svg";

function ProfileHeader() {
  const [user, setUser] = useState<any>(() => {
    fetch("https://needdummy.netlify.app/api/user").then(async (res) =>
      setUser(await res.json())
    );
    return null;
  });

  const [banner, setBanner] = useState<any>(() => {
    fetch("https://needdummy.netlify.app/api/image?width=400&height=400").then(
      async (res) => setBanner(await res.text())
    );
    return "";
  });

  const fullname = useMemo(
    () => `${user?.name.first} ${user?.name.last}`,
    [user]
  );

  const handle = useMemo(
    () =>
      `${user?.name.first} ${user?.name.last}`.replace(" ", "_").toLowerCase(),
    [user]
  );

  return (
    <div className="border-b">
      <div
        className="w-full aspect-w-16 aspect-h-5 bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className="p-3">
        <div className="flex">
          <img
            src={user?.picture.thumbnail}
            className="w-28 h-28 border-4 border-white rounded-full -mt-16 z-10"
            alt="profile pic"
          />
          <button
            type="button"
            className="bg-black text-white font-semibold px-4 py-2 ml-auto mb-auto rounded-full"
          >
            Follow
          </button>
        </div>
        <div className="flex items-center mt-1">
          <p className="text-xl font-semibold">{fullname}</p>
          <p className="text-gray-400 ml-2">Ex-google engineer</p>
        </div>
        <p className="text-gray-400">@{handle}</p>
        <p className="my-3">
          This is my bio that tells you why you should follow me.
        </p>
        <div className="flex mb-3">
          <p className="text-gray-400 font-normal">
            <span className="text-font-color font-semibold">120</span> Followers
          </p>
          <p className="text-gray-400 font-normal ml-4">
            <span className="text-font-color font-semibold">45</span> Following
          </p>
        </div>
        <div className="grid grid-flow-col gap-4 w-max mt-1">
          <Twitter className="w-6 h-6 fill-current text-gray-400 cursor-pointer hover:text-font-color" />
          <Instagram className="w-6 h-6 fill-current text-gray-400 cursor-pointer hover:text-font-color" />
          <Medium className="w-6 h-6 fill-current text-gray-400 cursor-pointer hover:text-font-color" />
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
