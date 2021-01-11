import React from 'react'
import { ListboxOption } from '@reach/listbox'

export type ListItem = {
  id: number
  name: string
}
interface ListProps {
  listItems: ListItem[]
}

const List: React.FC<ListProps> = ({ listItems }) => {
  return (
    <>
      <div>
        {listItems.map(item => {
          return <ListboxOption value={item.name}>{item.name}</ListboxOption>
        })}
      </div>
    </>
  )
}
export default List
