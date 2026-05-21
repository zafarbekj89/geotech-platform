import { useState, useRef, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const Studio = () => {
  const [code, setCode] = useState(`import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">GEO TECH</h1>
        <p className="text-gray-600 mb-6">Professional Geotechnical Platform</p>
        <button 
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Clicked {count} times
        </button>
      </div>
    </div>
  )
}`)
  
  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')
  const [zoom, setZoom] = useState(100)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const editorRef = useRef<HTMLTextAreaElement>(null)
  const [dividerPos, setDividerPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const deviceWidths = {
    mobile: '375px',
    tablet: '768px',
    desktop: '100%',
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      
      const container = document.getElementById('editor-container')
      if (!container) return
      
      const rect = container.getBoundingClientRect()
      const newPos = ((e.clientX - rect.left) / rect.width) * 100
      
      if (newPos > 30 && newPos < 70) {
        setDividerPos(newPos)
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging])

  useEffect(() => {
    if (iframeRef.current) {
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.tailwindcss.com"></script>
          <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
          <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        </head>
        <body style="margin: 0; padding: 0;">
          <div id="root"></div>
          <script type="text/babel">
            try {
              ${code}
              ReactDOM.render(<App />, document.getElementById('root'))
            } catch(e) {
              document.getElementById('root').innerHTML = '<div style="padding: 20px; color: red; font-family: monospace;"><strong>Error:</strong> ' + e.message + '</div>'
            }
          </script>
        </body>
        </html>
      `
      
      const blob = new Blob([htmlContent], { type: 'text/html' })
      const url = URL.createObjectURL(blob)
      iframeRef.current.src = url
    }
  }, [code])

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Navbar */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-white font-bold text-lg">GEO TECH Studio</h1>
          <span className="text-gray-500 text-sm">Live Preview Editor</span>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Device Selector */}
          <div className="flex gap-2 bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setDevice('mobile')}
              className={`px-3 py-1 rounded text-sm transition ${
                device === 'mobile' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              📱 Mobile
            </button>
            <button
              onClick={() => setDevice('tablet')}
              className={`px-3 py-1 rounded text-sm transition ${
                device === 'tablet' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              📊 Tablet
            </button>
            <button
              onClick={() => setDevice('desktop')}
              className={`px-3 py-1 rounded text-sm transition ${
                device === 'desktop' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              🖥️ Desktop
            </button>
          </div>

          {/* Zoom Control */}
          <div className="flex items-center gap-2 bg-gray-700 rounded-lg px-3 py-1">
            <button onClick={() => setZoom(Math.max(50, zoom - 10))} className="text-gray-300 hover:text-white">
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <span className="text-gray-300 text-sm w-12 text-center">{zoom}%</span>
            <button onClick={() => setZoom(Math.min(200, zoom + 10))} className="text-gray-300 hover:text-white">
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Editor Container */}
      <div id="editor-container" className="flex-1 flex overflow-hidden relative">
        {/* Code Editor */}
        <div style={{ width: `${dividerPos}%` }} className="flex flex-col bg-gray-800 border-r border-gray-700">
          <div className="px-4 py-2 bg-gray-700 border-b border-gray-600">
            <p className="text-white text-sm font-mono">App.tsx</p>
          </div>
          <textarea
            ref={editorRef}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 p-4 bg-gray-800 text-green-400 font-mono text-sm resize-none focus:outline-none"
            spellCheck="false"
          />
        </div>

        {/* Divider */}
        <div
          onMouseDown={() => setIsDragging(true)}
          className="w-1 bg-gray-700 hover:bg-blue-500 cursor-col-resize transition"
        />

        {/* Preview */}
        <div style={{ width: `${100 - dividerPos}%` }} className="flex flex-col bg-gray-800">
          <div className="px-4 py-2 bg-gray-700 border-b border-gray-600 flex justify-between items-center">
            <p className="text-white text-sm font-mono">Preview</p>
            <span className="text-gray-500 text-xs">Auto-refresh</span>
          </div>
          <div className="flex-1 overflow-auto flex items-center justify-center p-4">
            <div
              style={{
                width: deviceWidths[device],
                transform: `scale(${zoom / 100})`,
                transformOrigin: 'center',
              }}
              className="bg-white rounded-lg shadow-2xl overflow-hidden"
            >
              <iframe
                ref={iframeRef}
                className="w-full h-screen border-none"
                sandbox="allow-scripts"
                title="Live Preview"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Studio
