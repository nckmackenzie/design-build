interface SectionHeaderProps {
  header: string;
  descripton: string;
}

export default function SectionHeader({
  descripton,
  header,
}: SectionHeaderProps) {
  return (
    <div className="space-y-2 text-center">
      <h3 className="font-mono text-xl md:text-2xl font-semibold text-secondary">
        {header}
      </h3>
      <p className="text-base max-w-prose mx-auto">{descripton}</p>
    </div>
  );
}
