export default function StatusBadge({ status }) {
  const getStatusColor = (status) => {
    const statusLower = status.toLowerCase()
    
    if (statusLower.includes('iterating') || statusLower.includes('iterate')) {
      return 'text-amber-400'
    }
    if (statusLower.includes('progress') || statusLower.includes('active')) {
      return 'text-blue-400'
    }
    if (statusLower.includes('review') || statusLower.includes('reviewing')) {
      return 'text-purple-400'
    }
    if (statusLower.includes('complete') || statusLower.includes('done')) {
      return 'text-green-400'
    }
    if (statusLower.includes('paused') || statusLower.includes('hold')) {
      return 'text-gray-400'
    }
    
    return 'text-accent'
  }

  return (
    <span className={`${getStatusColor(status)} font-medium`}>
      {status}
    </span>
  )
}
