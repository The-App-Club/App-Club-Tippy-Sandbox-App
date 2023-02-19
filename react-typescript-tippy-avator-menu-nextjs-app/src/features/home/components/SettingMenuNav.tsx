/** @jsxImportSource @emotion/react */

import { useEffect } from 'react'

import { css } from '@emotion/react'
import { Box, List, ListItem, Typography } from '@mui/joy'
import { motion, useAnimationControls } from 'framer-motion'
import { ArrowLeft } from 'phosphor-react'

import useShortHandMenu from '@/features/home/hooks/useShortHandMenu'

const SettingMenuNav = () => {
  const { opened, menuId, setShortHandMenu } = useShortHandMenu()
  const controls = useAnimationControls()

  const handleAnimationStart = () => {
    setShortHandMenu((prevState) => {
      return {
        ...prevState,
        animation: 'start',
      }
    })
  }
  const handleAnimationComplete = () => {
    setShortHandMenu((prevState) => {
      return {
        ...prevState,
        animation: 'end',
      }
    })
  }

  const handleCloseSubMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShortHandMenu((prevState) => {
      return {
        ...prevState,
        opened: false,
        menuId: null,
      }
    })
    controls.set({ height: 0 })
    controls.start({
      x: '100%',
      visibility: 'hidden',
      skewX: 1,
      skewY: 1,
      opacity: 1,
    })
  }

  useEffect(() => {
    if (opened && menuId === 'settings') {
      controls.set({ height: 'auto' })
      controls.start({
        x: '0%',
        visibility: 'visible',
        skewX: 1,
        skewY: 1,
        opacity: 1,
      })
    } else {
      controls.set({ height: 0 })
      controls.start({
        x: '100%',
        visibility: 'hidden',
        skewX: 0,
        skewY: 0,
        opacity: 0,
      })
    }
  }, [menuId, opened, controls])

  return (
    <Box
      component={motion.nav}
      animate={controls}
      transition={{
        duration: 0.15,
        ease: 'easeInOut',
      }}
      initial={{
        x: '100%',
        visibility: 'hidden',
        skewX: 0,
        skewY: 0,
        opacity: 0,
      }}
      onAnimationStart={handleAnimationStart}
      onAnimationComplete={handleAnimationComplete}
    >
      <List>
        <ListItem
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            :hover {
              cursor: pointer;
              background: #f1f5f9;
            }
          `}
          onClick={handleCloseSubMenu}
        >
          <ArrowLeft
            size={32}
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          />
          <Typography>Back</Typography>
        </ListItem>
        <ListItem
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            :hover {
              cursor: pointer;
              background: #f1f5f9;
            }
          `}
        >
          <Typography>Theme</Typography>
        </ListItem>
        <ListItem
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            :hover {
              cursor: pointer;
              background: #f1f5f9;
            }
          `}
        >
          <Typography>Notification</Typography>
        </ListItem>
        <ListItem
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            :hover {
              cursor: pointer;
              background: #f1f5f9;
            }
          `}
        >
          <Typography>Invoice</Typography>
        </ListItem>
      </List>
    </Box>
  )
}

export default SettingMenuNav
