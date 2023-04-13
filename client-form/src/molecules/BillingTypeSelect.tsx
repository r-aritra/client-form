import React from 'react'
import { SelectInput } from '../atoms/SelectInput'

/**
 * Billing Type
 * Common jsx component to show Billing type select
 * @returns
 */

const BillingTypeSelect: React.FC<{
  classStr?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  optionList: any
}> = ({ classStr, placeholder, value, onChange, optionList }) => {
  return (
    <div className="mt-10">
      <div>
        <label>Billing Type</label>
      </div>
      <SelectInput
        value={value}
        onChange={onChange}
        optionList={optionList}
      />
    </div>
  )
};

export { BillingTypeSelect }
