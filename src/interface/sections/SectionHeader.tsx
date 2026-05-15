export function SectionHead({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[10.5px] tracking-[0.36em] uppercase text-stone-400 dark:text-stone-600 font-normal">
        {label}
      </span>
      {sub && (
        <span className="text-[10.5px] text-stone-300 dark:text-stone-700 font-light">{sub}</span>
      )}
      <div className="flex-1 h-px bg-stone-200 dark:bg-stone-800/80" />
    </div>
  );
}