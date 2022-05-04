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
  it('Renders the Select dropdown with a default value', () => {
    renderSelect({
      value: ingredients[0],
    })
    screen.getByText(ingredients[0].label)
  })

  it('Renders the Select with a label', () => {
    const LABEL = 'Ingredients'
    renderSelect({
      label: LABEL,
    })
    screen.getByText(LABEL)
  })

  it('Opens the select menu', () => {
    renderSelect()
    fireEvent.click(screen.getByText('Select option'))
    expect(screen.getByRole('listbox')).toBeVisible()
  })

  it('Shows correct options', () => {
    renderSelect()
    fireEvent.click(screen.getByText('Select option'))
    ingredients.forEach((ingredient) => {
      screen.getByText(ingredient.label)
    })
  })

  it('Can select an option and display it', () => {
    renderSelect()
    fireEvent.click(screen.getByText('Select option'))
    fireEvent.click(screen.getByText(ingredients[1].label))
    expect(screen.getByTestId(`select-ingredients`)).toHaveTextContent(
      ingredients[1].label
    )
  })

  it('Shows an error message when there is an error', () => {
    const ERROR_MESSAGE = 'Please select one of the values!'
    renderSelect()
    expect(screen.queryByText(ERROR_MESSAGE)).toBeFalsy()
    renderSelect({
      error: true,
      errorMessage: ERROR_MESSAGE,
    })
    screen.getByText(ERROR_MESSAGE)
  })
})
