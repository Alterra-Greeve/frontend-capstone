import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FilterInputFieldProps {
  label: string;
  placeholder: string;
}

export const FilterInputField: React.FC<FilterInputFieldProps> = ({ label, placeholder, ...field }) => {
  return (
    <FormItem className="border border-neutral-200 p-3 rounded-lg">
      <FormLabel className="text-base text-neutral-900 font-extrabold leading-5">
        {label}
      </FormLabel>
      <FormControl>
        <Input
          className="p-2 rounded-[7px] border-[0.5px] border-neutral-300 focus:border-neutral-800 outline-none placeholder:text-neutral-300 focus-visible:ring-transparent transition-all duration-300"
          placeholder={placeholder}
          {...field}
        />
      </FormControl>
    </FormItem>
  )
};

interface FilterCheckboxProps<TFieldValues extends FieldValues> {
  id: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<TFieldValues, any>;
}

export const FilterInputCheckbox = <TFieldValues extends FieldValues>({
  id, label, field
}: FilterCheckboxProps<TFieldValues>) => {

  const handleChange = (checked: boolean) => {
    field.onChange(checked ? id : '');
  };

  return (
    <FormItem className="flex gap-3 items-center bg-neutral-100 p-2 rounded-lg text-neutral-900">
      <FormControl>
        <Checkbox
          checked={field.value === id}
          onCheckedChange={handleChange}
          className="border-2 border-primary-500"
        />
      </FormControl>
      <FormLabel className="font-normal">{label}</FormLabel>
    </FormItem>
  )
}