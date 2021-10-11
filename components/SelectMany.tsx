import {} from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'transparent',
    borderColor: 'rgb(156, 163, 175)',
    borderWidth: '2px',
    borderRadius: '10px',
    color: 'white',
  }),
  input: (styles) => ({
    ...styles,
    color: 'white',
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: 'rgb(31, 41, 55)',
  }),
  option: (styles) => {
    return {
      ...styles,
      backgroundColor: 'rgb(31, 41, 55)',
      color: 'rgba(156, 163, 175)',
      cursor: 'pointer',
      ':hover': {
        color: 'white',
      },
      ':active': {
        ...styles[':active'],
        backgroundColor: 'rgb(17, 24, 39)',
      },
    }
  },
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: 'rgb(17, 24, 39)',
    }
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: 'white',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: 'rgba(156, 163, 175)',
    ':hover': {
      color: 'white',
    },
  }),
}

export type SelectMany = {
  defaultValue?: object[]
  options: object[]
  placeholder: string
  onSelect: (value: object[]) => void
}

function SelectMany({
  defaultValue = [],
  options,
  placeholder,
  onSelect,
}: SelectMany) {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={defaultValue}
      isMulti
      options={options}
      placeholder={placeholder}
      styles={colourStyles}
      onChange={onSelect}
    />
  )
}

export default SelectMany
