import React, { useMemo, useState } from "react";
import Eye from "svgs/eye-fill.svg";
import Heart from "svgs/heart-fill.svg";
import Link from "next/link";
import { useRouter } from "next/router";

function Post() {
  const router = useRouter();

  const [user, setUser] = useState<any>(() => {
    fetch("https://needdummy.netlify.app/api/user").then(async (res) =>
      setUser(await res.json())
    );
    return null;
  });

  const [text, setText] = useState<string>(() => {
    fetch(
      "https://needdummy.netlify.app/api/text?style=lorem&paragraphs=1&length=short"
    ).then(async (res) =>
      setText((await res.text()).substring(0, Math.random() * 200))
    );
    return "";
  });

  const fullname = useMemo(
    () => `${user?.name.first} ${user?.name.last}`,
    [user]
  );

  return (
    <Link href={{ query: { ...router.query, thread: "thread" } }}>
      <a>
        <article className="post-grid bg-white px-3 py-4 border-b cursor-pointer hover:bg-gray-50">
          <Link href="handle">
            <a>
              <img
                src={user?.picture.thumbnail}
                className="w-10 h-10 rounded-full"
                alt="profile pic"
              />
            </a>
          </Link>
          <div>
            <div className="flex items-center">
              <Link href="handle">
                <a>
                  <p className="font-semibold hover:underline">{fullname}</p>
                </a>
              </Link>
              <p className="text-sm text-gray-400 ml-2">Ex-google engineer</p>
            </div>
            <p>{text}</p>
            <div className="flex justify-end text-gray-400 text-sm mt-2">
              <Heart className="w-5 h-5 fill-current" />
              <p className="ml-2">256</p>
              <Eye className="w-5 h-5 fill-current ml-6" />
              <p className="ml-2">12.3k</p>
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
}

export default Post;
