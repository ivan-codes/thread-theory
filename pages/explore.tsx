import Post from "components/Post";
import Search from "components/Search";
import ThreadLayout from "components/ThreadLayout";
import { useRouter } from "next/router";
import React from "react";

function ExplorePage() {
  const router = useRouter();
  const { search, thread } = router.query;

  return (
    <ThreadLayout
      title="Explore | Thread Theory"
      thread={thread as string | undefined}
    >
      <Search fillSearch={search as string | undefined} />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </ThreadLayout>
  );
}

export default ExplorePage;
