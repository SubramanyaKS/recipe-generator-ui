import type { IconButtonProps } from '../utils/types'

const IconButton = ({color,title,onClick,Icon}: IconButtonProps) => {
  return (
    <div >
        <button onClick={onClick} className={`flex items-center justify-center p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${color}`}>
        {Icon}
        {title&& <span>{title}</span>}
        </button>

    </div>
  )
}

export default IconButton