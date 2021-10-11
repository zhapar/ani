import cn from 'classnames'
import { MouseEventHandler } from 'react'

function SelectOption({
  selected,
  onSelect,
  label,
  className,
  size = 'small',
}: {
  selected: boolean
  onSelect: MouseEventHandler<HTMLDivElement>
  label: string
  className?: string
  size?: string
}) {
  return (
    <div
      className={cn(
        'relative rounded-md',
        size === 'small' && 'px-2 py-1.5 text-sm',
        size === 'large' && 'px-5 py-2',
        selected
          ? 'bg-gray-900 text-gray-50'
          : 'text-gray-400 hover:text-gray-50 cursor-pointer border-transparent',
        className
      )}
      onClick={onSelect}>
      {label}
    </div>
  )
}

// value === status
//                   ? ' bg-gray-900 text-gray-50'
//                   : 'text-gray-500 cursor-pointer hover:text-gray-100'

export default SelectOption
