/** @jsxImportSource @emotion/react */

import React, { useEffect } from 'react'

import { css } from '@emotion/react'
import { Box, List, ListItem, Typography } from '@mui/joy'
import { motion, useAnimationControls } from 'framer-motion'
import { ArrowRight } from 'phosphor-react'

import useShortHandMenu from '@/features/home/hooks/useShortHandMenu'

const AccessMenu = () => {
  const { opened, menuId, animation, setShortHandMenu } = useShortHandMenu()
  const controls = useAnimationControls()

  const handleOpenSubMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShortHandMenu((prevState) => {
      return {
        ...prevState,
        opened: true,
        menuId: 'access',
      }
    })
    controls.set({
      height: 0,
    })
    controls.start({
      x: '-100%',
      visibility: 'hidden',
      skewX: 0,
      skewY: 0,
      opacity: 0,
    })
  }

  useEffect(() => {
    if (!opened) {
      controls.set({
        height: 'auto',
      })
      controls.start({
        visibility: 'visible',
        x: '0%',
        skewX: 1,
        skewY: 1,
        opacity: 1,
      })
    } else {
      controls.set({
        height: 0,
        visibility: 'hidden',
        skewX: 0,
        skewY: 0,
        opacity: 0,
      })
    }
  }, [opened, controls, animation])

  return (
    <Box
      component={motion.nav}
      animate={controls}
      initial={{
        x: '0%',
        visibility: 'visible',
        skewX: 0,
        skewY: 0,
        opacity: 0,
        height: 'auto',
      }}
      transition={{
        duration: 0.15,
        ease: 'easeInOut',
      }}
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
          onClick={handleOpenSubMenu}
        >
          <Typography>Access</Typography>
          <ArrowRight
            size={32}
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          />
        </ListItem>
      </List>
    </Box>
  )
}

export default AccessMenu
