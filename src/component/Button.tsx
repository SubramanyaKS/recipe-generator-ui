import type { ButtonProps } from '../utils/types'


const Button = ({title,color,onClick}:ButtonProps) => {
  return (
    <div>
        <button onClick={onClick} className={`${color} text-white px-4 rounded-2xl py-1 transition-colors`}>{title}</button>
    </div>
  )
}

export default Button