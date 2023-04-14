import React from 'react'

/**
 * Button
 * Common jsx component to Button
 * @returns
 */

const ButtonComponent: React.FC<{
  onClick: () => void
  label: string
}> = ({ onClick, label }) => {
  return (
    <div className="mt-10">
      <button
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  )
};

export { ButtonComponent }
