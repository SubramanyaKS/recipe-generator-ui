// components/ReusableDropdown.js
import { useState } from 'react';
import type { ReusableDropdownProps } from '../utils/types';


const ReusableDropdown: React.FC<ReusableDropdownProps> = ({
  label,
  items,
  selected,
  onSelect,
  placeholder = 'Select an option',
}) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleSelect = (id:string) => {
    onSelect(id);
    setOpen(false);
  };

  return (
    <div className="relative w-full mx-auto mt-4">
      {label && (
        <label className="block font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <button
        onClick={handleToggle}
        className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-left text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        {selected || placeholder}
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border text-gray-700 border-gray-200 rounded shadow-lg max-h-60 overflow-auto">
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReusableDropdown;
