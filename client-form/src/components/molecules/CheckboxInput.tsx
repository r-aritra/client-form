import React from 'react'
import { CheckboxInputComponent } from '../atoms/CheckboxInput'

/**
 * Input
 * Common jsx component to show Input
 * @returns
 */

const MandatoryInput: React.FC<{
  classStr?: string
  placeholder?: string
  value: boolean
  onChange: (value: boolean) => void
}> = ({ classStr, placeholder, value, onChange }) => {
  return (
    <div className="mt-10">
      <div>
        <label>Mandatory</label>
      </div>
      <CheckboxInputComponent
        value={value}
        onChange={onChange}
      />
    </div>
  )
};

export { MandatoryInput }
