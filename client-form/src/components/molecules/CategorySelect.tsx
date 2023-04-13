import React from 'react'
import { SelectInput } from '../atoms/SelectInput'

/**
 * Category
 * Common jsx component to show Category select
 * @returns
 */

const CategorySelect: React.FC<{
  classStr?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  optionList: any
}> = ({ classStr, placeholder, value, onChange, optionList }) => {
  return (
    <div className="mt-10">
      <div>
        <label>Category</label>
      </div>
      <SelectInput
        value={value}
        onChange={onChange}
        optionList={optionList}
      />
    </div>
  )
};

export { CategorySelect }
