import React from "react";

type Props = {
  user: any;
};

function ThreadPost({ user }: Props) {
  // TODO: Redesign css grid?
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={user?.picture.thumbnail}
          className="w-10 h-10 rounded-full"
          alt="profile pic"
        />
        <div className="flex-grow border-l-2 border-gray-200 my-2"></div>
      </div>
      <article className="px-3 pt-0 pb-8">
        <p>
          {/* 1. Nullam
          <br />
          <br />
          Et leo sit amet enim consectetur venenatis in in urna. Proin ultrices
          nibh vitae risus mattis tempor.
          <br />
          <br />
          Nunc maximus, ex sit amet ultrices feugiat.
          <br />
          <br />
          https://source.com */}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
      </article>
    </>
  );
}

export default ThreadPost;
