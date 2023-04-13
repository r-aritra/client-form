import React from 'react'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

/**
 * DatePickerInput
 * Common jsx component to show datepicker (input text)
 * @returns
 */

const DatePickerInput: React.FC<{
  classStr?: string
  placeholder?: string
  time?: any
  handleTimeChange: (date: Date) => void
}> = ({ classStr, placeholder, time, handleTimeChange }) => {
  return (
    <>
      <ReactDatePicker
        onChange={handleTimeChange}
        className={classStr}
        placeholderText={placeholder}
        selected={time}
        onChangeRaw={(e: { preventDefault: () => void }) => {
          e.preventDefault()
        }}
      />
    </>
  )
}

export { DatePickerInput }
