import { Box } from '@chakra-ui/react'

const Header = ({ children }) => {
  return (
    <Box bg="gray.50" h="100%" minH="100vh">
      {children}
    </Box>
  )
}

export default Header
