import React from 'react'
import { ListItem } from './List'

export interface ListTextProps {
  item: ListItem
}

export const ListText: React.FC<ListTextProps> = ({ item }: ListTextProps) => {
  const textHeadline = item.isActive ? 'You listen at:' : item.name
  const subText = item.isActive ? item.name : 'Spotify Connect'
  const isActiveClass = item.isActive && 'list-text-is-active'
  return (
    <div className={`list-box-list-text ${isActiveClass}`}>
      <div className="list-box-list-text-header">{textHeadline}</div>
      <div className="list-box-list-text-name">{subText}</div>
    </div>
  )
}
