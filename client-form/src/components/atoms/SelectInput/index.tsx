import React from 'react'
import Select from 'react-select'

/**
 * SelectInput
 * Common jsx component to show selectinput (input text)
 * @returns
 */

const SelectInput: React.FC<{
  classStr?: string
  placeholder?: string
  value: any
  optionList: any
  onChange: (value: string) => void
}> = ({ classStr, placeholder, value, onChange, optionList }) => {
  return (
    <>
      <Select
        className={classStr}
        value={value}
        placeholder={placeholder}
        options={optionList}
        onChange={onChange}
      />
    </>
  )
}

export { SelectInput }
