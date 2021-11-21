import React, { useMemo, useState } from "react";

import ThreadFooter from "./ThreadFooter";
import ThreadHeader from "./ThreadHeader";
import ThreadPost from "./ThreadPost";

function Thread() {
  const [user, setUser] = useState<any>(() => {
    fetch("https://needdummy.netlify.app/api/user").then(async (res) =>
      setUser(await res.json())
    );
    return null;
  });

  const fullname = useMemo(
    () => `${user?.name.first} ${user?.name.last}`,
    [user]
  );

  return (
    <div className="thread-grid w-full max-w-xl p-3 lg:p-5">
      <ThreadHeader user={user} fullname={fullname} />
      <ThreadPost user={user} />
      <ThreadPost user={user} />
      <ThreadPost user={user} />
      <ThreadFooter user={user} fullname={fullname} />
    </div>
  );
}

export default Thread;
