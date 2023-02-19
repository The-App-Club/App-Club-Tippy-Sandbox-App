/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { Box, Divider, Typography } from '@mui/joy'

import Spacer from '@/components/ui/Spacer'

const Home = () => {
  return (
    <Box component={'section'} className={'mx-auto mt-24 w-full max-w-lg'}>
      <Typography
        component={'h1'}
        level='h1'
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        ホーム
      </Typography>
      <Spacer />
      <Divider />
      <Spacer />
    </Box>
  )
}

export default Home
