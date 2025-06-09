import React from "react";

interface InputPropsType {
  label?: string;
  placeholder: string;
  type: string;
  color?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const Input = ({
  label,
  placeholder,
  type,
  color = "text-gray-700",
  value,
  onChange,
  className,
}: InputPropsType) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          className={`block mb-2 text-sm font-medium ${color} ${className}`}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:${color}`}
      />
    </div>
  );
};

export default Input;
