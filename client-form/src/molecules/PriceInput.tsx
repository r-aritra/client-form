import React from 'react'
import { NumberInputComponent } from '../atoms/NumberInput'

/**
 * Price
 * Common jsx component to show Price Input
 * @returns
 */

const PriceInput: React.FC<{
  classStr?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
}> = ({ classStr, placeholder, value, onChange }) => {
  return (
    <div className="mt-10">
      <div>
        <label>Price</label>
      </div>
      <NumberInputComponent
        value={value}
        onChange={onChange}
      />
    </div>
  )
};

export { PriceInput }
