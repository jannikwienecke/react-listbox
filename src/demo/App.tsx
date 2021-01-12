import ListBox from '../lib'
import Headline from '../lib/components/Headline'
import List, { ListItem } from '../lib/components/List'
import Logo from '../lib/components/Logo'
import { useListBox } from '../lib/hooks/useListBox'

import { TEST } from '../lib/hooks/useTest'
export const listItems: ListItem[] = [
  { id: '1', name: 'Iphone from Jannik', isActive: true },
  { id: '2', name: 'Macbook', isActive: false },
]

const App = () => {
  console.log('TEST', TEST)
  const { value, handleChange } = useListBox({
    listItems,
    onChange: activeItem => {
      console.log('activeItem = ', activeItem)
    },
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
        <List listItems={listItems} />
      </ListBox>
    </div>
  )
}

export default App
