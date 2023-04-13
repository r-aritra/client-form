import React from 'react'
import { SelectInput } from '../atoms/SelectInput'

/**
 * Input
 * Common jsx component to show Input
 * @returns
 */

const ServiceTypeSelect: React.FC<{
  classStr?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  optionList: any
}> = ({ classStr, placeholder, value, onChange, optionList }) => {
  return (
    <div className="mt-10">
      <div>
        <label>Service Type</label>
      </div>
      <SelectInput
        value={value}
        onChange={onChange}
        optionList={optionList}
      />
    </div>
  )
};

export { ServiceTypeSelect }
