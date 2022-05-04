import { useState } from 'react'
import './App.css'
import Select, { OptionsValue } from './components/select/Select'

const ingredients: OptionsValue[] = [
  {
    id: 1,
    label: 'Chicken',
    value: 'chicken',
  },
  {
    id: 2,
    label: 'Beef',
    value: 'beef',
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

function App() {
  const [selectedIngredient, setSelectedIngredient] =
    useState<typeof ingredients[0]>()
  return (
    <div className="App mx-auto max-w-6xl text-center my-8">
      <h1 className="font-semibold text-2xl">Select Example</h1>
      <div className="mt-8 max-w-[20rem] mx-auto">
        <Select
          id="ingredients"
          label="Ingredients"
          value={selectedIngredient}
          onChange={setSelectedIngredient}
          options={ingredients}
          error={!selectedIngredient}
          errorMessage="Please select a value."
        />
      </div>
    </div>
  )
}

export default App
