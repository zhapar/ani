import Times from 'icons/Times'
import { ChangeEvent } from 'react'
import cn from 'classnames'

type InputProp = {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  reset: () => void
  hasReset?: boolean
  label?: string
  id: string
  type?: string
  className?: string | undefined
}

function Input({
  value,
  onChange,
  reset,
  label,
  id,
  hasReset = false,
  type = 'text',
  className,
}: InputProp) {
  return (
    <div className={cn('flex flex-col space-y-1', className)}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className="relative">
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder="title of anime"
          className="w-full bg-transparent border-2 outline-none  rounded h-10 px-3 border-gray-400 text-base text-gray-50 placeholder-gray-500"
        />
        {hasReset && value && value !== '' && (
          <div
            className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={reset}>
            <Times className="text-white" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Input
