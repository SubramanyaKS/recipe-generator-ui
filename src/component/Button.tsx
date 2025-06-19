import type { ButtonProps } from '../utils/types'


const Button = ({title,color,onClick}:ButtonProps) => {
  return (
    <div>
        <button onClick={onClick} className={`${color} text-white px-4 py-2 transition-colors rounded`}>{title}</button>
    </div>
  )
}

export default Button