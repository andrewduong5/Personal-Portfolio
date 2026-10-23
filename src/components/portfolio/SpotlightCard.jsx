import { cn } from "@/lib/utils";

export default function SpotlightCard({ className, children, ...props }) {
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div onMouseMove={onMove} className={cn("spotlight-card", className)} {...props}>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}