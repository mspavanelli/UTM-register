import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react'

import { formatCurrency } from '../utils/format'
import Operation from '../utils/enum/Operation'

const Account = () => {
  const formatMoney = formatCurrency()

  return (
    <Box mt="10" bg="white" boxShadow="md" p="10" fontFamily="body">
      <Heading as="h3" color="green.600" size="lg" mb="5">
        Account
      </Heading>

      <Heading as="h4" color="green.600" size="md" mb="2">
        Balance
      </Heading>

      <Flex bg="gray.50" justify="center" align="center" boxShadow="md" p="2">
        <Text fontSize="xl">
          <Badge colorScheme="green" fontSize="lg">
            {formatMoney(100)}
          </Badge>
        </Text>
      </Flex>

      <Heading as="h4" color="green.600" size="md" my="4">
        Add operation
      </Heading>

      <Box mt="4" bg="white" boxShadow="md" p="4">
        <Box mb="4">
          <Heading as="h5" color="green.600" size="sm" my="2">
            Type
          </Heading>

          <RadioGroup defaultValue={Operation.DEPOSIT.toString()} mt="2">
            <Stack direction="row">
              <Radio
                name="type"
                colorScheme="green"
                value={Operation.DEPOSIT.toString()}
              >
                Deposit
              </Radio>
              <Radio
                name="type"
                colorScheme="green"
                value={Operation.WITHDRAW.toString()}
              >
                Withdraw
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>

        <Box mb="4">
          <Heading as="h5" color="green.600" size="sm" my="2">
            Value
          </Heading>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.500"
              fontSize="1.2em"
              children="$"
            />
            <Input type="number" focusBorderColor="green.500" />
          </InputGroup>
        </Box>

        <Button colorScheme="green" mt="2">
          Confirm
        </Button>
      </Box>
    </Box>
  )
}

export default Account
