import {
  ListboxButton,
  ListboxInput,
  ListboxList,
  ListboxPopover,
} from '@reach/listbox'
import React from 'react'
import { useOutsideClick } from '../hooks/useOutsideClick'
import Button, { PropsStylesButton } from './Button'
import { ListItem } from './List'
import './ListBox.css'
import ListWrapper from './ListWrapper'

/**
 *
 */

interface ListBoxProps {
  value: ListItem
  handleChange: (itemName: string) => void
  stylesButton?: PropsStylesButton
}

const Listbox: React.FC<ListBoxProps> = ({
  value,
  handleChange,
  stylesButton,
  children,
}) => {
  const [visible, setVisible] = React.useState(false)

  const ref = React.useRef<HTMLUListElement>(null)
  const refButton = React.useRef<HTMLButtonElement>(null)

  useOutsideClick({
    ref: refButton,
    callback: () => {
      setVisible(false)
    },
  })

  const calculateUlist = (rect_: any) => {
    const rect: DOMRect = rect_
    if (!rect || !ref.current) return {}

    const heightList = ref.current?.getBoundingClientRect().height
    const width = 300

    return {
      ...rect,
      top: rect?.top ? rect.top - heightList : 0,
      left: rect.left - width / 2 + rect.width / 2,
      width: width,
    }
  }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <>
      <ListboxInput
        defaultValue="popeyes"
        aria-labelledby={'labelId'}
        value={value.name}
        onChange={handleChange}
        className="list-box-input"
      >
        <ListboxButton onClick={toggleVisibility} ref={refButton}>
          <Button stylesButton={stylesButton} />
        </ListboxButton>

        <ListboxPopover position={calculateUlist} className="list-box-popover">
          <ListboxList
            className={`list-box-list ${visible && 'list-box-list-active'}`}
            ref={ref}
          >
            <ListWrapper>{children}</ListWrapper>
          </ListboxList>
        </ListboxPopover>
      </ListboxInput>
    </>
  )
}
export default Listbox
