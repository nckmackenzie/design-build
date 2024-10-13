interface SectionHeaderProps {
  header: string;
  descripton: string;
  id: string;
}

export default function SectionHeader({
  descripton,
  header,
  id,
}: SectionHeaderProps) {
  return (
    <div className="space-y-2 text-center">
      <h3
        className="font-mono text-xl md:text-2xl font-semibold text-secondary"
        id={id}
      >
        {header}
      </h3>
      <p className="text-base max-w-prose mx-auto">{descripton}</p>
    </div>
  );
}
