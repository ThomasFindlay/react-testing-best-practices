import { Fragment } from 'react'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
export interface OptionsValue {
  id: string | number
  label: string
  value: string
}

export interface SelectProps {
  id: string | number
  label?: string
  options: OptionsValue[]
  onChange: (item: OptionsValue) => void
  value?: OptionsValue
  error?: boolean
  errorMessage?: string
}

const Select = (props: SelectProps) => {
  const { id, label, options, onChange, value, error, errorMessage } = props
  return (
    <div className="text-left space-y-1">
      {label ? (
        <label
          className="text-sm font-semibold text-gray-500"
          htmlFor={`select-${id}`}
        >
          {label}
        </label>
      ) : null}
      <div>
        <Listbox value={value} onChange={onChange}>
          <div className="relative mt-1">
            <Listbox.Button
              data-testid={`select-${id}`}
              className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left shadow-sm border border-gray-200 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            >
              <span className="block truncate">
                {value?.label || 'Select option'}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option, optionIdx) => (
                  <Listbox.Option
                    key={option.id || optionIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {option.label}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>

        {error ? (
          <div className="mt-2 px-4 py-2 text-sm bg-red-50 text-red-700">
            <span>{errorMessage}</span>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Select
