import type { FieldErrors, FieldValues } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { FormControl, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

import DangerIcon from '@/assets/icons/DangerSquare.svg'
interface InputProps<FormData extends FieldValues>
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  namespace: keyof FormData;
  errors: FieldErrors<FormData>;
}

interface TextAreaProps<FormData extends FieldValues>
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  className?: string;
  namespace: keyof FormData;
  errors: FieldErrors<FormData>;
}

export const InputWithError = <FormData extends FieldValues>({
  className,
  namespace,
  errors,
  ...rest
}: InputProps<FormData>) => {
  const error = errors?.[namespace]?.message as string | undefined;

  return (
    <div className="relative">
      <FormControl>
        <Input
          className={`border bg-transparent ring-0 ring-transparent focus-visible:ring-transparent
            ${error
              ? "border-danger-500 focus-visible:border-danger-800"
              : "border-neutral-400 focus-visible:border-neutral-800"
            } ${className}`}
          {...rest}
        />
      </FormControl>
      <FormMessage>
        {error && error}
      </FormMessage>
      {error && (
        <span className="absolute right-[6px] top-[6px] w-[24px] h-[24px]">
          <DangerIcon />
        </span>
      )}
    </div>
  );
}

export const TextAreaWithError = <FormData extends FieldValues>({
  className,
  namespace,
  errors,
  ...rest
}: TextAreaProps<FormData>) => {
  const error = errors?.[namespace]?.message as string | undefined;

  return (
    <div className="relative">
      <FormControl>
        <Textarea
          className={`text-[12px] font-[600] text-neutral-800 rounded-[7px] p-[8px] resize-none min-h-[15vh] focus-visible:border-neutral-800 bg-transparent ring-0 ring-transparent focus-visible:ring-transparent
            ${error
              ? "border-danger-500 focus-visible:border-danger-800"
              : "border-neutral-400 focus-visible:border-neutral-800"
            } ${className}`}
          {...rest}
        />
      </FormControl>
      <FormMessage>
        {error && error}
      </FormMessage>
      {error && (
        <span className="absolute right-[6px] top-[6px] w-[24px] h-[24px]">
          <DangerIcon />
        </span>
      )}
    </div>
  );
}