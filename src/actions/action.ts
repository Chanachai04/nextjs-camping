"use server";
import { profileSchema, validateWithZod } from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) throw new Error("You must be logged in to create a profile!!!");
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");
  return user;
};

const renderError = (err: unknown): { message: string } => {
  return { message: err instanceof Error ? err.message : "An error server !!!" };
};

export const createProfileAction = async (prevState: any, formData: FormData) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please login to create a profile");
    const rawData = Object.fromEntries(formData);
    const validateField = validateWithZod(profileSchema, rawData);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validateField,
      },
    });
    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (err) {
    return renderError(err);
  }
  redirect("/");
};

export const createLandmarkAction = async (prevState: any, formData: FormData): Promise<{ message: string }> => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please login to create a profile");
    const rawData = Object.fromEntries(formData);
    // const validateField = validateWithZod(profileSchema, rawData);
    console.log("rawData", rawData);
    return { message: "Landmark created successfully" };
  } catch (err) {
    return renderError(err);
  }
  // redirect("/");
};
