import { useState } from "react";
import { FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface InputWithIconProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  toggleShowPassword?: () => void;
}

export default function InputWithIcon({
  leftIcon, rightIcon, toggleShowPassword, className, ...rest
}: InputWithIconProps) {

  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <FormControl>
      <div className="relative">
        <div className={`absolute inset-y-0 left-2 top-0 flex items-center transition-colors ${isFocused ? 'text-black' : 'text-neutral-500'}`}>
          {leftIcon}
        </div>

        <Input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn("pl-10 focus-visible:ring-transparent focus:border-neutral-900 transition-colors duration-300", className)}
          {...rest}
        />

        {rightIcon && (
          <div
            className={`absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer transition-colors ${isFocused ? 'text-black' : 'text-neutral-500'}`}
            onClick={toggleShowPassword}
          >
            {rightIcon}
          </div>
        )}
      </div>
    </FormControl>
  )
}