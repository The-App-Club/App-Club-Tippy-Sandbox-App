/** @jsxImportSource @emotion/react */

import React, { FC } from 'react'

import { css } from '@emotion/react'
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/joy'
import Avatar from '@mui/joy/Avatar'
import { Placement } from 'tippy.js'

import AccessMenu from './AccessMenu'
import AccessMenuNav from './AccessMenuNav'

type TippyParam = {
  'data-placement': Placement
  'data-reference-hidden'?: string | undefined
  'data-escaped'?: string | undefined
}

const ShortHandMenu: FC<{ props: TippyParam }> = ({ props }) => {
  return (
    <Box
      tabIndex={-1}
      {...props}
      css={css`
        width: 300px;
        min-height: 20rem;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
          rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        background: #ffffff;
        overflow: hidden;
      `}
    >
      <Box component={'nav'}>
        <List>
          <ListItem
            css={css`
              :hover {
                background: #f1f5f9;
              }
            `}
          >
            <ListItemButton
              css={css`
                display: flex;
                align-items: center;
                gap: 0.5rem;
              `}
            >
              <Avatar
                css={css`
                  cursor: pointer;
                `}
                alt='らいおん'
                src='/assets/らいおん.png'
              />
              <Box
                css={css`
                  display: flex;
                  align-items: flex-start;
                  flex-direction: column;
                `}
              >
                <Typography
                  component={'span'}
                  css={css`
                    font-size: 1rem; /* 16px */
                    line-height: 1.5rem; /* 24px */
                  `}
                >{`Cowboy`}</Typography>
                <Typography
                  color='neutral'
                  css={css`
                    font-size: 0.75rem; /* 12px */
                    line-height: 1rem; /* 16px */
                  `}
                >{`sample@example.com`}</Typography>
              </Box>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Divider />
      {<AccessMenu />}
      {<AccessMenuNav />}
    </Box>
  )
}

export default ShortHandMenu
