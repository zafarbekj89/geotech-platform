import { CheckIcon, ClockIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface Activity {
  id: number
  type: 'completed' | 'in-progress' | 'comment' | 'assigned'
  title: string
  description: string
  timestamp: string
  user?: string
}

interface ActivityFeedProps {
  activities: Activity[]
}

const ActivityFeed = ({ activities }: ActivityFeedProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'completed':
        return <CheckIcon className="w-5 h-5 text-green-500" />
      case 'in-progress':
        return <ClockIcon className="w-5 h-5 text-yellow-500" />
      case 'comment':
        return <div className="w-5 h-5 bg-blue-500 rounded-full" />
      default:
        return <div className="w-5 h-5 bg-gray-500 rounded-full" />
    }
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex gap-4 pb-4 border-b border-gray-200">
          <div className="flex-shrink-0 mt-1">{getIcon(activity.type)}</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-gray-900">{activity.title}</p>
            <p className="text-sm text-gray-600">{activity.description}</p>
            {activity.user && (
              <p className="text-xs text-gray-500 mt-1">By {activity.user}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ActivityFeed
