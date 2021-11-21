import Post from "components/Post";
import ProfileHeader from "components/ProfileHeader";
import ThreadLayout from "components/ThreadLayout";
import { useRouter } from "next/router";
import React from "react";

function ProfilePage() {
  const router = useRouter();
  const { thread } = router.query;

  return (
    <ThreadLayout title="Username" thread={thread as string | undefined}>
      <ProfileHeader />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </ThreadLayout>
  );
}

export default ProfilePage;
