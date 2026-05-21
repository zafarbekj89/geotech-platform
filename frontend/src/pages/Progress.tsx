import { useMemo } from 'react'
import ProgressBar from '../components/ProgressBar'
import CircularProgress from '../components/CircularProgress'
import ActivityFeed from '../components/ActivityFeed'

const Progress = () => {
  const projectData = {
    overall: 72,
    phases: [
      { name: 'Frontend Development', progress: 80, status: 'in-progress' as const },
      { name: 'Backend Development', progress: 50, status: 'in-progress' as const },
      { name: 'Database Setup', progress: 70, status: 'in-progress' as const },
      { name: 'Integration', progress: 40, status: 'in-progress' as const },
      { name: 'Deployment', progress: 10, status: 'todo' as const },
    ],
    tasks: [
      { category: 'Frontend', completed: 12, total: 15 },
      { category: 'Backend', completed: 8, total: 16 },
      { category: 'Database', completed: 7, total: 10 },
      { category: 'Deployment', completed: 1, total: 10 },
    ],
  }

  const activities = [
    {
      id: 1,
      type: 'completed' as const,
      title: 'Progress Dashboard Created',
      description: 'Real-time development tracking system',
      timestamp: '2 hours ago',
      user: 'Zafarbek',
    },
    {
      id: 2,
      type: 'in-progress' as const,
      title: 'Live Preview System',
      description: 'Code editor with real-time preview',
      timestamp: '1 hour ago',
      user: 'Zafarbek',
    },
    {
      id: 3,
      type: 'in-progress' as const,
      title: 'Payment Integration',
      description: 'Stripe, Click, and Payme setup',
      timestamp: '30 minutes ago',
      user: 'Backend Team',
    },
    {
      id: 4,
      type: 'comment' as const,
      title: 'Frontend pages completed',
      description: 'All main pages ready for testing',
      timestamp: 'Today',
      user: 'QA Team',
    },
    {
      id: 5,
      type: 'assigned' as const,
      title: 'Admin panel development',
      description: 'Product management system',
      timestamp: 'Yesterday',
      user: 'Zafarbek',
    },
  ]

  const statistics = useMemo(() => {
    return {
      totalTasks: projectData.tasks.reduce((sum, task) => sum + task.total, 0),
      completedTasks: projectData.tasks.reduce((sum, task) => sum + task.completed, 0),
      totalFiles: 45,
      totalComponents: 25,
      linesOfCode: 12500,
      bugs: 0,
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Development Progress</h1>
          <p className="text-gray-600">Real-time tracking of GEO TECH platform development</p>
        </div>

        {/* Overall Progress */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Overall Project Progress</h2>
              <div className="w-full bg-gray-200 rounded-full h-4 max-w-md">
                <div
                  className="h-4 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-500"
                  style={{ width: `${projectData.overall}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {projectData.overall}% Complete • Estimated 4 weeks remaining
              </p>
            </div>
            <CircularProgress progress={projectData.overall} label="Overall" size="large" />
          </div>
        </div>

        {/* Phase Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Phases */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Development Phases</h2>
            {projectData.phases.map((phase, index) => (
              <ProgressBar
                key={index}
                label={phase.name}
                progress={phase.progress}
                status={phase.status}
              />
            ))}
          </div>

          {/* Statistics */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">Tasks Completed</p>
                <p className="text-3xl font-bold text-brand-primary">
                  {statistics.completedTasks}/{statistics.totalTasks}
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600">Components</p>
                <p className="text-3xl font-bold text-brand-secondary">{statistics.totalComponents}</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-600">Lines of Code</p>
                <p className="text-3xl font-bold text-purple-600">{statistics.linesOfCode.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-gray-600">Open Bugs</p>
                <p className="text-3xl font-bold text-red-600">{statistics.bugs}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Task Breakdown */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Task Breakdown by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projectData.tasks.map((task, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-bold mb-3">{task.category}</h3>
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span className="font-bold">{Math.round((task.completed / task.total) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-brand-primary transition-all"
                      style={{ width: `${(task.completed / task.total) * 100}%` }}
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  {task.completed} of {task.total} tasks
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <ActivityFeed activities={activities} />
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Timeline</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="w-0.5 h-12 bg-gray-300"></div>
                </div>
                <div>
                  <p className="font-bold text-sm">Phase 1: Frontend</p>
                  <p className="text-xs text-gray-600">Started: May 1</p>
                  <p className="text-xs text-gray-600">Expected: May 25</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div className="w-0.5 h-12 bg-gray-300"></div>
                </div>
                <div>
                  <p className="font-bold text-sm">Phase 2: Backend</p>
                  <p className="text-xs text-gray-600">Started: May 15</p>
                  <p className="text-xs text-gray-600">Expected: June 10</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div className="w-0.5 h-12 bg-gray-300"></div>
                </div>
                <div>
                  <p className="font-bold text-sm">Phase 3: Integration</p>
                  <p className="text-xs text-gray-600">Scheduled: June 1</p>
                  <p className="text-xs text-gray-600">Expected: June 20</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                </div>
                <div>
                  <p className="font-bold text-sm">Phase 4: Deployment</p>
                  <p className="text-xs text-gray-600">Scheduled: June 25</p>
                  <p className="text-xs text-gray-600">Expected: June 30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progress
