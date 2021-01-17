import React from 'react'

import { ThemeProvider, CSSReset } from '@chakra-ui/react'

import theme from '../../styles/theme'

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  )
}

export default ThemeContainer
