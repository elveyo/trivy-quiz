import React, { useState } from 'react'
import Select from 'react-select'

function SelectTag({ className, options, selectType }) {
  const [item, selectItem] = useState(null)
  const handleChange = item => {
    selectItem(item)
  }

  return (
    <Select
      name={selectType}
      className={className}
      onChange={handleChange}
      value={item}
      options={options}
    />
  )
}

export default SelectTag
