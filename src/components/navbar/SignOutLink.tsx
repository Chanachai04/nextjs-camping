"use client";

import { useClerk } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const SignOutLink = () => {
  const { signOut } = useClerk();

  const handleLogout = async () => {
    signOut();
    toast("Logout successful");
    redirect("/");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default SignOutLink;
