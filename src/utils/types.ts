export type actionFunction = (prevState: any, formData: FormData) => Promise<{ message: string }>;
export type textAreaProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};
