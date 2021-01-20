import ListBox from '../lib'
import Headline from '../lib/components/Headline'
import List, { ListItem } from '../lib/components/List'
import Logo from '../lib/components/Logo'
import { useListBox } from '../lib/hooks/useListBox'
import React from 'react'
export const listItems: ListItem[] = [
  {
    id: '1',
    name:
      'Iphone from Jannikphone from Jannikphone from Jannikphone from Jannikphone from Jannik',
    isActive: true,
  },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'HELLO WORLD', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
  { id: '2', name: 'Macbook', isActive: false },
]

const App = () => {
  const { value, handleChange } = useListBox({
    listItems,
    onChange: activeItem => {
      console.log('activeItem = ', activeItem)
    },
  })

  const activeItemRef = React.useRef<HTMLDivElement>()

  React.useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView()
    }
  })

  React.useEffect(() => {
    console.log('open...')

    activeItemRef.current && activeItemRef.current.scrollIntoView()
  })

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'center',
        background: '#454545',
      }}
    >
      <ListBox value={value} handleChange={handleChange}>
        <Headline text={'Connect with a device'} />
        <Logo />
        <List listItems={listItems} ref={activeItemRef} />
      </ListBox>
    </div>
  )
}

export default App
