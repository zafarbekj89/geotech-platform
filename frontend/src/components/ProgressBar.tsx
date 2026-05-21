interface ProgressBarProps {
  label: string
  progress: number
  status: 'completed' | 'in-progress' | 'todo' | 'on-hold'
}

const ProgressBar = ({ label, progress, status }: ProgressBarProps) => {
  const statusColors = {
    'completed': 'bg-green-500',
    'in-progress': 'bg-yellow-500',
    'todo': 'bg-red-500',
    'on-hold': 'bg-gray-500',
  }

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-bold">{label}</span>
        <span className="text-sm font-bold text-brand-primary">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all duration-500 ${statusColors[status]}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
