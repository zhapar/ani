import React from 'react'
import cn from 'classnames'
import Times from 'icons/Times'

type OptionsProp = {
  className?: string
  title: string
  setOptions: Function
  options: {
    title: string
    id: string | number
    selected: boolean
  }[]
}

function Options({ className, title, setOptions, options }: OptionsProp) {
  return (
    <div className={cn('flex flex-col', className)}>
      <div className="flex justify-between">
        <span>{title}</span>
        <span
          className="text-sm text-gray-500 hover:underline cursor-pointer"
          onClick={() =>
            setOptions((oldOptions) => {
              return oldOptions.map((option) => ({
                ...option,
                selected: false,
              }))
            })
          }>
          clear
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-1">
        {options.map(({ title, id, selected }) => (
          <div
            className={cn(
              'pl-3 pr-7 py-1  text-gray-400 relative rounded-md border border-dashed ',
              selected
                ? 'bg-gray-900  border-primary'
                : 'hover:text-gray-50 cursor-pointer border-transparent'
            )}
            key={id}
            onClick={() => {
              if (!selected)
                setOptions((oldOptions) => {
                  return oldOptions.map((option) =>
                    option.id === id ? { ...option, selected: true } : option
                  )
                })
            }}>
            {title}
            {selected && (
              <div
                className="cursor-pointer absolute right-1 top-1/2 transform -translate-y-1/2"
                onClick={() =>
                  setOptions((oldOptions) => {
                    return oldOptions.map((option) =>
                      option.id === id ? { ...option, selected: false } : option
                    )
                  })
                }>
                <Times className="text-white w-4" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Options
