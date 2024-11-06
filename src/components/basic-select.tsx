import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';
import { cn } from '@/lib/utils';

interface Option {
  value: string;
  label: string;
}

interface BasicSelectProps {
  options: Option[];
  onSelectChange?: (value: string) => void;
  defaultValue?: string | undefined;
  placeholder?: string;
  disabled?: boolean;

  className?: string;
}

export default function BasicSelect({
  options,
  defaultValue,
  onSelectChange,
  placeholder = 'Select one...',
  disabled,

  className,
}: BasicSelectProps) {
  return (
    <Select
      onValueChange={onSelectChange}
      defaultValue={defaultValue}
      disabled={disabled}
    >
      <SelectTrigger className={cn('', className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        {options.map(option => (
          <SelectItem
            value={option.value}
            key={option.value}
            className="capitalize"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
