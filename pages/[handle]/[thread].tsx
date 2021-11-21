import Layout from "components/Layout";
import Thread from "components/Thread";
import React from "react";

function ThreadPage() {
  return (
    <Layout title="Thread">
      <main className="w-full flex justify-center overflow-auto">
        <Thread />
      </main>
    </Layout>
  );
}

export default ThreadPage;
