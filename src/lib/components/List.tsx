import React from 'react'
import { ListboxOption } from '@reach/listbox'
import deviceLogo from '../../public/device.svg'
import { ListText } from './ListText'
import './List.css'

export type ListItem = {
  id: number
  name: string
  isActive: boolean
}
interface ListProps {
  listItems: ListItem[]
  styles?: React.CSSProperties
  logoSrc?: string
}

const List: React.FC<ListProps> = ({ listItems, styles, logoSrc }) => {
  return (
    <ul className="list-box-list-wrapper">
      {listItems.map(item => {
        return (
          <ListboxOption
            key={item.id}
            className="list-box-list-item"
            style={styles}
            value={item.name}
          >
            <div className="list-box-list-logo">
              <img
                alt="device"
                src={logoSrc ? logoSrc : deviceLogo}
                height="75px"
                width="75px"
              />
            </div>
            <ListText item={item} />
          </ListboxOption>
        )
      })}
    </ul>
  )
}
export default List
