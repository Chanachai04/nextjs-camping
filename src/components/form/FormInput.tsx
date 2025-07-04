import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type formInputProps = {
  name: string;
  type: string;
  label: string;
  defaultValue?: string;
  placeholder?: string;
};

const FormInput = (props: formInputProps) => {
  const { name, type, label, defaultValue, placeholder } = props;
  return (
    <div className="mb-2">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} defaultValue={defaultValue} />
    </div>
  );
};
export default FormInput;
