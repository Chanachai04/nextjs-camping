"use server";
import { profileSchema, validateWithZod } from "@/utils/schemas";

const renderError = (err: unknown): { message: string } => {
  return { message: err instanceof Error ? err.message : "An error server !!!" };
};

export const createProfileAction = async (prevState: any, formData: FormData) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validateField = validateWithZod(profileSchema, rawData);
    console.log(validateField);
    return { message: "Create Profile Success!!!" };
  } catch (err) {
    console.log(err);
    return renderError(err);
  }
};
