import type { InputProps } from '../utils/types'

const InputFeild = ({title,name,OnChange,id,value,type}:InputProps) => {
  return (
    <div className="">
            <label className="block  text-blue-600 mb-2" htmlFor={id}>
              {title}
            </label>
            <input
              type={type}
              id={id}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              value={value}
              onChange={OnChange}
              name={name}
              required
            />
          </div>
  )
}

export default InputFeild