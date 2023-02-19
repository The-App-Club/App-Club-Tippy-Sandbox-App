import { useMemo } from 'react'

import { useRecoilValue, useSetRecoilState } from 'recoil'

import { shortHandMenuState } from '@/features/home/stores/shortHandMenu'

const useShortHandMenu = () => {
  const activeShortHandMenu = useRecoilValue(shortHandMenuState)
  const setShortHandMenu = useSetRecoilState(shortHandMenuState)

  const { opened, animation } = useMemo(() => {
    return { ...activeShortHandMenu }
  }, [activeShortHandMenu])

  return useMemo(() => {
    return {
      animation,
      opened,
      setShortHandMenu,
    }
  }, [animation, opened, setShortHandMenu])
}

export default useShortHandMenu
