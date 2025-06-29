"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { RotateCw } from "lucide-react";

type btnSize = "default" | "sm" | "lg" | "icon";

type SubmitButtonProps = {
  className?: string;
  size?: btnSize;
  text?: string;
};

export const SubmitButton = (props: SubmitButtonProps) => {
  const { className, size, text } = props;
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className={`${className} capitalize`} size={size}>
      {pending ? (
        <>
          <RotateCw className="animate-spin" />
          <span className="ml-2">Please wait....</span>
        </>
      ) : (
        <p>{text}</p>
      )}
    </Button>
  );
};
