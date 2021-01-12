import React from 'react'
interface PropsUseOutsideAlerter {
  ref: React.RefObject<any>
  callback: () => void
}

export function useOutsideClick({ ref, callback }: PropsUseOutsideAlerter) {
  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [callback, ref])
}
