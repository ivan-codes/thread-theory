import type { NextPage } from "next";
import Login from "components/Login";
import Profile from "components/Profile";
import { useState, useEffect } from "react";
import { supabase } from "libs/supabaseClient";
import { Session } from "@supabase/supabase-js";

const Home: NextPage = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Login />
      ) : (
        <Profile key={session.user!.id} session={session} />
      )}
    </div>
  );
};

export default Home;
