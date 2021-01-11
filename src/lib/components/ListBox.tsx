import {
  ListboxButton,
  // ListboxButton,
  ListboxInput,
  ListboxList,
  ListboxPopover,
} from '@reach/listbox'
import React from 'react'
import Button from './Button'
import Headline from './Headline'
import List, { ListItem } from './List'
import './ListBox.css'
import ListWrapper from './ListWrapper'
import Logo from './Logo'
/**
 *
 */

interface ListBoxProps {
  listItems: ListItem[]
  value: ListItem
  handleChange: (itemName: string) => void
}

const Listbox: React.FC<ListBoxProps> = ({
  listItems,
  value,
  handleChange,
}) => {
  const ref = React.useRef<HTMLUListElement>(null)

  const calculateUlist = (rect_: any) => {
    const rect: DOMRect = rect_
    if (!rect || !ref.current) return {}

    const heightList = ref.current?.getBoundingClientRect().height
    const width = 200

    return {
      ...rect,
      top: rect?.top ? rect.top - (heightList + 30) : 0,
      left: rect.left - width / 2 + rect.width / 2,
      width: width,
    }
  }

  return (
    <>
      <div>
        <ListboxInput
          defaultValue="popeyes"
          aria-labelledby={'labelId'}
          value={value.name}
          onChange={handleChange}
        >
          <ListboxButton>
            <Button />
          </ListboxButton>

          <ListboxPopover position={calculateUlist}>
            <ListboxList
              className="list-box-list"
              ref={ref}
              style={{ background: '#282828', color: 'white', padding: '20px' }}
            >
              <ListWrapper>
                <Headline />
                <Logo />
                <List listItems={listItems} />
              </ListWrapper>
            </ListboxList>
          </ListboxPopover>
        </ListboxInput>
      </div>
    </>
  )
}
export default Listbox
