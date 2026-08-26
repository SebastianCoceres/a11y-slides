import { cn } from '@/lib/utils';

const VARIANT_STYLES = {
  info: { box: 'border-info/30 bg-info/10', heading: 'text-info' },
  warning: { box: 'border-warning/30 bg-warning/10', heading: 'text-warning' },
};

export default function InfoBlock({ title, icon: Icon, variant = 'info', className, children }) {
  const styles = VARIANT_STYLES[variant];
  return (
    <section className={cn('rounded-xl border-2 p-6', styles.box, className)}>
      <h2 className={cn('mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide', styles.heading)}>
        {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
        {title}
      </h2>
      {children}
    </section>
  );
}
