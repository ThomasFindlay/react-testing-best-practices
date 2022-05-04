import Select, { SelectProps } from './Select'
import { render, fireEvent, screen } from 'test-utils'
import { OptionsValue } from './Select'
import { useState } from 'react'

const ingredients: OptionsValue[] = [
  {
    id: 1,
    label: 'Chicken',
    value: 'chicken',
  },
  {
    id: 2,
    label: 'Potatoes',
    value: 'potatoes',
  },
  {
    id: 3,
    label: 'Duck',
    value: 'duck',
  },
  {
    id: 4,
    label: 'Carrot',
    value: 'carrot',
  },
]

interface RenderSelectProps
  extends Omit<SelectProps, 'id' | 'options' | 'onChange'> {
  id?: string | number
  options?: OptionsValue[]
  onChange?: (item: OptionsValue) => void
}

const SelectWrapper = (props?: RenderSelectProps) => {
  const {
    id = 'ingredients',
    options = ingredients,
    value,
    ...selectProps
  } = props || {}
  const [selectedIngredient, setSelectedIngredient] = useState<
    typeof ingredients[0] | undefined
  >(value)

  return (
    <Select
      id={id}
      value={selectedIngredient}
      onChange={setSelectedIngredient}
      options={options}
      {...selectProps}
    />
  )
}

const renderSelect = (props?: RenderSelectProps) => {
  return render(<SelectWrapper {...props} />)
}

describe('Select.tsx', () => {
  it('Renders the Select dropdown with a default value', () => {})

  it('Renders the Select with a label', () => {})

  it('Opens the select menu', () => {})

  it('Shows correct options', () => {})

  it('Can select an option and display it', () => {})

  it('Shows an error message when there is an error', () => {})
})
