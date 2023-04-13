import React from 'react'
import { InputComponent } from '../atoms/Input'

/**
 * Input
 * Common jsx component to show Input
 * @returns
 */

const ServiceInput: React.FC<{
  classStr?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
}> = ({ classStr, placeholder, value, onChange }) => {
  return (
    <>
      <div>
        <label>Service</label>
      </div>
      <InputComponent
        value={value}
        onChange={onChange}
      />
    </>
  )
};

export { ServiceInput }
