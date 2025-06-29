import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categories } from "@/utils/category";
const CategoryInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "category";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {name}
      </Label>
      <Select defaultValue={defaultValue || categories[0].label} name={name} required>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {categories.map((item) => (
            <SelectItem key={item.label} value={item.label}>
              <span className="capitalize flex items-center gap-2">
                <item.icon />
                {item.label}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
export default CategoryInput;
