import React from 'react'

/**
 * Input
 * Common jsx component to show Input
 * @returns
 */

const CheckboxInputComponent: React.FC<{
  classStr?: string
  placeholder?: string
  value: boolean
  onChange: (value: boolean) => void
}> = ({ classStr, placeholder, value, onChange }) => {
  return (
    <>
      <input
        type="checkbox"
        className={`uk-input ${classStr}`}
        placeholder={placeholder}
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      /> {value ? 'On' : 'Off'}
    </>
  )
};

export { CheckboxInputComponent }
