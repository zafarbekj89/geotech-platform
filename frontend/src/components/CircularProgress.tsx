interface CircularProgressProps {
  progress: number
  label: string
  size?: 'small' | 'medium' | 'large'
}

const CircularProgress = ({ progress, label, size = 'medium' }: CircularProgressProps) => {
  const sizes = {
    small: 'w-20 h-20',
    medium: 'w-32 h-32',
    large: 'w-48 h-48',
  }

  const textSizes = {
    small: 'text-lg',
    medium: 'text-3xl',
    large: 'text-5xl',
  }

  const circumference = 2 * Math.PI * 45
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizes[size]}`}>
        <svg className="transform -rotate-90" width="100%" height="100%" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="45"
            stroke="#E5E7EB"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r="45"
            stroke="#1E3A8A"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={`font-bold ${textSizes[size]} text-brand-primary`}>{progress}%</div>
            <div className="text-xs text-gray-600">{label}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CircularProgress
