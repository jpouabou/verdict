"use client";

interface ScoreGaugeProps {
  score: number;
  size?: number;
  className?: string;
}

export function ScoreGauge({ score, size = 320, className = "" }: ScoreGaugeProps) {
  const strokeWidth = 8;
  const radius = size / 2 - 40;
  const circumference = Math.PI * radius;
  const progress = (score / 100) * circumference;

  return (
    <div
      className={`relative flex flex-col items-center ${className}`}
      style={{ width: size, height: size / 2 + 60 }}
    >
      <svg
        viewBox={`0 0 ${size} ${size / 2 + 60}`}
        className="w-full h-full"
      >
        {/* Background arc - semicircle */}
        <path
          d={`M 40 ${size / 2} A ${radius} ${radius} 0 0 1 ${size - 40} ${size / 2}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className="text-white/15"
        />
        {/* Progress arc */}
        <path
          d={`M 40 ${size / 2} A ${radius} ${radius} 0 0 1 ${size - 40} ${size / 2}`}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="gaugeGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
        <span className="font-display text-6xl sm:text-7xl font-normal tabular-nums text-white">
          {score}
        </span>
        <span className="block text-xs font-medium text-white/50 uppercase tracking-widest mt-1">
          Verdict Score
        </span>
      </div>
    </div>
  );
}
