interface SmileArcProps {
  className?: string;
  strokeClass?: string;
  strokeWidth?: number;
  animated?: boolean;
}

export function SmileArc({
  className = "w-full",
  strokeClass = "stroke-primary",
  strokeWidth = 5,
  animated = false,
}: SmileArcProps) {
  return (
    <svg
      viewBox="0 0 100 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 6 Q50 34 96 6"
        fill="none"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        className={`${strokeClass} ${animated ? 'animate-draw-arc' : ''}`}
      />
    </svg>
  );
}
