import React from 'react'
import { ListboxOption } from '@reach/listbox'
import './List.css'

export type ListItem = {
  id: number
  name: string
}
interface ListProps {
  listItems: ListItem[]
}

const List: React.FC<ListProps> = ({ listItems }) => {
  return (
    <ul className="list-box-list-wrapper">
      {listItems.map(item => {
        return (
          <ListboxOption className="list-box-list-item" value={item.name}>
            <div className="list-box-list-logo">{item.name}</div>
            <div className="list-box-list-text">{item.name}</div>
          </ListboxOption>
        )
      })}
    </ul>
  )
}
export default List
