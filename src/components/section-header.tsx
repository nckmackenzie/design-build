import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  header: string;
  descripton: string;
  id: string;
  descriptionClassName?: string;
}

export default function SectionHeader({
  descripton,
  header,
  id,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div className="space-y-2 text-center">
      <h3
        className="font-mono text-xl md:text-2xl font-semibold text-secondary"
        id={id}
      >
        {header}
      </h3>
      <p className={cn('text-base max-w-prose mx-auto', descriptionClassName)}>
        {descripton}
      </p>
    </div>
  );
}
