import React from 'react'

/**
 * Input
 * Common jsx component to show Input
 * @returns
 */

const InputComponent: React.FC<{
  classStr?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
}> = ({ classStr, placeholder, value, onChange }) => {
  return (
    <>
      <input
        className={`uk-input ${classStr}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
};

export { InputComponent }
