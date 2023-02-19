import { Box } from '@mui/joy'

import { FallbackLoading } from '@/components/fallback/FallbackLoading'

const FallbackPageLoading = () => {
  return (
    <Box
      className={
        'mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center justify-center'
      }
    >
      <FallbackLoading />
    </Box>
  )
}

export default FallbackPageLoading
