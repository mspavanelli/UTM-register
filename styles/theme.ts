import { theme, DefaultTheme } from '@chakra-ui/react'

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Nunito, system-ui, sans-serif',
    heading: 'Nunito, system-ui, sans-serif',
    mono: '"Fira Code", monospace',
  },
  fontWeights: {
    ...theme.fontWeights,
    light: 300,
    normal: 400,
    bold: 600,
  },
}

export default customTheme
