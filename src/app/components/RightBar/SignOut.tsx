"use client";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
export default function SignOut() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const logoutUser = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <div>
      <button onClick={logoutUser}>Sign Out</button>
    </div>
  );
}
