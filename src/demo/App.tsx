import React from 'react'
import ListBox from '../lib'
import { ListItem } from '../lib/components/List'

const App = () => {
  let [value, setValue] = React.useState<ListItem>({ id: 1, name: 'Pollo' })

  const listItems = [
    { id: 1, name: 'Pollo' },
    { id: 2, name: 'Toasst' },
  ]

  const handleChange = (itemName: string) => {
    console.log('hier...', itemName)

    const selectedItem = listItems.find(item => item.name === itemName)
    if (!selectedItem) return

    setValue(selectedItem)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'center',
        background: '#454545',
      }}
    >
      <ListBox
        value={value}
        handleChange={handleChange}
        listItems={listItems}
      />
    </div>
  )
}

export default App
