import { Box, Container } from '@chakra-ui/react'

import Header from './Header'

const Layout = ({ children }) => {
  return (
    <Box bg="gray.50" h="100%" minH="100vh">
      <Header />
      <Container>{children}</Container>
    </Box>
  )
}

export default Layout
